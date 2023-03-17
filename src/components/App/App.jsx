import {useState} from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import TaskList from '../TaskList/TaskList.jsx';

function App () {
  
  return (
    <body>
      <header>
        <Header />
      </header>
        <TaskList />
    </body>
  );

}

export default App
