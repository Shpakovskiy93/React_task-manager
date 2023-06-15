import React from 'react';
import styled, {keyframes} from 'styled-components';
import TaskElementComponent from '../TaskElementComponent';

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

const TasksListComponent = ({
  activeTabe,
  nameTab,
  taskListHeight,
  tasks, 
  changeTasksStatus,
  changeTasksStatusDelete,
  borderBottomTaskDivColor,
  removeTaskTextColor,
  doneTaskTextColor
}) => {
    return (
        <TaskListWrapper
            className={activeTabe === nameTab ? "active" : ""}
            taskListHeight={taskListHeight}
        >
            <ul className="tasks__list">
            {tasks.map((el) => {
                const cssClass = el.delete ? "removed" : el.done ? "done" : "";
                return (
                <TaskElementComponent
                    key={el.id}
                    cssClass={cssClass}
                    el={el}
                    changeTasksStatus={changeTasksStatus}
                    changeTasksStatusDelete={changeTasksStatusDelete}
                    borderBottomTaskDivColor={borderBottomTaskDivColor}
                    removeTaskTextColor={removeTaskTextColor}
                    doneTaskTextColor={doneTaskTextColor}
                />
                );
            })}
            </ul>
        </TaskListWrapper>
    );
};
export default TasksListComponent;