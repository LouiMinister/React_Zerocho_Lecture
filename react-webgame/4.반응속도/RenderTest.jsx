import React, {PureComponent} from 'react';

class Test extends PureComponent {
    state = {
        counter :0,
        string: 'hello',
        number: 1,
        boolean: true,

    };

    // true일 때 렌더링하고 false일 때 렌더링 하지 않음
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <di>
                <button onClick={this.onClick}>클릭</button>
            </di>
        );
    }
}

export default Test;