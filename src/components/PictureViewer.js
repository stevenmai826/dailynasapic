import React from 'react';

export class PictureViewer extends React.Component {
    render() {
        return <img src={this.props.src} alt={'Nasa'} />
    }
}