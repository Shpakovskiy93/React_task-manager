import React, { useState } from 'react';


let initTasks = [
  {id: 1, title: 'open your eyes', done: true},
  {id: 2, title: 'check smartphone', done: false},
  {id: 3, title: 'brush your teeth', done: false},
];


const App = () => {
  const [newTask, setNewTasks] = useState('');
  const [tasks, setTasks] = useState(initTasks);

  const changeTasksStatus = el => {
    setTasks(tasks.map(item => item.id === el.id?{...item, done: !item.done}:item))
  }

  const enterNewTask = e => setNewTasks(e.target.value);
  const addNewTask = e => {
    setTasks([...tasks, {id: tasks.length+1, title: newTask, done: false}]);
    setNewTasks('');
  }

  return (
    <>
      <div>
        <input type='text' value={newTask} onChange={enterNewTask} />
        <button onClick={addNewTask}>add new task</button>
      </div>
      <ul className='tasks__list'>
        {
          tasks.map(task => {
            return <li className={task.done?'task__done': ''}key={task.id} onClick={() => changeTasksStatus(task)}>
              {task.title}
            </li>
          })
        }
      </ul>
    </>
  );
}

export default App;
