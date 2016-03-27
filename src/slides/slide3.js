import React from 'react'
import store from '../store'
import Govuk from '../govuk_layout'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class Slide3 extends React.Component {

    componentDidMount() {
        this.timer = setInterval( (() => {
            this.tick();
        } ),1000 )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        store.dispatch( {type: 'tick', offset: 1})
    }

    render() {
        return(
            <Govuk phaseBanner="true">
                <main role="main">
                    <h1 className="heading-medium">{this.props.count}</h1>
                </main>
            </Govuk>
        );
    }

}