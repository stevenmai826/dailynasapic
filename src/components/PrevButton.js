import React from 'react';

export class PrevButton extends React.Component
{
    constructor(props) {
        super(props);
        this.handlePrev = this.handlePrev.bind(this);
    }
    
    handlePrev() {
        let year = this.props.year;
        let month = this.props.month;
        let date = parseInt(this.props.date, 10) - 1 + '';
        this.props.onClick(year,month,date);
    }

    render()
    {
        return (
        <button onClick={this.handlePrev}>Prev</button>
        );
    }
}