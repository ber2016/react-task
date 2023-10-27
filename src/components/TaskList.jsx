import { taskContext } from "../context/TaskContext"
import TaskCard from "./TaskCard"
import {useContext} from 'react'
function TaskList() {
    const {tasks} = useContext(taskContext)
    if (tasks.length === 0) {
        return <h1 className="text-4xl font-bold text-center text-white">No hay tareas</h1>
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {
                tasks.map((task) => (
                    <TaskCard task={task} key={task.id}/>
                )
                )
            }
        </div>
    )
}
export default TaskList