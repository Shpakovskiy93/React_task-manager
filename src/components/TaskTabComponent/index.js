import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskTabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .title__wrapper {
    .title {
      font-weight: bold;
      text-transform: uppercase;
    }

    .description {
      font-weight: 100;
      font-size: 12px;
    }
  }
`;

const TaskTabComponent = ({
  setActiveTab,
  nameTab,
  tabTitle,
  tabDescription,
  tasks
}) => {
    return (
        <TaskTabWrapper onClick={() => setActiveTab(nameTab)} >
            <div className="title__wrapper">
                <div className="title">{tabTitle}</div>
                <div className="description">{tabDescription}</div>
            </div>
            <div className="task__counter">{tasks.length}</div>
        </TaskTabWrapper>
    );
}

TaskTabComponent.propTypes = {
  nameTab: PropTypes.string,
  tabTitle: PropTypes.string,
  tabDescription: PropTypes.string,
  tasks: PropTypes.array,
};

export default TaskTabComponent;