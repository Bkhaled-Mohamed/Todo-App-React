import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/todoInput";
import { v4 as uuidv4 } from "uuid";

uuidv4();

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos
      ? JSON.parse(storedTodos)
      : [{ id: uuidv4(), task: "pet dog" }];
  });

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="xl:w-5/12 md:w-3/4 w-11/12 min-h-1/2 bg-slate-800 p-3 md:p-20 rounded-lg">
        <h1 className="text-white text-center text-2xl font-bold pb-12">
          Things To Get Done!
        </h1>
        {console.log(todos)}
        <TodoInput addTodo={addTodo} />
        <h2 className="text-white pt-3">Todos:</h2>
        {todos.map((todo, index) => (
          <Todos task={todo} key={index} deleteTodo={deleteTodo} />
        ))}
        <p className=" text-xs text-gray-400 text-center">
          note: click on the todo to mark it done.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default App;
