import React from 'react'
import { useState } from 'react'

const TodoForm = (props) => {

    const [task, setTask] = useState("");

    const [completed, setCompleted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task: </label>
                    <input class="form-control" name='task' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div>
                    <label>Task Completed: </label>
                    <input class="form-control" name='completed' type='checkbox' onChange={(e) => setCompleted(e.target.checked)} />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Add</button>
                </div>
            </form>
        </>

    )

}
export default Form;