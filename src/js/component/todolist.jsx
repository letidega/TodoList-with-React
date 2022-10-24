
import React from "react"

const TodoList = ({tasks, removeTask}) => {
    return <div className="mt-3">
        {tasks.length == 0 ? "No hay tareas, añade una" : tasks.map((task, index) => <div key={index}>{task.text} <button onClick={() => removeTask(task.id)}>X</button></div>)}
    </div>
}

export default TodoList;