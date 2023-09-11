/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Todos({ task }) {
  return (
    <div className="flex flex-row  flex-wrap justify-between px-3 py-2 items-center rounded-md bg-slate-500 mb-2">
      <p className="text-white py-2 flex-[3] min-w-fit">{task.task}</p>
      <div className="flex flex-row gap-2  justify-end">
        <button className=" bg-green-300 py-1 px-3 rounded hover:bg-green-400">
          edit
        </button>
        <button className="bg-red-300 py-1 px-3 rounded  hover:bg-red-400">
          delete
        </button>
      </div>
    </div>
  );
}

export default Todos;
