import React, { Component } from 'react';
import Form from './form'
import './App.css';
import Table from './table'
// import Items from './Items';
// import store from './store.js/Dispatch';
// import { Button,Form} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <Table/>
      </div>
    );
  }
}

export default App;
