import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <p className="text-teal-500 font-semibold text-lg">Created tasks</p>
          <span className="px-3 rounded-xl font-semibold bg-[#262626] text-sm">
            6
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <p className="text-violet-500 font-semibold text-lg">Created tasks</p>
          <span className="px-3 rounded-xl font-semibold bg-[#262626] text-sm">
            0 of 7
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
