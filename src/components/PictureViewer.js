import React from 'react';

export class PictureViewer extends React.Component {
    render() {
        return (
            <div>
              <img src={this.props.src} alt={'Nasa'} />
              <p>Explanation: {this.props.exp}</p>
            </div>
        );
    }
}