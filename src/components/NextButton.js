import React from 'react';

export class NextButton extends React.Component
{
    render()
    {
        return (
        <button onClick={this.props.onClick}>Next</button>
        );
    }
}