/* eslint-disable react/prop-types */

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Todos({ task, deleteTodo }) {
  const [clicked, setclicked] = useState(false);

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  return (
    <div className="flex flex-row  flex-wrap justify-between px-3 py-2 items-center rounded-md bg-slate-500 mb-2">
      <p
        onClick={() => setclicked(!clicked)}
        className={`text-white py-2 flex-[3] cursor-pointer min-w-fit ${
          clicked ? "line-through text-gray-800" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex flex-row gap-2  justify-end">
        {/* <button className=" bg-green-300 py-1 px-3 rounded hover:bg-green-400">
          edit
        </button> */}
        <button
          onClick={handleDelete}
          className="bg-red-300 py-1 px-3 rounded  hover:bg-red-400"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Todos;
