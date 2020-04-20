import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div><h1>This is Shorten My Link App</h1></div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
})
