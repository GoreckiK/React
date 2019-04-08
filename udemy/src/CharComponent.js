import React from 'react';

export class CharComponent  extends React.Component {
    render() {
        const style = {
            display: 'inline-block',
            padding: '16px',
            "text-align": 'center',
            margin: '16px',
            border: '1px solid black'
        };
        return (
            <div style = {style}
            onClick = {this.props.clicked}>
                {this.props.letter}
            </div>
        )
    }
};