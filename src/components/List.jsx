import React from "react";

const List = (props) => {

    const handleDelete = (targetIdx) => {
        props.deleteTask(targetIdx);
    }

    const handleUpdate = (targetIdx, targetBool) => {
        props.updateTask(targetIdx, targetBool)
    }

    return (
        <div>
            <table border="3">
                <thead>
                    <tr>
                        <th>Task |</th>
                        <th>Delete Task |</th>
                        <th>Task Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.taskList.map((eachTask, idx) => {
                            return (
                                <tr key={idx} style={eachTask.completed ? { backgroundColor: "#08e600" } : { backgroundColor: "#ffffff;" }}>
                                    <td>{eachTask.task}</td>
                                    <td>
                                        <button onClick={() => handleDelete(idx)}>Delete</button>
                                    </td>
                                    <td>
                                        <input type="checkbox" onChange={(e) => handleUpdate(idx, e.target.checked)} />
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table >
        </div>
    )
}

export default List;