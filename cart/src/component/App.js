import React, { Component } from 'react';
import Header from './heder';
import Home from './home';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    )

  }
}

export default App;
