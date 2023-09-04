import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

const Container = () =>{

    const [list, setList] = useState([]);

    const addToDo = (newToDo) =>{
        setList([...list, newToDo])
        console.log (list);
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