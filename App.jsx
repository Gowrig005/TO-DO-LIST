import { useEffect, useState } from "react";
import Task from "./components/task";
import axios from "axios";

function App() {

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
async function fetchTodos() {
 const response = await axios.get('http://localhost:5000/getTodos');
 setTodos(response.data);

}

async function addTodo() {
 if (!todo) return alert("Please enter a task");

 const response = await axios.post('http://localhost:5000/create', { todo });
 setTodos([...todos, response.data]);
 setTodo("");
}
async function deleteTodo(id) {
 await axios.delete(`http://localhost:5000/delete/${id}`);
 setTodos(todos.filter(task => task._id !== id));

}

useEffect(() => {

 fetchTodos();
}, []);
return (

   <div className="bg-blue-300  h-screen grid place-items-center">
   <div className="bg-amber-100 flex flex-col gap-3 border border-zinc-700 w-96 items center p-4 rounded-2xl">
     <p className="text-black text-4xl font-extrabold text-center"> Todo App</p>
       
       <input
            type="text"
            className="bg-zinc-600 text-white rounded-md p-2 w-full"
            placeholder="Enter your task.."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}

        />

    <button className="bg-white w-full p-2 rounded-md hover:bg-zinc-400 duration-300" onClick={addTodo}>
            Add Task
    </button>
 {todos.map(task => (
    <Task key ={task._id} task={task} deleteTodo={deleteTodo}  />
 ))}
    </div>
 </div>

);
}
 export default App;