import React from 'react';
import TabComponent from '../TabComponent';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 0 20px;
  flex: 1;
`;

const taskHeight = 50;

const ContentComponent = ({
  tasks,
  setActiveTab,
  changeTasksStatus,
  changeTasksStatusDelete,
  activeTabe,
  tabWrapperBgColor,
  tabWrapperShadowColor,
  borderBottomTaskDivColor,
  removeTaskTextColor,
  doneTaskTextColor
}) => {
    return (
        <ContentWrapper>
          <TabComponent 
            tasks={tasks} 
            setActiveTab={setActiveTab} 
            changeTasksStatus={changeTasksStatus} 
            changeTasksStatusDelete={changeTasksStatusDelete} 
            activeTabe={activeTabe}
            nameTab='all'
            tabTitle='All tasks'
            tabDescription='Here you can manage all tasks'
            taskListHeight={tasks.length*taskHeight}
            tabWrapperBgColor={tabWrapperBgColor}
            tabWrapperShadowColor={tabWrapperShadowColor}

            borderBottomTaskDivColor={borderBottomTaskDivColor}
            removeTaskTextColor={removeTaskTextColor}
            doneTaskTextColor={doneTaskTextColor}
          />

          <TabComponent 
            tasks={tasks.filter(el => !el.done && !el.delete)} 
            setActiveTab={setActiveTab} 
            changeTasksStatus={changeTasksStatus} 
            changeTasksStatusDelete={changeTasksStatusDelete} 
            activeTabe={activeTabe}
            nameTab='todo'
            tabTitle='Todo tasks'
            tabDescription='Here you can manage tasks to be completed'
            taskListHeight={tasks.filter(el => !el.done && !el.delete).length*taskHeight}
            tabWrapperBgColor={tabWrapperBgColor}
            tabWrapperShadowColor={tabWrapperShadowColor}

            borderBottomTaskDivColor={borderBottomTaskDivColor}
            removeTaskTextColor={removeTaskTextColor}
            doneTaskTextColor={doneTaskTextColor}
          />

          <TabComponent 
            tasks={tasks.filter(el => el.done && !el.delete)} 
            setActiveTab={setActiveTab} 
            changeTasksStatus={changeTasksStatus} 
            changeTasksStatusDelete={changeTasksStatusDelete} 
            activeTabe={activeTabe}
            nameTab='done'
            tabTitle='Done tasks'
            tabDescription='Here you manage the tasks that you have already done'
            taskListHeight={tasks.filter(el => el.done && !el.delete).length*taskHeight}
            tabWrapperBgColor={tabWrapperBgColor}
            tabWrapperShadowColor={tabWrapperShadowColor}
            borderBottomTaskDivColor={borderBottomTaskDivColor}
            removeTaskTextColor={removeTaskTextColor}
            doneTaskTextColor={doneTaskTextColor}
          />

          <TabComponent 
            tasks={tasks.filter(el => el.delete)} 
            setActiveTab={setActiveTab} 
            changeTasksStatus={changeTasksStatus} 
            changeTasksStatusDelete={changeTasksStatusDelete} 
            activeTabe={activeTabe}
            nameTab='removed'
            tabTitle='Removed tasks'
            tabDescription='Here you can see the tasks that you have been removed'
            taskListHeight={tasks.filter(el => el.delete).length*taskHeight}
            tabWrapperBgColor={tabWrapperBgColor}
            tabWrapperShadowColor={tabWrapperShadowColor}

            borderBottomTaskDivColor={borderBottomTaskDivColor}
            removeTaskTextColor={removeTaskTextColor}
            doneTaskTextColor={doneTaskTextColor}
          />
        </ContentWrapper>
    )
};
export default ContentComponent;