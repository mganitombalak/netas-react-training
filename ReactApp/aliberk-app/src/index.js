import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Profile from './components/profile'
// FIRST FUNCTION REACT COMPONENT
const App = () => {
    return <div className="ui container">
        <Header />
        <Profile />
    </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));