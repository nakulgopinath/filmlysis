import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./recentposts.css";
import { Carousel } from "react-responsive-carousel";
import image from "../images/house01-700x500.jpg";
import firebase from "../utils/firebase/firebase";

const db = firebase.firestore();

class RecentPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentPosts: [],
      categories: ["closeup", "editing"],
    };
  }
  componentDidMount() {
    this.getRecentPosts();
  }
  getRecentPosts = () => {
    const { categories } = this.state;
    let allArticles = [];
    categories.map((obj) => {
      db.collection(obj)
        .orderBy("date", "desc")
        .limit(1)
        .get()
        .then((docs) => {
          if (!docs.empty) {
            docs.forEach((doc) => {
              const article = {
                id: doc,
                ...doc.data(),
              };
              console.log("...doc.data()", article);
              allArticles.push(article);
            });
            this.setState({ recentPosts: allArticles });
          }
        });
    });
  };
  render() {
    const { recentPosts } = this.state;
    return (
      <div className="corousel-container">
        <Carousel
          showThumbs={false}
          autoFocus
          showStatus={false}
          autoPlay={false}
          infiniteLoop={false}
        >
          <div>
            <img
              src={
                recentPosts.length > 0 ? recentPosts[0].recentPostsImage : ""
              }
            />
            <p className="legend">
              {recentPosts.length > 0 ? recentPosts[0].heading : ""}
            </p>
          </div>
          <div>
            <img
              src={
                recentPosts.length > 0 ? recentPosts[0].recentPostsImage : ""
              }
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={image} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default RecentPosts;
