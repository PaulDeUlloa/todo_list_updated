import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    const [task, setTask] = useState("");

    const [completed, setCompleted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { task, completed: false };
        console.log(newTask);

        props.addTask(newTask)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task: </label>
                    <input name='task' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div>
                    <label>Task Completed: </label>
                    <input name='completed' type='checkbox' onChange={(e) => setCompleted(e.target.checked)} />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Add</button>
                </div>
            </form>
        </>

    )

}
export default Form;