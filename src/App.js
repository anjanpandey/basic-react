import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state= {username:'Jimmy'}

  changeUserNameHandler = event => {
    this.setState({
      username:event.target.value
    })
  };


  render() {
    return (
      <div className="App">
          <h1>Current Writer: {this.state.username}!</h1>
          <UserInput changed={this.changeUserNameHandler} username={this.state.username}/>
          <UserOutput username={this.state.username} count={1}/>
          <UserOutput username="Kim" count={2}/>
          <UserOutput username="Gilbert" count={3}/>
      </div>
    );
  }
}

export default App;
