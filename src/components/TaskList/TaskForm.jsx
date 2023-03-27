import axios from 'axios';

function TaskForm({
                    taskName,
                    setTaskName,
                    taskDesc,
                    setTaskDesc,
                    fetchTaskList
                  }) {
    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/todo', {
            taskName: taskName,
            taskDesc: taskDesc
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
        <>
            <h2>Remaining Tasks!</h2>
            <form onSubmit={submitForm}>
                Task Name:
                <input type="text"
                       value={taskName}
                       onChange={(e) => setTaskName(e.target.value)} />
                <span />
                Task Description:
                <input 
                        type="text"
                        value={taskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)} />
                <input type="submit" />
            </form>
        </>
    )
}

export default TaskForm;