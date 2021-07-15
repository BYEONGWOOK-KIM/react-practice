import List from './List'
import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  function addTodo (e) {
    setTodo(e.target.value)
  }

  const addList = () => {
    if(todo) {
      setList([...list, todo])
    }
    setTodo('')
  }

  return <>
    <div>
        <h1 id="title">My Todo List</h1>
    </div>
    <div>
        <input onChange={addTodo} value={todo}></input>
        <button onClick={addList}>할일 추가</button>
    </div>
    <List list={list} />
  </>
}

export default App;
