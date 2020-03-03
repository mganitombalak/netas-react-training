import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
// FIRST FUNCTION REACT COMPONENT
const App = () => {
    return <div className="ui container">
        <Header/>
    </div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));