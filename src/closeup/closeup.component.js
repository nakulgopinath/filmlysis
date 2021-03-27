import React from "react";
import "./closeup.css";
import { Link } from "react-router-dom";
import firebase from "../utils/firebase/firebase";
const db = firebase.firestore();

class CloseUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.getAllCloseUpPosts();
  }
  getAllCloseUpPosts = () => {
    let allArticles = [];
    db.collection("closeup")
      .orderBy("date", "desc")
      .get()
      .then((docs) => {
        if (!docs.empty) {
          docs.forEach((doc) => {
            const article = {
              id: doc,
              ...doc.data(),
            };
            allArticles.push(article);
          });
          this.setState({ topCloseUpPosts: allArticles });
        }
      });
  };
  getComments = () => {
    db.collection('closeup')
  }
  renderAllCloseUpPosts = () => {
    const { topCloseUpPosts } = this.state;
    const data =
      topCloseUpPosts &&
      topCloseUpPosts.map((obj) => {
        return (
          <div className="closeup-body-container">
            <div className="close-up-container">
              <div className="close-up-card">
                <ul className="close-up-ul">
                  <div className="image-and-article">
                    <div className="image">
                      <img src={obj.closeUpImage} />
                    </div>
                    <div className="article">
                      <div className="article-heading">
                        <p className="article-name">A Royale With Cheese</p>
                        <p className="article-date">20th March 2021</p>
                      </div>
                      <div className="article-content">
                        Sort of, it's actually "Le Royal Cheese". Their name for
                        any variety of quarter-pounder is a Royal, since
                        quarter-pound is pretty meaningless in a country that
                        uses the metric system. In other metric-using countries
                        it's generally called some variation of the same,
                        including "McRoyal" and "Hamburger Royale".
                      </div>
                      <div className="read-full-article">
                        <Link
                          id={"showmore"}
                          to={{
                            pathname: obj.category + "/" + obj.id,
                            state: { reader: this.state.topCloseUpPosts },
                          }}
                        >
                          Read Full Article
                        </Link>
                        {/* <Link id={'showmore'} to='/aroyalewithcheese'>Read Full Article</Link> */}
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          // </div>
        );
      });
    return data;
  };
  render() {
    return (
      <div className="close-up-container-background">
        {this.renderAllCloseUpPosts()}
      </div>
      // <div className='close-up-container-background'>
      //     <div className = "closeup-body-container">
      //         <div className='close-up-container'>
      //         <div className = "close-up-card">
      //             <ul className='close-up-ul'>
      //                 <div className="image-and-article">
      //                     <div className='image'><img src={image}  /></div>
      //                     <div className='article'>
      //                         <div className='article-heading'>
      //                             <p className='article-name'>A Royale With Cheese</p>
      //                             <p className='article-date'>20th March 2021</p>
      //                         </div>
      //                         <div className='article-content'>
      //                             Sort of, it's actually "Le Royal Cheese". Their name for any variety of quarter-pounder is a Royal, since quarter-pound is pretty meaningless in a country that uses the metric system. In other metric-using countries it's generally called some variation of the same, including "McRoyal" and "Hamburger Royale".
      //                         </div>
      //                         <div className='read-full-article'>
      //                             <Link id={'showmore'} to='/aroyalewithcheese'>Read Full Article</Link>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </ul>
      //         </div>
      //         <div className = "close-up-card">
      //             <ul className='close-up-ul'>
      //                 <div className="image-and-article">
      //                     <div className='image'><img src={image} /></div>
      //                     <div className='article'>
      //                         <div className='article-heading'>
      //                             <p className='article-name'>A Royale With Cheese</p>
      //                             <p className='article-date'>20th September 2021</p>
      //                         </div>
      //                         <div className='article-content'>
      //                             Sort of, it's actually "Le Royal Cheese". Their name for any variety of quarter-pounder is a Royal, since quarter-pound is pretty meaningless in a country that uses the metric system. In other metric-using countries it's generally called some variation of the same, including "McRoyal" and "Hamburger Royale".
      //                         </div>
      //                         <div className='read-full-article'>
      //                             <Link id={'showmore'} to='/'>Read Full Article</Link>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </ul>
      //         </div>
      //         </div>
      //     </div>
      // </div>
    );
  }
}

export default CloseUp;
