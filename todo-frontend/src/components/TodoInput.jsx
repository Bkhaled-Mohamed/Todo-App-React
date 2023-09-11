import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-wrap overflow-hidden w-full flex border-[3px] rounded border-b-slate-900 justify-center items-center flex-row"
    >
      <input
        onChange={(e) => setTodo(e.target.value)}
        className="flex-[3] bg-transparent text-white min-w-fit py-2 px-3  border-none outline-none "
        type="text"
        value={todo}
        placeholder="write a todo..."
      />
      {console.log(todo)}
      <button
        type="submit"
        className=" flex-1 min-w-fit py-2 px-3 bg-slate-600 rounded hover:bg-slate-700 text-white"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoInput;
