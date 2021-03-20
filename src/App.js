import './App.css';
import NavBar from './navbar/navbar.component';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './home/home.component'
import Footer from './footer/footer.component';
import CloseUp from './closeup/closeup.component'
import Reader from './reader/reader.component'
import React from 'react';

class App extends React.Component {
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
            <Route path='/closeup'  component={CloseUp} />
            <Route path='/aroyalewithcheese'  component={Reader} />
          </Switch>
      </div>
      <Footer />
      </Router>
    );
  } 
}

export default App;
