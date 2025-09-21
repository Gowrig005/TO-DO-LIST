function Task({task, deleteTodo}){
  return (
    <div className="border border-black w-full flex justify-between">
    <p className="text-black m-1">
      {task.todoName}</p>
    <button className="text-red-500 font-extrabold hover:scale-115 duration-100" onClick={() => deleteTodo(task._id)}>
      X</button>
  </div>
  );
}
export default Task;