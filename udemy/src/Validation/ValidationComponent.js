import React from 'react';

export class ValidationComponent extends React.Component {
    state = {
        isTextTooShort: true
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.textLength !== prevProps.textLength) {
            if (this.props.textLength > 5) {this.setState({isTextTooShort: false})}

            else {this.setState({isTextTooShort: true})}
        }
    }

    render() {
        return (
            <div>
                {this.state.isTextTooShort ? <p> Text too short  </p> : <p> Text long Enough </p>}
            </div>
        )
    };
}