import React from 'react'
import store from './store'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class RadioGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let linkRef = this.props.linkRef;
        let visible = this.props[linkRef] && this.props[linkRef].visible;

        if ( visible ) {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
        else {
            return <div></div>
        }

    }
}