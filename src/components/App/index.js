import React, { useState, useEffect } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ContentComponent from '../ContentComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const theme = {
  light: {
    containerBgColor: '#eaeaea',
    mainBorderColor: '#333',
    buttonBgColor: '#eee',
  },
  dark: {
    containerBgColor: '#24162dfa',
    mainBorderColor: '#eee',
    buttonBgColor: '#333',
  }
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.containerBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 10px);
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px rgba(0, 0, 0, 0.25);
  border: 4px solid ${props => props.deviceBorderColor};

  .device {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${props => props.deviceBgColor};
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
  }
`;

const ButtonWrape = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  border: 1px solid ${props => props.mainBorderColor};
  color: ${props => props.mainBorderColor};
  background-color: ${props => props.buttonBgColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

let initTasks = [];

const App = () => {
  const [newTask, setNewTasks] = useState('');
  const [tasks, setTasks] = useState(initTasks);
  const [activeTabe, setActiveTab] = useState('all');
  const [isAddTasksFormOpen, setAddTasksFormOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);


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

  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <Container containerBgColor={selectedTheme.containerBgColor}>
      <DeviceWrapper 
        deviceBorderColor='#333' 
        deviceBgColor='#f3f3f3'
      >
        <div className='device'>

          <ButtonWrape
           mainBorderColor={selectedTheme.mainBorderColor}
           buttonBgColor={selectedTheme.buttonBgColor} 
           onClick={() => setDarkMode(!isDarkMode)}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </ButtonWrape>

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
      </DeviceWrapper>
    </Container>
  );
}

export default App;