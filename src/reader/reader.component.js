import React from 'react';
import './reader.css'
import image from '../images/gf.png';
import {withRouter} from 'react-router-dom';
import firebase from '../utils/firebase/firebase';
const db = firebase.firestore();

class Reader extends React.Component {
    constructor()
    {
        super();
        this.state = {
            reader:{}
        }
    }
    componentDidMount(){
        if(this.props.location.state !== undefined){
            if(this.props.location.state.hasOwnProperty('reader')) {
                this.setState({reader:this.props.location.state.reader})
            }
        }else {
            this.getArticle(this.props.match.params.category,this.props.match.params.id)
        }
    }
    getArticle = (category,id) => {
        let allArticles = [];
        db.collection(category)
        .doc(id)
        .get()
        .then(docs => {
          if(!docs.empty) {
              this.setState({reader: docs.data()})
          }
      })
    }
    render(){
        console.log(this.props)
        return(
            <div className='reader-container-background'>
                <div className = "closeup-body-container">
                    <div className='reader-container'>
                    <div className = "reader-card">
                        <ul className='reader-ul'>
                            <div className="reader-image-and-article">
                                <div className='reader-image'><img src={image}  /></div>
                                <div className='reader-article'>
                                    <div className='reader-article-heading'>
                                        <p className='reader-article-name'>A Royale With Cheese</p>
                                        <p className='reader-article-date'>20th March 2021</p>
                                    </div>
                                    <div className='reader-article-content'>
                                        Sort of, it's actually "Le Royal Cheese". Their name for any variety of quarter-pounder is a Royal, since quarter-pound is pretty meaningless in a country that uses the metric system. In other metric-using countries it's generally called some variation of the same, including "McRoyal" and "Hamburger Royale".
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default withRouter(Reader)