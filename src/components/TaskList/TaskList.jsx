import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';

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
            <TaskForm 
                taskName={taskName}
                setTaskName={setTaskName}
                taskDesc={taskDesc}
                setTaskDesc={setTaskDesc}
                fetchTaskList={fetchTaskList}
            />
            <ul>
                {
                    listOfTasks.map((task) => (
                        <TaskItem 
                        key={task.id}
                        task={task}
                        fetchTaskList={fetchTaskList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TaskList;