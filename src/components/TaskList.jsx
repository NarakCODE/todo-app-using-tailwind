import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    const tasksLength = tasks.length;
    return (
        <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <p className="text-teal-500 font-semibold text-lg">
                        Created tasks
                    </p>
                    <span className="px-3 rounded-xl font-semibold bg-[#262626] text-sm">
                        {tasksLength}
                    </span>
                </div>

                <div className="flex items-center space-x-3">
                    <p className="text-violet-500 font-semibold text-lg">
                        Created tasks
                    </p>
                    <span className="px-3 rounded-xl font-semibold bg-[#262626] text-sm">
                        {completedTasks} of {tasksLength}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
