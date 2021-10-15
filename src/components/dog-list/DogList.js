import React, { Component } from 'react'
import Doggie from '../doggie/Doggie';
import DogService from '../../servises/DogService';
import "./dog-list.css"

export default class DogList extends Component {
  
  dogService = new DogService();

  state= {
    value: 4,
    dogImg: [],
  }

  updateDog(num){
    this.dogService.rndDogImg(num)
      .then((url) => {
        this.setState({
          dogImg: url
      })
    });
  };

  componentDidMount(){
    this.updateDog(this.state.value)
  }

  handleChange = (e) => {
    this.rangeDog(+e.target.value);
  }

  rangeDog = (num) => {
    this.setState({
      value: num,
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.value !== prevState.value) {
      this.updateDog(this.state.value)
    }
  }

  renderDogs = (arr) => arr.map((url) => {
    return <Doggie key={url} url={url}/>
  })

  render(){

    const {value, dogImg} = this.state;
    
    return (
      <>
        <div className=" container mt-5 doggie-range__wrapper">
          <label htmlFor="doggie-range" className="form-label">Less Doggie / More Doggie </label>
          <input 
            onChange={this.handleChange}
            type="range"
            className="form-range doggie-range"
            id="doggie-range" 
            value={value} min="1" max="20"></input>
        </div>
        <div className="container dog-list mt-5">
          {this.renderDogs(dogImg)}
        </div>
      </>
    )
  } 
}
