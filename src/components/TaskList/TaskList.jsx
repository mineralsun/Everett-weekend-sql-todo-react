import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';

function TaskList() {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState(false);
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
                        setTaskStatus={setTaskStatus}
                        fetchTaskList={fetchTaskList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TaskList;