import {useState} from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import TaskList from '../TaskList/TaskList.jsx';

function App () {
  
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );

}

export default App
