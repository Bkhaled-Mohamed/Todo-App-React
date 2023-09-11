import { useState } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/todoInput";
import { v4 as uuidv4 } from "uuid";

uuidv4();

function App() {
  const [todos, setTodos] = useState([{ task: "eat lanuch" }]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-5/12 min-h-1/2 bg-slate-800 p-20 rounded-lg">
        <h1 className="text-white text-center text-2xl font-bold pb-12">
          Things To Get Done!
        </h1>
        {console.log(todos)}
        <TodoInput addTodo={addTodo} />
        <h2 className="text-white pt-3">Todos:</h2>
        {todos.map((todo, index) => (
          <Todos task={todo} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
