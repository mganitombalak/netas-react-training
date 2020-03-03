import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import ProfileContainer from './components/profile-container';

// FIRST FUNCTION REACT COMPONENT
const App = () => {
    return <div className="ui container">
        <Header />
        <ProfileContainer/>
    </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));