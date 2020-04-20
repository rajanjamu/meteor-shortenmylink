import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link-create';
import LinkList from './components/link-list';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <LinkCreate />
          <LinkList />
        </div> 
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
})
