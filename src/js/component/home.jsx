import React, {useState} from "react";
import Input from "./input.jsx";
import Todolist from "./todolist.jsx"
import Button from "./button.jsx"

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
		console.log(result)
	}

	return (
		<div className="text-center">
			<Input value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
			<Todolist tasks={tasks} removeTask={removeTask}/>
			<Button onClick={addTask} value="Oprimir"/>
		</div>
	);
};

export default Home;
