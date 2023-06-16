import React from 'react';
import PropTypes from 'prop-types';
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

const TabComponent = ({
  setActiveTab,
  tasks,
  activeTabe,
  changeTasksStatus,
  changeTasksStatusDelete,
  nameTab,
  tabTitle,
  tabDescription,
  taskListHeight,
  tabWrapperBgColor,
  tabWrapperShadowColor,
  borderBottomTaskDivColor,
  removeTaskTextColor,
  doneTaskTextColor
}) => {
  return (
    <TabWrapper 
      className={activeTabe === nameTab ? "active" : ""} 
      tabWrapperShadowColor={tabWrapperShadowColor}
    >
      <TaskTabComponent
        setActiveTab={setActiveTab}
        nameTab={nameTab}
        tabTitle={tabTitle}
        tabDescription={tabDescription}
        tasks={tasks}
        tabWrapperBgColor={tabWrapperBgColor} 
      />
      <TasksListComponent 
        activeTabe={activeTabe}
        nameTab={nameTab}
        taskListHeight={taskListHeight}
        tasks={tasks}
        changeTasksStatus={changeTasksStatus}
        changeTasksStatusDelete={changeTasksStatusDelete}
        borderBottomTaskDivColor={borderBottomTaskDivColor}
        removeTaskTextColor={removeTaskTextColor}
        doneTaskTextColor={doneTaskTextColor}
      />
    </TabWrapper>
  )
}

TabComponent.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  activeTabe: PropTypes.string,
  changeTasksStatus: PropTypes.func.isRequired,
  changeTasksStatusDelete: PropTypes.func.isRequired,
  nameTab: PropTypes.string,
  tabTitle: PropTypes.string,
  tabDescription: PropTypes.string,
  taskListHeight: PropTypes.number,
  tabWrapperBgColor: PropTypes.string,
  tabWrapperShadowColor: PropTypes.string,
  borderBottomTaskDivColor: PropTypes.string,
  removeTaskTextColor: PropTypes.string,
  doneTaskTextColor: PropTypes.string,
}

export default TabComponent;

