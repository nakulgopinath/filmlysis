import '../App.css';
import React  from 'react'
import RecentPosts from '../recentposts/recentposts.component';
import Cards from '../card/card.component';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import firebase from '../utils/firebase/firebase';
const db = firebase.firestore();

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      topCloseUpPosts: []
    };
  }
  componentDidMount(){
    this.getTopCloseUpPosts();
  }
  getTopCloseUpPosts = () =>{
    let allArticles = [];
    db.collection('closeup').orderBy("date", "desc").limit(5)
    .get()
    .then(docs => {
      if(!docs.empty) {
          docs.forEach((doc) => {
              const article = {
                  id: doc,
                  ...doc.data()  
              }
              console.log('top posts...doc.data()',article)
              allArticles.push(article);
          })
          this.setState({topCloseUpPosts: allArticles})
      }
  })
  }
  renderTopPosts = () => {
    const {topCloseUpPosts} = this.state;
    // for(var i = 1 ;i<5;++i) {
    //   return(<Cards />)
    // }
    const card = topCloseUpPosts.map(obj => {
      return(<Cards topCloseUpPosts={obj} />)
    })
    return card;
  }
    render() {
      const {topCloseUpPosts} = this.state;
        return(
            <div className='container-background'>
                <div className = "body-container">
        <RecentPosts />
        <div className='articles'>
          <p className='category-para'>TOP CLOSE UP POSTS</p>
          {this.renderTopPosts()}
          {this.renderTopPosts()}
          {/* {topCloseUpPosts && topCloseUpPosts.map(obj => {
            <Cards />
          })} */}
          <div className='show-more'>
            <Link id={'showmore'} to='/home2'>{'Show More >>'}</Link>
          </div>
          <p className='category-para'>TOP EDITS POSTS</p> 
          {/* <Cards />
          <Cards />
          <Cards />
          <Cards /> */}
          <div className='show-more'>
          <Router>
            <Link id={'showmore'} to={'#'}>{'Show More >>'}</Link>
          </Router>
          </div>
          </div>

      </div>
            </div>
        );
        
    }
}

export default Home