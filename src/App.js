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
    /*this.year = this.currentDate.getFullYear();
    this.month = this.currentDate.getMonth();
    this.date = this.currentDate.getDate();*/
    this.state = {
      year: `${this.currentDate.getFullYear()}`,
      month: `${this.currentDate.getMonth()+1}`,
      date: `${this.currentDate.getDate()}`,
      imageSrc: ``,
      apiKey: `https://api.nasa.gov/planetary/apod?api_key=6TzBatUoY7aANRUEfYIAFBPxcQ9kpQsgu3x2Bhlg`,
    }; 
    this.searchNASA = this.searchNASA.bind(this);
    this.changeImageDate = this.changeImageDate.bind(this);
    this.changeNext = this.changeNext.bind(this);
    this.changePrev = this.changePrev.bind(this);
  }

  componentDidMount() {
    this.searchNASA(this.state.apiKey);
  }

  searchNASA(api) {
    Nasa.getPic(api).then(src => {
      this.setState( {imageSrc:src} );
    });
  }

  changeImageDate(yr,mn,dt)
  {
    let year = yr;
    let month = mn;
    let date = dt;
    if(year < 1995 && month < 6 && date < 16) {
      alert('There are no pics later than June 16, 1995!');
    }
    else {
      this.setState({ year: year, month: month, date: date});
      this.searchNASA(this.state.apiKey + `&date=${this.state.year}-${this.state.month}-${this.state.date}`);
    }
  }

  changeNext(yr,mn,dt) {
    this.changeImageDate(yr,mn,dt);
  }

  changePrev(yr,mn,dt) {
    this.changeImageDate(yr,mn,dt);
  }

  render() {
    return(
      <div>
        <h1>NASA's Pic of the Day</h1>
        <PrevButton onClick={this.changePrev} year={this.state.year} month={this.state.month} date={this.state.date} />
        <NextButton onClick={this.changeNext} year={this.state.year} month={this.state.month} date={this.state.date} />
        <PictureViewer src={this.state.imageSrc} />
      </div>
    );
  }
}

export default App;