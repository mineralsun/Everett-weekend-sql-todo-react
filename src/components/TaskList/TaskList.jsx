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

    <div>
        <h2>Remaining Tasks!</h2>

    </div>
}

export default TaskList;