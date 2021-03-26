import "../App.css";
import React from "react";
import {Link} from 'react-router-dom'
import RecentPosts from "../recentposts/recentposts.component";
import Cards from "../card/card.component";
import firebase from "../utils/firebase/firebase";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const db = firebase.firestore();
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      topCloseUpPosts: [],
    };
  }
  componentDidMount() {
    this.getTopCloseUpPosts();
  }
  getTopCloseUpPosts = () => {
    let allArticles = [];
    db.collection("closeup")
      .orderBy("date", "desc")
      .limit(3)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          docs.forEach((doc) => {
            const article = {
              id: doc,
              ...doc.data(),
            };
            console.log("top posts...doc.data()", article);
            allArticles.push(article);
          });
          this.setState({ topCloseUpPosts: allArticles });
        }
      });
  };
  renderTopPosts = () => {
    const { topCloseUpPosts } = this.state;
    const card = topCloseUpPosts.map((obj) => {
      return <Cards topCloseUpPosts={obj} />;
    });
    return card;
  };
  render() {
    const { topCloseUpPosts } = this.state;
    const instafeedTarget = "instafeed";
    return (
      <div className="container-background">
        <div className="body-container">
          <RecentPosts />
          <div className="article-insta">
            <div className="articles">
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <div className='show-more'>
                <Link >SHOW MORE>>></Link>
              </div>
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <div className='show-more'>
                <Link>SHOW MORE>>></Link>
              </div>
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <Cards topCloseUpPosts />
              <div className='show-more'>
                <Link>SHOW MORE>>></Link>
              </div>
            </div>
            <div id={instafeedTarget}>
              <p>INSTAGRAM POSTS</p>
              <InstagramFeed
                token="IGQVJVdXlTaW54XzNaT25HVW9ybG5Ua0l0aTJxTzJrLWg0UG94a2NSZAi02aVEtYW1BT2tWc0tmU20wU2dBeFZAhUEhiUW1VWGNxdDVLU1kteWZALeDlFVldhY0wyekhQMnNYSjZAUVnB4VHNDMEJndF85VQZDZD"
                counter="9"
              />
              <p>SHOW MORE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
