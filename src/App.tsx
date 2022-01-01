import React from 'react';
import './App.css';
import AddToForm from './component/AddToForm';
import { Counter } from './component/Counter';
import CounterShow from './component/CounterShow';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterShow/>
      <AddToForm/>
      <TodoList/>
    </div>
  );
}

export default App;
