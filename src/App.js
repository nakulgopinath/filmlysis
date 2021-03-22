import './App.css';
import NavBar from './navbar/navbar.component';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './home/home.component'
import Footer from './footer/footer.component';
import CloseUp from './closeup/closeup.component'
import Reader from './reader/reader.component'
import React from 'react';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     imageURLs:[],
  //     categories:['closeup','editing','camera','debuts and finale'],
  //     categoryCount:[],
  //     recentPosts:[],
  //   }
  // }
  // componentDidMount () {
    // const {categories,categoryCount,recentPosts} = this.state;
    // this.setCategoryCount();
    // this.setRecentPosts();
    // this.setRecentPostsimageURL()
    // }
    // 
    // console.log(URL);
  // }
  // setRecentPostsimageURL = () => {
    // const {recentPosts,imageURLs} = this.state;
    // firebase.storage().ref('closeup').child('2').child('2closeupRecentposts.png').getDownloadURL().then(url => console.log("test url",url))
    // console.log(recentPosts);
    // recentPosts.map(obj => {
    //     console.log(obj)
    //   // then(url => {
    //   //   console.log(url)
    //   //   const imageLink = {
    //   //     "RecentPostsimageURLs":url
    //   //   }
    //   //   imageURLs.push(imageLink);
    //   //   this.setState({imageURLs:imageURLs});
    //   //   });
    // })
  // }
  // setRecentPosts = () => {
  //   const {recentPosts,categories,categoryCount} = this.state;
  //   categories.map(obj => {
  //     const collection = firebase.database().ref(obj).limitToLast(1);
  //     collection.once("value",(snapshot) => {
  //       snapshot.forEach((child) => {
  //         const lastRecord = snapshot.val();
          // 
  //         recentPosts.push(lastRecord[child.key])
  //       })
  //     })
  //   })
  //   this.setState({recentPosts:recentPosts})
  // }
  // setCategoryCount  = () => {
  //   const {categories} = this.state;
  //   let categoryCount = []
  //   categories.map(obj => {
  //     const collection = firebase.database().ref(obj);
  //     collection.once("value",snapshot => {
  //       let recordCount = snapshot.numChildren();
  //       let tempObj ={}
  //       set(tempObj,obj,recordCount);
  //       categoryCount.push(tempObj);
  //     })
  //   });
  //   // console.log('categoryCount outside map',categoryCount);
  //   this.setState({categoryCount:categoryCount})
  // }
  render(){
    return (
      <Router>
      <div className className='container-background'>
        <div className="navbar" >
          <NavBar />
        </div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/filmlysis' component={Home} />
            <Route path='/closeup' exact component={CloseUp} />
            <Route path='/:category/:id'  component={Reader} />
            <Route path='/aroyalewithcheese'  component={Reader} />
          </Switch>
      </div>
      <Footer />
      </Router>
    );
  } 
}

export default App;
