import React, { useState, useEffect } from 'react';
import './style.scss';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ContentComponent from '../ContentComponent';


let initTasks = [];



const App = () => {
  const [newTask, setNewTasks] = useState('');
  const [tasks, setTasks] = useState(initTasks);
  const [activeTabe, setActiveTab] = useState('all');
  const [isAddTasksFormOpen, setAddTasksFormOpen] = useState(false);


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

  const enterNewTask = e => {
    setNewTasks(e.target.value);
  };

  const addNewTask = e => {
    setTasks([...tasks, {id: tasks.length+1, title: newTask, done: false}]);
    setNewTasks('');
  }

  const keyBoardHandler = e => {
    if(e.keyCode === 13) {
      addNewTask();
      setNewTasks('');
      setAddTasksFormOpen(false);
    }
    if(e.keyCode === 27) {
      setNewTasks('');
      setAddTasksFormOpen(false);
    }
  };


  return (
    <div className='device__wrapper'>
      <div className='device'>
        <HeaderComponent  />
        <ContentComponent 
          tasks={tasks}
          setActiveTab={setActiveTab} 
          changeTasksStatus={changeTasksStatus}
          changeTasksStatusDelete={changeTasksStatusDelete}
          activeTabe={activeTabe} 
        />
        <FooterComponent 
          isAddTasksFormOpen={isAddTasksFormOpen} 
          setAddTasksFormOpen={setAddTasksFormOpen}
          enterNewTask={enterNewTask}
          keyBoardHandler={keyBoardHandler}
          newTask={newTask}
        />
      </div>
    </div>
  );
}

export default App;