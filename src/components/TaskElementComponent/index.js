import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const LiComponent = styled.li`
  padding: 14px 0px;
  display: flex;
  justify-content: space-around;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.borderBottomTaskDivColor};
  }

  &:last-child {
    padding-bottom: 0px;
  }

  .task__text {
    flex: 1;
    margin: 0px 4px;
  }

  &:not(.removed),
  &:not(.removed),
  &:not(.removed) {
    .fa,
    .far,
    .fas {
      cursor: pointer;
    }
  }

  &.removed {
    .fa,
    .far,
    .fas {
      opacity: 0;
    }

    .task__text {
      text-decoration: line-through;
      color: ${props => props.removeTaskTextColor};
      font-weight: 100;
    }
  }

  &.done {
    .fa.fa-check-square,
    .far.fa-check-square,
    .fas.fa-check-square {
      opacity: 0.5;
      cursor: default;
    }

    .task__text {
      color: ${props => props.doneTaskTextColor};
      font-weight: 100;
    }
  }
`;

const TaskElementComponent = ({ 
  cssClass, 
  el, 
  changeTasksStatus, 
  changeTasksStatusDelete, 
  borderBottomTaskDivColor,
  removeTaskTextColor,
  doneTaskTextColor
}) => {
    return (
        <LiComponent 
          className={cssClass} 
          borderBottomTaskDivColor={borderBottomTaskDivColor}
          removeTaskTextColor={removeTaskTextColor}
          doneTaskTextColor={doneTaskTextColor}
        >
            <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTasksStatus(el)}/>
            <span className="task__text">{el.title}</span>
            <FontAwesomeIcon className='fa' icon={faDeleteLeft} onClick={() => changeTasksStatusDelete(el)}/>
        </LiComponent>
    )
};
export default TaskElementComponent;