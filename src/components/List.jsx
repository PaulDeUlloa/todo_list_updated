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
                        props.list.map((eachTodo, Idx) => {
                            return (
                                <tr key={Idx} style={eachTodo.completed ? { backgroundColor: "#08e600" } : { backgroundColor: "#ffffff;" }}>
                                    <td>{eachTodo.task}</td>
                                    <td>
                                        <button class="btn btn-danger" onClick={() => handleDelete(Idx)}>Delete</button>
                                    </td>
                                    <td>
                                        <input type="checkbox" onChange={(e) => handleUpdate(Idx, e.target.checked)} />
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