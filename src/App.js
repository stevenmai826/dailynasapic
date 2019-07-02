import React from 'react';
import './App.css';
import {Nasa} from './Nasa';
import {PictureViewer} from './components/PictureViewer';
import {NextButton} from './components/NextButton';
import {PrevButton} from './components/PrevButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.currentDate = new Date();
    this.year = this.currentDate.getFullYear();
    this.month = this.currentDate.getMonth();
    this.date = this.currentDate.getDate();
    this.state = {
      imageDate: `&date=${this.year}-${this.month}-${this.date}`,
      imageSrc: ``,
      apiKey: `https://api.nasa.gov/planetary/apod?api_key=6TzBatUoY7aANRUEfYIAFBPxcQ9kpQsgu3x2Bhlg`
    }; 
    this.searchNASA = this.searchNASA.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    this.searchNASA(this.state.apiKey);
  }

  searchNASA(api) {
    Nasa.getPic(api).then(src => {
      this.setState( {imageSrc:src} );
    });
  }

  handleNext() {
    console.log(this.state.apiKey);
    console.log(this.state.imageSrc);
    this.searchNASA(this.state.apiKey);
  }

  handlePrev() {
    console.log(this.state.apiKey);
    console.log(this.state.imageSrc);
    this.searchNASA(this.state.apiKey);
  }

  render() {
    return(
      <div>
        <h1>NASA's Pic of the Day</h1>
        <PrevButton onClick={this.handlePrev} />
        <NextButton onClick={this.handleNext} />
        <PictureViewer src={this.state.imageSrc} />
      </div>
    );
  }
}

export default App;