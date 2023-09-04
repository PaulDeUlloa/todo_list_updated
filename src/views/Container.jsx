import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

const Container = () =>{

    const [list, setList] = useState([]);

    const addToDo = (newToDo) =>{
        setList([...list, newToDo])
        console.log (list);
    }

    const deleteTodo = (targetIdx) => {
        const filteredList = todoList.filter(
            (eachTodo, idx) => targetIdx !== idx)

        setList(filteredList);
    }

    const updateTodo = (targetIdx, targetBool) => {
        const updatedList = List.map(
            (eachTodo, idx) => {
                if (targetIdx === idx) {
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
            <h1>User Todo List</h1>
            <Form addToDo={addToDo} />
            <list list={list} />
        </div>
    )


}
export default Container;