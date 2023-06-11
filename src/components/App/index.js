import React, { useState, useEffect } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';


let initTasks = [];



const App = () => {
  const [newTask, setNewTasks] = useState('');
  const [tasks, setTasks] = useState(initTasks);
  const [activeTabe, setActiveTab] = useState('all');
  const [isAddTasksFormOpen, setisAddTasksFormOpen] = useState(false);


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

  const day = new Date();
  let d_week = '';
  switch (day.getDay()) {
    case 1:
      d_week = 'Mon';
    break;
    case 2:
      d_week = 'Tue';
    break;
    case 3:
      d_week = 'Wed';
    break;
    case 4:
      d_week = 'Thu';
    break;
    case 5:
      d_week = 'Fri';
    break;
    case 6:
      d_week = 'Sat';
    break;
    case 0:
      d_week = 'Sun';
    break;
  
    default:
    break;
  }

  let month = 'Jan';
  switch (day.getMonth()) {
    case 0:
      month = 'Jan';
    break;
    case 1:
      month = 'Feb';
    break;
    case 2:
      month = 'Mar';
    break;
    case 3:
      month = 'Apr';
    break;
    case 4:
      month = 'May';
    break;
    case 5:
      month = 'Jun';
    break;
    case 6:
      month = 'Jul';
    break;
    case 7:
      month = 'Aug';
    break;
    case 8:
      month = 'Sep';
    break;
    case 9:
      month = 'Oct';
    break;
    case 10:
      month = 'Nov';
    break;
    case 11:
      month = 'Dec';
    break;
    default:
    break;
  }

  return (
    <div className='device__wrapper'>
      <div className='device'>

        <div className="header">
          <div className="iphone__x"></div>
          <h1>Hello</h1>
          <div className="greeting">
            {`Today ${d_week} ${day.getDate()} ${month}`}
          </div>
        </div>

        <div className='content'>

          <div className={`tasks all__tasks ${activeTabe === 'all' ? "active" : ""}`}>
            <div className="tasks__tab__wrapper" onClick={() => setActiveTab('all')}>
                <div className="title__wrapper">
                    <div className="title">All tasks</div>
                    <div className="description">Here you can manage all tasks</div>
                </div>
                <div className="task__counter">{tasks.length}</div>
            </div>
            <div className={`tasks__list__wrapper ${activeTabe === 'all' ? "show" : ""}`}>
                <ul className="tasks__list">
                   {
                    tasks.map(el => {
                      const cssClass = el.delete ? 'removed': el.done ? 'done' : '';
                      return (
                        <li className={`task__element ${cssClass}`}>
                          <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTasksStatus(el)}/>
                          <span className="task__text">{el.title}</span>
                          <FontAwesomeIcon className='fa' icon={faDeleteLeft} onClick={() => changeTasksStatusDelete(el)}/>
                        </li>
                      )
                    })
                   }
                </ul>
            </div>
          </div>

          <div className={`tasks todo__tasks ${activeTabe === 'todo' ? "active" : ""}`}>
            <div className="tasks__tab__wrapper" onClick={() => setActiveTab('todo')}>
              <div className="title__wrapper">
                <div className="title">Todo tasks</div>
                <div className="description">Here you can manage tasks to be completed</div>
              </div>
              <div className="task__counter">{tasks.filter(el => !el.done && !el.delete).length}</div>
            </div>

            <div className={`tasks__list__wrapper ${activeTabe === 'todo' ? "show" : ""}`}>
              <ul className="tasks__list">
                {
                  tasks.filter(el => !el.done && !el.delete).map(el => {
                    const cssClass = el.delete ? 'removed': el.done ? 'done' : '';
                    return (
                      <li className={`task__element ${cssClass}`}>
                        <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTasksStatus(el)}/>
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon className='fa' icon={faDeleteLeft} onClick={() => changeTasksStatusDelete(el)}/>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className={`tasks done__tasks ${activeTabe === 'done' ? "active" : ""}`}>
            <div className="tasks__tab__wrapper" onClick={() => setActiveTab('done')}>
              <div className="title__wrapper">
                <div className="title">Done tasks</div>
                <div className="description">Here you manage the tasks that you have already done</div>
              </div>
              <div className="task__counter">{tasks.filter(el => el.done && !el.delete).length}</div>
            </div>

            <div className={`tasks__list__wrapper ${activeTabe === 'done' ? "show" : ""}`}>
              <ul className="tasks__list">
                {
                  tasks.filter(el => el.done && !el.delete).map(el => {
                    const cssClass = el.delete ? 'removed': el.done ? 'done' : '';
                    return (
                      <li className={`task__element ${cssClass}`}>
                        <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTasksStatus(el)}/>
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon className='fa' icon={faDeleteLeft} onClick={() => changeTasksStatusDelete(el)}/>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className={`tasks removed__tasks ${activeTabe === 'removed' ? "active" : ""}`}>
            <div className="tasks__tab__wrapper" onClick={() => setActiveTab('removed')}>
              <div className="title__wrapper">
                <div className="title">Removed tasks</div>
                <div className="description">Here you can see the tasks that you have been removed</div>
              </div>
              <div className="task__counter">{tasks.filter(el => el.delete).length}</div>
            </div>

            <div className={`tasks__list__wrapper ${activeTabe === 'removed' ? "show" : ""}`}>
              <ul className="tasks__list">
                {
                  tasks.filter(el => el.delete).map(el => {
                    const cssClass = el.delete ? 'removed': el.done ? 'done' : '';
                    return (
                      <li className={`task__element ${cssClass}`}>
                        <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTasksStatus(el)}/>
                        <span className="task__text">{el.title}</span>
                        <FontAwesomeIcon className='fa' icon={faDeleteLeft} onClick={() => changeTasksStatusDelete(el)}/>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        <div className={`footer ${isAddTasksFormOpen ? 'show' : ''}`}>
          <div className="add__button__wrapper" onClick={() => setisAddTasksFormOpen(!isAddTasksFormOpen)}>
              <span className="hr"></span>
              <span className="hr vr"></span>
          </div>
          <div className="add__task__form__wrapper">
              <label for="task_input">Add new task for today</label>
              <input id="task_input" type="text" placeholder="Enter smth here"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
