import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

const Container = () => {

    const [taskList, setList] = useState([]);

    const addTask = (newTask) => {
        setList([...taskList, newTask])
        console.log(taskList);
    }

    const deleteTask = (targetIdx) => {
        const filteredList = taskList.filter(
            (eachTask, idx) => targetIdx !== idx)

        setList(filteredList);
    }

    const updateTask = (targetIdx, targetBool) => {
        const updatedList = taskList.map(
            (eachTask, idx) => {
                if (targetIdx === idx) {
                    return { ...eachTask, completed: targetBool }
                } else {
                    return eachTask;
                }
            }
        )
        setList(updatedList);
    }


    return (
        <div>
            <h1>User Todo List: </h1>
            <Form addTask={addTask} />
            <List taskList={taskList} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    )
}

export default Container;

