import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme/ThemeContext';
import { FooterStyledComponent } from './index.style';

const FooterComponent = ({
    isAddTasksFormOpen,
    setAddTasksFormOpen,
    enterNewTask,
    keyBoardHandler,
    newTask,
}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <FooterStyledComponent 
            className={isAddTasksFormOpen ? 'active' : ''}
            addButtonWrapperBgColor={theme.addButtonWrapperBgColor}
            hrBgColor={theme.hrBgColor}
            inputUnderLineColor={theme.inputUnderLineColor}
            addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
            mainTextColor={theme.mainTextColor}
        >
          <div className="add__button__wrapper" onClick={() => setAddTasksFormOpen(!isAddTasksFormOpen)}>
              <span className="hr"></span>
              <span className={`hr ${isAddTasksFormOpen ? '' : 'vr'}`}></span>
          </div>
          <div className="add__task__form__wrapper">
              <label htmlFor="task_input">Add new task for today</label>
              <input id="task_input" type="text" placeholder="Enter smth here" onChange={enterNewTask} onKeyUp={keyBoardHandler} value={newTask}/>
          </div>
        </FooterStyledComponent>
    )
}

FooterComponent.propTypes = {
    isAddTasksFormOpen: PropTypes.bool.isRequired,
    setAddTasksFormOpen: PropTypes.func.isRequired,
    enterNewTask: PropTypes.func.isRequired,
    keyBoardHandler: PropTypes.func.isRequired,
    newTask: PropTypes.string,
    addButtonWrapperBgColor: PropTypes.string,
    hrBgColor: PropTypes.string,
    addTaskFormWrapperBgColor: PropTypes.string,
    inputUnderLineColor: PropTypes.string,
    mainTextColor: PropTypes.string
}

export default FooterComponent;