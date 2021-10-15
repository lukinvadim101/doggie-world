import React, { Component } from 'react';
import DogService from '../../servises/DogService';
import {capitalize, fixBreed} from '../doggie/Doggie';

export default class BreedSelect extends Component {
  dogService = new DogService();
  
  state = {
    breeds: [],
    selected: 'Dingo',
  }

  getBreedList(){
    this.dogService.getDogList()
      .then( data => Object.keys(data))
      .then( data => data.map( item => fixBreed(item)))
      .then( data => data.map( item => capitalize(item)))
      .then( breeds => {
        this.setState({
          breeds:breeds
        })
      })
  }

  componentDidMount(){
    this.getBreedList()
  }

  handleChange = (e) => { 
    this.setState({
      selected: e.target.value
  })}


  render(){
    const {breeds} = this.state;
    const options = breeds.map( breed => {
      return(<option key={breed} value={breed}>{breed}</option>)
    })

    return (
      <div className="container">
        <div className="form-group">
        <form >
        <label htmlFor="breedSelect" className="form-label mt-4">Dog Breed select</label>
        <select className="form-select" id="breedSelect" value={this.state.selected} onChange={this.handleChange}>  
          {options}
        </select>
        
        </form>
        <button type="button" className="btn"></button>
      </div>
      </div>
    )
  }
}
