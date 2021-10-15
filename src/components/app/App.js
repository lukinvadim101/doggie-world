import React, {Component} from 'react';
import DogList from '../dog-list/DogList';
import './App.css';


export default class App extends Component {
  
  render(){
    return (
    <>
      <div className="App container mt-5">
        <h1 className="text-center">Welcome to the<br/>Doggie World!</h1>
          <DogList/>
      </div>
    </>
    )
  } 
}
