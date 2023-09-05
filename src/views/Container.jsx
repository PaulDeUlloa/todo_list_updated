import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

const Container = () => {

    const [list, setList] = useState([]);

    const addToDo = (newToDo) => {
        setList([...list, newToDo])
        console.log(list);
    }

    const deleteTodo = (targetIdx) => {
        const filteredList = list.filter(
            (eachTodo, Idx) => targetIdx !== Idx)

        setList(filteredList);
    }

    const updateTodo = (targetIdx, targetBool) => {
        const updatedList = list.map(
            (eachTodo, Idx) => {
                if (targetIdx === Idx) {
                    return { ...eachTodo, completed: targetBool }
                } else {
                    return eachTodo;
                }
            }
        )
        setList(updatedList);
    }


    return (
        <div>
            <h1>User Todo List: </h1>
            <Form addToDo={addToDo} />
            <List list={list} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default Container;

