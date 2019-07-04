import React from 'react';

export class NextButton extends React.Component
{
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
    }
    
    handleNext() {
        let year = this.props.year;
        let month = this.props.month;
        let date = parseInt(this.props.date, 10) + 1 + '';
        this.props.onClick(year,month,date);
    }

    render()
    {
        return (
        <button onClick={this.handleNext}>Next</button>
        );
    }
}