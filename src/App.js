import React from 'react';
import './App.css';
import Navigation from './Navigation';
import  Home from './Home';
import News from './News';
import CoverStories from './CoverStories';
import Columns from './Columns';
import ShopPage from './ShopPage'
import NewsPage from './NewsPage'
import ColumnsPage from './ColumnsPage'
import {BrowserRouter as Router, Switch, Route } from'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      

        <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/Columns" exact component={Columns} />
        <Route path="/News" exact component={News} />
        <Route path="/CoverStories" exact component={CoverStories}/>
        <Route path="/CoverStories/:id" exact component={ShopPage}/>
        <Route path="/News/:id" exact component={NewsPage}/>
        <Route path="/Columns/:id" exact component={ColumnsPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
