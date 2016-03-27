import React from 'react'
import {loadJson, find_nested_prop} from '../utils'
import store from '../store'
import { connect } from 'react-redux';
import Govuk from '../govuk_layout'


@connect( (state) => state )
export default class Slide6 extends React.Component {

    componentDidMount() {
        loadJson('https://www.reddit.com/.json', (json) => {
            find_nested_prop(json, 'href', (href, parent) => {
                loadJson(href, nestedJson => store.dispatch({type: "save", key: href, data: nestedJson}));
            });
            store.dispatch({type: "save", key: 'reddit', data: json});
        });
    }

    render() {
        const reddit = this.props.reddit;
        let headline = reddit ? reddit.data.children[0].data.title : '...';

        return (
            <Govuk phaseBanner="true">
                <main role="main">
                    <h1 className="heading-medium">{headline}</h1>
                </main>
            </Govuk>
        )
    }
}