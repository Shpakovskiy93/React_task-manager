import React, { useState, useEffect } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import ContentComponent from '../ContentComponent';
import {ChangeThemeButtonComponent} from '../ChangeThemeButtonComponent';
import styled from 'styled-components';

import theme from '../../theme';
import { ThemeContext } from '../../theme/ThemeContext';


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.containerBgColor};
  background: ${props => props.containerBgGradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.mainTextColor};
  transition: all 1s;
`;

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 10px);
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${props => props.tabWrapperShadowColor};
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
    <ThemeContext.Provider value={{
      theme: selectedTheme,
      isDarkMode,
      toggleTheme: setDarkMode
    }}>
      <Container
        containerBgColor={selectedTheme.containerBgColor}
        containerBgGradientColor={selectedTheme.containerBgGradientColor}
        mainTextColor={selectedTheme.mainTextColor}
      >
        <ChangeThemeButtonComponent />
        <DeviceWrapper
          deviceBorderColor={selectedTheme.deviceBorderColor}
          deviceBgColor={selectedTheme.deviceBgColor}
          tabWrapperShadowColor={selectedTheme.tabWrapperShadowColor}
        >
          <div className="device">
            <HeaderComponent
              deviceBorderColor={selectedTheme.deviceBorderColor}
            />

            <ContentComponent
              tasks={tasks}
              setActiveTab={setActiveTab}
              changeTasksStatus={changeTasksStatus}
              changeTasksStatusDelete={changeTasksStatusDelete}
              activeTabe={activeTabe}
              tabWrapperBgColor={selectedTheme.tabWrapperBgColor}
              tabWrapperShadowColor={selectedTheme.tabWrapperShadowColor}
              borderBottomTaskDivColor={selectedTheme.borderBottomTaskDivColor}
              removeTaskTextColor={selectedTheme.removeTaskTextColor}
              doneTaskTextColor={selectedTheme.doneTaskTextColor}
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
    </ThemeContext.Provider>
  );
}

export default App;