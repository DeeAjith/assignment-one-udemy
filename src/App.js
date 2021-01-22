import './App.scss';
import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    username: "This is me @deeAjith",
  }
  onTypehandler = (typeEvent) => {
    this.setState({username: typeEvent.target.value});
  }
  render(){
    return (
      <div className="App">
        <div className="bg"></div>
        <div className="bg1"></div>
        <div className="card">
          <div className="card_main">    
            <UserInput 
            typing={this.onTypehandler} 
            currentText={this.state.username} />
            <UserOutput 
            uName={this.state.username} 
            lengthOf={this.state.username.length}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
