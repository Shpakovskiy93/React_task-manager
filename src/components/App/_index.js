import React, { useState, useEffect } from 'react';
import './style.scss';
import square from '../../img/square.svg';
import squareCheck from '../../img/square-check.svg';
import deleteIcon from '../../img/delete.svg';


let initTasks = [];



const App = () => {
  const [newTask, setNewTasks] = useState('');
  const [tasks, setTasks] = useState(initTasks);
  const [activeTabe, setActiveTab] = useState('all');


  useEffect(() => {
    setTimeout(() => {
      setTasks([
        {id: 1, title: 'open your eyes', done: true, delete: true},
        {id: 2, title: 'check smartphone', done: false, delete: true},
        {id: 3, title: 'brush your teeth', done: true, delete: false},
        {id: 4, title: 'breacfest', done: false, delete: false},
      ]);
    }, 2000)
  }, []);

  const changeTasksStatus = el => {
    setTasks(tasks.map(item => item.id === el.id?{...item, done: !item.done}:item))
  }

  const changeTasksStatusDelete = el => {
    setTasks(tasks.map(item => item.id === el.id?{...item, delete: !item.delete}:item))
  }

  const enterNewTask = e => setNewTasks(e.target.value);
  const addNewTask = e => {
    setTasks([...tasks, {id: tasks.length+1, title: newTask, done: false}]);
    setNewTasks('');
  }

  return (
    <div className='container'>

      <div className='box'>
        <ul className='tabs__select'>
          <li className={`tab__select-item ${activeTabe ==='all' ? ' active': ''}`} onClick={() => setActiveTab('all')}>All</li>
          <li className={`tab__select-item ${activeTabe ==='todo' ? ' active': ''}`} onClick={() => setActiveTab('todo')}>ToDo</li>
          <li className={`tab__select-item ${activeTabe ==='done' ? ' active': ''}`} onClick={() => setActiveTab('done')}>Done</li>
          <li className={`tab__select-item ${activeTabe ==='delete' ? ' active': ''}`} onClick={() => setActiveTab('delete')}>Deleted</li>
        </ul>
      </div> 

      <div className='box'>
        <input type='text' value={newTask} onChange={enterNewTask} />
        <button onClick={addNewTask}>add new task</button>
      </div>

      {
        activeTabe === 'all' && (
          <div className='box'>
            <ul className='tasks__list all'>
              {
                tasks.length 
                  ?
                      tasks.map(task => {
                        return <li className={task.delete?'list__item list__item-delete': 'list__item'}key={task.id}>
                          <span className='item__check-icon' onClick={() => changeTasksStatus(task)}>
                            <img className='icon__img' src={task.done?squareCheck:square} alt='check' />
                          </span>
                          <span className='list__item-text'>
                          {task.title}
                          </span>
                          <span className='item__delete-icon' onClick={() => changeTasksStatusDelete(task)}>
                            <img className='icon__img' src={deleteIcon} alt='delete' />
                          </span>
                        </li>
                      })
                  :
                  <div>no tasks yet!</div>
              }
            </ul>
          </div>
        )
      }

      {
        activeTabe === 'todo' && (
          <div className='box'>
            <ul className='tasks__list todo'>
              {
                tasks.filter(el => !el.done && !el.delete).map(task => {
                  return <li className={task.delete?'list__item list__item-delete': 'list__item'}key={task.id}>
                    <span className='item__check-icon' onClick={() => changeTasksStatus(task)}>
                      <img className='icon__img' src={task.done?squareCheck:square} alt='check' />
                    </span>
                    <span className='list__item-text'>
                    {task.title}
                    </span>
                    <span className='item__delete-icon' onClick={() => changeTasksStatusDelete(task)}>
                      <img className='icon__img' src={deleteIcon} alt='delete' />
                    </span>
                  </li>
                })
              }
            </ul>
          </div>
        )
      }

      {
        activeTabe === 'done' && (
          <div className='box'>
            <ul className='tasks__list done'>
              {
                tasks.filter(el => el.done && !el.delete).map(task => {
                  return <li className={task.delete?'list__item list__item-delete': 'list__item'}key={task.id}>
                    <span className='item__check-icon' onClick={() => changeTasksStatus(task)}>
                      <img className='icon__img' src={task.done?squareCheck:square} alt='check' />
                    </span>
                    <span className='list__item-text'>
                    {task.title}
                    </span>
                    <span className='item__delete-icon' onClick={() => changeTasksStatusDelete(task)}>
                      <img className='icon__img' src={deleteIcon} alt='delete' />
                    </span>
                  </li>
                })
              }
            </ul>
          </div>
        )
      }

      {
        activeTabe === 'delete' && (
          <div className='box'>
            <ul className='tasks__list delete'>
              {
                tasks.filter(el => el.delete).map(task => {
                  return <li className={task.delete?'list__item list__item-delete': 'list__item'}key={task.id}>
                    <span className='item__check-icon' onClick={() => changeTasksStatus(task)}>
                      <img className='icon__img' src={task.done?squareCheck:square} alt='check' />
                    </span>
                    <span className='list__item-text'>
                    {task.title}
                    </span>
                    <span className='item__delete-icon' onClick={() => changeTasksStatusDelete(task)}>
                      <img className='icon__img' src={deleteIcon} alt='delete' />
                    </span>
                  </li>
                })
              }
            </ul>
          </div>
        )
      }

    </div>
  );
}

export default App;
