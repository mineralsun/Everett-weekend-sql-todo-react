import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [status, setStatus] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);

    const fetchTaskList = () => {
        axios.get('/todo').then((response) => {
            setListOfTasks(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong!');
        });
    }

    useEffect(() => {
        fetchTaskList();
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/todo', {
            taskName,
            taskDesc,
            status,
        }).then((response) => {
            setTaskName('');
            setTaskDesc('');
            fetchTaskList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong!');
        })
    }
    return (
        <div>
            <h2>Remaining Tasks!</h2>

            <form onSubmit={submitForm}>
                Task Name:
                <input type="text"
                       value={taskName}
                       onChange={(e) => setTaskName(e.target.value)} />
                <br />
                Task Description:
                <input type="text"
                       value={taskDesc}
                       onChange={(e) => setTaskDesc(e.target.value)} />
                <br />
                Task Status:
                <input type="text"
                       value={status}
                       onChange={(e) => setStatus(e.target.value)} />
                <input type="submit" />
            </form>
            <ul>
                {
                    listOfTasks.map((task) => (
                        <li key={task.id}>
                            {task.taskName}: {task.taskDesc} | Status: {task.status}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TaskList;