import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todos from './data'
import ListTodos from './components/ListTodos'

class App extends Component {
  state = {
    todos: todos
  }
  render() {
    return (
      <div>
        <ListTodos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
