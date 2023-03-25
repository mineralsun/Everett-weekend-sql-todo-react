import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
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
            taskName: taskName,
            taskDesc: taskDesc,
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
                <span />
                Task Description:
                <input type="text"
                       value={taskDesc}
                       onChange={(e) => setTaskDesc(e.target.value)} />
                <span />
                <input type="submit" />
            </form>
            <ul>
                {
                    listOfTasks.map((task) => (
                        <li key={task.id}>
                            {task.taskName}: {task.taskDesc}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TaskList;