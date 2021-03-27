import React from "react";
import "./reader.css";
import image from "../images/gf.png";
import { withRouter } from "react-router-dom";
import firebase from "../utils/firebase/firebase";
const db = firebase.firestore();

class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      reader: {},
      name:'',
      comment:'',
      commentError: false,
      allComments:[]
    };
  }
  componentDidMount() {
    this.getComments();
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.hasOwnProperty("reader")) {
        this.setState({ reader: this.props.location.state.reader });
      }
    } else {
      this.getArticle(
        this.props.match.params.category,
        this.props.match.params.id
      );
    }
  }
  getComments = () => {
    let allComments = [];
    db.collection('closeup').doc('1').collection('comment').get().then((docs) => {
        if(!docs.empty) {
            docs.forEach(doc => {
                allComments.push(doc.data())
            })
            this.setState({allComments:allComments})
        }
    })
  }
  getArticle = (category, id) => {
    let allArticles = [];
    db.collection(category)
      .doc(id)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          this.setState({ reader: docs.data() });
        }
      });
  };
  submitForm = (event) => {
    event.preventDefault();
    console.log('You are submitting',this.state.name)
    if(this.state.comment === '') {
        this.setState({commentError:true})
    } else {
        this.setState({commentError:false})
    }
    const data = {
        name:this.state.name?this.state.name:'Anonymous',
        comment:this.state.comment
    }
    if(this.state.comment !== '') {
        db.collection('closeup').doc('1').collection('comment').add(data).then(()=>{
            this.getComments();
            })
        this.setState({comment:''});
        var form = document.getElementById("commentForm");
        form.reset();
    }
  }
  handleName = (event) => {
    this.setState({name: event.target.value})
}
currentComments = (obj) => {
    return(
        <div className='name-comment'>
            <div>
            {obj.name} <i class='fas fa-comment-alt' ></i> :
            </div>
            <div className='comment-answer'>
            {obj.comment}
            </div>
        </div>
    )
}
handleComment = (event) => {
    this.setState({comment: event.target.value})
}
  render() {
    console.log(this.props);
    const {allComments} = this.state;
    const com = allComments.map(obj => {return (this.currentComments(obj))})
    console.log(com)
    return (
      <div className="reader-container-background">
        <div className="closeup-body-container">
          <div className="reader-container">
            <div className="reader-card">
              <ul className="reader-ul">
                <div className="reader-image-and-article">
                  <div className="reader-image">
                    <img src={image} />
                  </div>
                  <div className="reader-article">
                    <div className="reader-article-heading">
                      <p className="reader-article-name">
                        A Royale With Cheese
                      </p>
                      <p className="reader-article-date">20th March 2021</p>
                    </div>
                    <div className="reader-article-content">
                      Sort of, it's actually "Le Royal Cheese". Their name for
                      any variety of quarter-pounder is a Royal, since
                      quarter-pound is pretty meaningless in a country that uses
                      the metric system. In other metric-using countries it's
                      generally called some variation of the same, including
                      "McRoyal" and "Hamburger Royale".
                    </div>
                  </div>
                </div>
              </ul>
              <div className='comment-box-container'>
              <div className='comment-box'>
                <form id="commentForm" className='new-comment' onSubmit={this.submitForm}>
                    <input className='name' type='text' placeholder='Name(Optional)' onChange={this.handleName}/>
                    <input className='comment' type='text' placeholder='Comment' onChange={this.handleComment}/>
                    <input className='submit' type="submit" value="COMMENT" />
                    <p hidden={!this.state.commentError}>Please Enter A Comment</p>
                </form>
                <div className='current-comments'>
                {com}
                </div>
              </div>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Reader);
