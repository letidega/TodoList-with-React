import React, {useState} from "react";
import Input from "./input.jsx";
import Todolist from "./todolist.jsx"
import Button from "./button.jsx"
import "../../styles/home.css"

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(1)
	const [taskValue, setTaskValue] = useState("")
	const [tasks, setTasks] = useState([])

	const addTask = () => {
		const auxTasks = [...tasks]
			auxTasks.push({
				id:counter,
				text: taskValue
			})
			setTasks(auxTasks)
			console.log({auxTasks})
			setCounter(counter + 1)
			setTaskValue("")
	}
	
	const removeTask = (id) => {
		const auxTasks = [...tasks]	
		const result = auxTasks.filter((task) => task.id !== id)
		setTasks(result);
	}

	return (
		<div className="text text-center">
			<h1>Todo List</h1>
			<Input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
			<Button onClick={addTask} value="Oprimir" />
			<Todolist tasks={tasks} removeTask={removeTask} />
		</div>
	);
};

export default Home;
