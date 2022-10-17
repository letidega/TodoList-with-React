import React from "react"

const TodoList = (props) => {
    return <div>
    {props.tasks.map((task) => <div>{task.text} <buton onClick={() => props.removeTask(task.id)}>X</buton></div>)}
    </div>
}

export default TodoList;