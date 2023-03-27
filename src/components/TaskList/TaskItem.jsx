import axios from 'axios';

function TaskItem({ task, fetchTaskList }) {

    const removeTask = (e) => {
        console.log(`removeTask ${task.id}`)
        axios.delete(`/todo/deleteTask/${task.id}`)
        .then((response) => {
            fetchTaskList();
        }).catch((error) => {
            console.log(`Error in removeTask ${error}`);
            alert('Something went wrong!')
        })
    }

    const completeTask = () => {
        if(task.taskStatus === false) {
            let status = {status: task.taskStatus === true}
            axios.put(`/todo/${task.id}`, status)
            .then((response) => {
                fetchTaskList();
            }).catch((error) => {
                console.log(`Error in completeTask ${error}`);
                alert('Something went wrong!')
            })
        }
    }

    const markTask = () => {
        //TODO CHANGE THIS TO 'TRUE' WHEN YOUR PUT REQUEST IS WORKING
        if(task.taskStatus === null) {
            return 'line-through';
        } else {
            return 'none';
        }
    }

    return (
        <li style={{textDecoration: markTask() }} key={task.id}>
            {task.taskName}: {task.taskDesc}
            <br />
            <button onClick={(e) => completeTask(e)}>Complete</button>
            <button onClick={(e) => removeTask(e)}>Delete</button>
        </li>
    )
}

export default TaskItem;