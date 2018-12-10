import React, { Component } from 'react';
import logo from './dw.jpeg';
import './App.css';

class App extends Component {

  state = {
    banner : '',
    text : 'hii'
  }

  hello = inputString => {
    const banner = this.state.banner;
    console.log(this.state);
    this.setState({
      banner: banner + inputString
    });
  }

  handleChange = event => {
    console.log(event.target.name, event.target.value, this.state.banner, this.state.text);
   // console.log(text);
    const inputString = event.target.value;

    this.setState({
      banner: inputString,
      text: inputString
    });
  } 
  
  render() {
    const inText = this.state.text;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
          </p>
          <div className="Banner">{this.state.banner}</div> 
          <button onClick={()=>this.hello('test')} > Hello </button>

          <form>
                <input
                    type='text'
                    name='text'
                    value={inText}
                    onChange={this.handleChange}
                />
            </form>
        </header>
      </div>
    );
  }
}

export default App;
