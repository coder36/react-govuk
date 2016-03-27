import React from 'react';
import Slideshow from './slideshow'
import Carousel from './carousel'
import Slide from './slide'
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom'
import {Router, Route, Link} from 'react-router';
import './stylesheets/gov.scss'

function Sslide(props) {
    return (
        <Slide name={props.params.slide_name}/>
    )
}

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" component={Slideshow}/>
                <Route path="/slideshow" component={Slideshow}/>
                <Route path="/carousel" component={Carousel}/>
                <Route path="/:slide_name" component={Sslide}/>
            </Router>
        </Provider>
    )
}

ReactDOM.render(
    <Root/>, document.getElementById('content')
);
