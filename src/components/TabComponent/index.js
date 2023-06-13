import React from 'react';
import TasksListComponent from '../TasksListComponent';
import TaskTabComponent from '../TaskTabComponent';
import styled from 'styled-components';

const TabWrapper = styled.div`
  margin: 8px 0px;
  min-height: 90px;
  background-color: ${props => props.tabWrapperBgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px 0px ${props => props.tabWrapperShadowColor};
  cursor: pointer;
  transition: transform 0.3s;

  &.active {
    cursor: default;
  }

  &:hover:not(.active) {
    transform: scale(1.04);
  }
`;

const TabComponent = ({ setActiveTab, tasks, activeTabe, changeTasksStatus, changeTasksStatusDelete, nameTab, tabTitle, tabDescription, taskListHeight }) => {
  return (
    <TabWrapper 
      className={activeTabe === nameTab ? "active" : ""} 
      tabWrapperBgColor='#fff' 
      tabWrapperShadowColor='rgba(0, 0, 0, 0.25)'
    >
      <TaskTabComponent
        setActiveTab={setActiveTab}
        nameTab={nameTab}
        tabTitle={tabTitle}
        tabDescription={tabDescription}
        tasks={tasks}
      />
      <TasksListComponent 
        activeTabe={activeTabe}
        nameTab={nameTab}
        taskListHeight={taskListHeight}
        tasks={tasks}
        changeTasksStatus={changeTasksStatus}
        changeTasksStatusDelete={changeTasksStatusDelete}
      />
    </TabWrapper>
  )
}
export default TabComponent;

