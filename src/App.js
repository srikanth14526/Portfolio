import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/CustomNavbar';
import Projects from './components/Projects';
import Jokes from './components/Jokes';
import Title from './components/Title';
// import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
        <Navbar />
        <div id="sri">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route  path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}><Contact /></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/jokes' component={Jokes}></Route>
          <Route exact path='/title' component={Title}></Route>
        </Switch>
          
          
        </div>
     
    </Router>
    
  );
}

export default App;
