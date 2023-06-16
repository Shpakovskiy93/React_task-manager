import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import HeaderComponent from '../../components/HeaderComponent';
import ContentComponent from '../../components/ContentComponent';
import FooterComponent from '../../components/FooterComponent';



const TaskPageComponent = () => {
    let initTasks = [];
    const [newTask, setNewTasks] = useState("");
    const [tasks, setTasks] = useState(initTasks);
    const [activeTabe, setActiveTab] = useState("all");
    const [isAddTasksFormOpen, setAddTasksFormOpen] = useState(false);

    const changeTasksStatus = (el) => {
      setTasks(
        tasks.map((item) =>
          item.id === el.id ? { ...item, done: !item.done } : item
        )
      );
    };

    const changeTasksStatusDelete = (el) => {
      setTasks(
        tasks.map((item) =>
          item.id === el.id ? { ...item, delete: !item.delete } : item
        )
      );
    };

    const enterNewTask = (e) => {
      setNewTasks(e.target.value);
    };

    const addNewTask = (e) => {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, done: false },
      ]);
      setNewTasks("");
    };

    const keyBoardHandler = (e) => {
      if (e.keyCode === 13) {
        addNewTask();
        setNewTasks("");
        setAddTasksFormOpen(false);
      }
      if (e.keyCode === 27) {
        setNewTasks("");
        setAddTasksFormOpen(false);
      }
    };

    useEffect(() => {
      setTimeout(() => {
        setTasks([
          { id: 1, title: "open your eyes", done: true, delete: true },
          { id: 2, title: "check smartphone", done: false, delete: true },
          { id: 3, title: "brush your teeth", done: true, delete: false },
          { id: 4, title: "breacfest", done: false, delete: false },
        ]);
      }, 2000);
    }, []);

    const {theme} = useContext(ThemeContext);

    return (
      <>
        <HeaderComponent deviceBorderColor={theme.deviceBorderColor} />

        <ContentComponent
          tasks={tasks}
          setActiveTab={setActiveTab}
          changeTasksStatus={changeTasksStatus}
          changeTasksStatusDelete={changeTasksStatusDelete}
          activeTabe={activeTabe}
          tabWrapperBgColor={theme.tabWrapperBgColor}
          tabWrapperShadowColor={theme.tabWrapperShadowColor}
          borderBottomTaskDivColor={theme.borderBottomTaskDivColor}
          removeTaskTextColor={theme.removeTaskTextColor}
          doneTaskTextColor={theme.doneTaskTextColor}
        />

        <FooterComponent
          isAddTasksFormOpen={isAddTasksFormOpen}
          setAddTasksFormOpen={setAddTasksFormOpen}
          enterNewTask={enterNewTask}
          keyBoardHandler={keyBoardHandler}
          newTask={newTask}
        />
      </>
    );
}
export {TaskPageComponent};