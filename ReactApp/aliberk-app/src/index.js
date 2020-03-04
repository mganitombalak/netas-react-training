import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header';
import ProfileList from './pages/profile-list/index';
import Category from './pages/category/index'
import { BrowserRouter, Route } from 'react-router-dom';

// FIRST FUNCTION REACT COMPONENT
const App = () => {
    return <div className="ui container">
        <Header />
        <Route path="/" exact component={ProfileList} />
        {/* <Route path="/" exact component={ProfileList} /> */}
        <Route path="/category" component={Category} />
      
    </div>;
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));