import React from 'react'
import store from './store'
import { connect } from 'react-redux';

@connect( (state) => state )
export default class Radio extends React.Component {

    constructor(props) {
        super(props);
    }

    onFocus() {
        this.setState({
            focused: true
        });
    }

    onBlur() {
        this.setState({
            focused: false
        });
    }

    componentDidUpdate() {

        let lab = this.refs.lab;
        let inp = this.refs.inp;
        let labelClass = "block-label" + (this.state && this.state.focused ? " focused" : "") + (inp.checked ? " selected" : "");
        lab.className = labelClass;
        let linkRef = this.props.linkRef;
        if (linkRef ) {
            if(! this.props[linkRef] ) {
                store.dispatch({type: "save", key: linkRef, data: {visible: inp.checked}});
            }
            else if(this.props[linkRef].visible != inp.checked) {
                store.dispatch({type: "save", key: linkRef, data: {visible: inp.checked}});
            }
        }
    }

    render() {

        this.props.radioGroup && this.props.radioGroup.count;
        return (
            <label ref="lab" className="block-label" data-target="example-ni-no" for="radio-indent-1">
                <input ref="inp" id={this.props.id} onBlur={() => this.onBlur()} onFocus={() => this.onFocus()} type={this.props.type} name={this.props.name} value={this.props.value}/>
                {this.props.children}
            </label>
      )
    }
}