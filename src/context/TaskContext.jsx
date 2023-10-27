import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../task'

export const taskContext = createContext();
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(idTask) {
        setTasks(tasks.filter(task => task.id !== idTask));
    }
    useEffect(() => {
        setTasks(data)
    }, [])
    return (
        <taskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}
