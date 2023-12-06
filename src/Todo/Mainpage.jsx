import React from 'react';
import './Main.css'

function Mainpage() {
  return (
    <div className='maindiv'>
      <h2>Todo App</h2>
      <form action =''>
      <input type="text"  placeholder='Type' required />
      <button>Add Task</button>
      </form>
    </div>
  );
}

export default Mainpage;