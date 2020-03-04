import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header';
import ProfileList from './pages/profile-list/index';
import Category from './pages/category/index'
import { HashRouter, Route } from 'react-router-dom';
import CategoryReducers from './pages/category/reducers';
import './App.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import sagaSetup from './saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(CategoryReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaSetup);

// FIRST FUNCTION REACT COMPONENT
const App = () => {
    return <div className="ui container">
        <Header />
        <Provider store={store}>
            <Route path="/" exact component={ProfileList} />
            {/* <Route path="/" exact component={ProfileList} /> */}
            <Route path="/category" component={Category} />
        </Provider>
    </div>;
};

ReactDOM.render(<HashRouter><App /></HashRouter>, document.querySelector('#root'));