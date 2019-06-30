import React from 'react';
import './App.css';
import {Nasa} from './Nasa';
import {PictureViewer} from './components/PictureViewer';
import {NextButton} from './components/NextButton';
import {PrevButton} from './components/PrevButton';

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = 1 + currentDate.getMonth();
let date = currentDate.getDate();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: '',
      imageDate: `&date=${year}-0${month}-${date}`,
    }; 
    this.searchNASA = this.searchNASA.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    this.searchNASA();
  }

  searchNASA() {
    Nasa.getPic(`https://api.nasa.gov/planetary/apod?api_key=6TzBatUoY7aANRUEfYIAFBPxcQ9kpQsgu3x2Bhlg${this.state.imageDate}`).then(src => {
      this.setState( {imageSrc:src} );
    });
  }

  handleNext() {
    this.setState(() => { return { imageDate: `${year}-${month}-${date + 1}` }; });
  }

  handlePrev() {
    this.setState(() => { return { imageDate: `${year}-${month}-${date - 1}` }; });
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
