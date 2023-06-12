import React from 'react';
import TaskElementComponent from '../TaskElementComponent';
import styled, {keyframes} from 'styled-components';

const hide = h => keyframes`
  0% {
    height: ${h}px;
    font-size: initial;
  }

  100% {
    height: 0;
    font-size: 0;
  }
`;
const show = h => keyframes`
  0% {
    height: 0;
    font-size: 0;
  }

  100% {
    height: ${h}px;
    font-size: initial;
  }
`;
const TaskListWrapper = styled.div`
  margin: 10px 0px;
  animation: ${props => hide(props.taskListHeight)} 1s;
  animation-fill-mode: forwards;
  overflow: hidden;
  &.active {
    animation: ${props =>show(props.taskListHeight)} 1s;
    animation-fill-mode: forwards;
  }
`;


const TabComponent = ({ setActiveTab, tasks, activeTabe, changeTasksStatus, changeTasksStatusDelete, nameTab, tabTitle, tabDescription, taskListHeight }) => {
  return (
    <div className={`tasks ${activeTabe === nameTab ? "active" : ""}`}>
      <div className="tasks__tab__wrapper" onClick={() => setActiveTab(nameTab)}>
          <div className="title__wrapper">
              <div className="title">{tabTitle}</div>
              <div className="description">{tabDescription}</div>
          </div>
          <div className="task__counter">{tasks.length}</div>
      </div>
      <TaskListWrapper 
        className={activeTabe === nameTab ? "active" : ""}
        taskListHeight={taskListHeight}
      >
          <ul className="tasks__list">
             {
              tasks.map(el => {
                const cssClass = el.delete ? 'removed': el.done ? 'done' : '';
                return (
                  <TaskElementComponent
                    key={el.id}
                    cssClass={cssClass}
                    el={el}
                    changeTasksStatus={changeTasksStatus}
                    changeTasksStatusDelete={changeTasksStatusDelete}
                  />
                )
              })
             }
          </ul>
      </TaskListWrapper>
    </div>
  )
}
export default TabComponent;

