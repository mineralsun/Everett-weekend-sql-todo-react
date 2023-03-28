import React, { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';

function TaskItem({ task, fetchTaskList, setTaskStatus }) {

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
            const status = {status: !task.taskStatus}
            console.log(status);
            axios.put(`/todo/updateTask/${task.id}`, status)
            .then((response) => {
                fetchTaskList();
            }).catch((error) => {
                console.log(`Error in completeTask ${error}`);
                alert('Something went wrong!')
            })
        }
    }

    const markTask = () => {
        if(task.taskStatus === true) {
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