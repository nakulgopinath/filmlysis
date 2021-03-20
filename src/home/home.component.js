import '../App.css';
import React  from 'react'
import RecentPosts from '../recentposts/recentposts.component';
import Cards from '../card/card.component';
import {Link,BrowserRouter as Router} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div className='container-background'>
                <div className = "body-container">
        <RecentPosts />
        <div className='articles'>
          <p className='category-para'>TOP CLOSE UP POSTS</p>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <div className='show-more'>
            <Link id={'showmore'} to='/home2'>{'Show More >>'}</Link>
          </div>
          <p className='category-para'>TOP EDITS POSTS</p> 
          <Cards />
          <Cards />
          <Cards />
          <Cards />
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