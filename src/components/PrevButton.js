import React from 'react';

export class PrevButton extends React.Component
{
    render()
    {
        return (
        <button onClick={this.props.onClick}>Prev</button>
        );
    }
}