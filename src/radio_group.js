import React from 'react'
import store from './store'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class RadioGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange(e) {
        let count = 0;
        if ( this.props.radioGroup && this.props.radioGroup.count ) {
            count = this.props.radioGroup.count;
        }
        count += 1;
        store.dispatch({type: "save", key: 'radioGroup', data: {count: count}});
    }

    render() {
        return (
            <div onChange={(e) => this.onChange(e)}>
                {this.props.children}
            </div>
        )
    }

}