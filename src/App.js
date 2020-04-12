import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Doctor from './components/Doctor';
import Home from './components/Home'
import {Route,BrowserRouter,Switch} from 'react-router-dom';  
import None from './components/None'

function App() {
  return (
    <BrowserRouter>
    <div class='App'>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/About" component={About}></Route>
        <Route  path="/Doctor" component={Doctor}></Route>
        <Route component={None}></Route>
      </Switch>
    
    </div>
    </BrowserRouter>

  )
}

export default App;

