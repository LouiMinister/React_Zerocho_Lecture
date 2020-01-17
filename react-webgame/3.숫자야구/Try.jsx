import React, {Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li key = {this.props.value.fruit + this.props.value.taste}>
                <div>{this.props.index}. {this.props.value.fruit} - {this.props.value.taste}</div>
                <div>컨텐츠</div>
                <div>컨텐츠</div>
                <div>컨텐츠</div>
                <div>컨텐츠</div>
            </li>
        );
    }
}

export default Try;