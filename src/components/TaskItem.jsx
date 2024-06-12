import React from "react";
import { Trash2 } from "lucide-react";
import { PenLine } from "lucide-react";

const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {
    return (
        <div className="bg-[#262626] px-4 py-4 rounded-lg border border-[#404040] flex items-center justify-between">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    className="size-5 fill-none checked:bg-black "
                    onClick={() => onComplete(task.id)}
                    checked={task.isCompleted}
                    readOnly
                />
                <p
                    className={
                        task.isCompleted ? "line-through opacity-50" : ""
                    }
                >
                    {task.title}
                </p>
            </div>

            <div className="flex items-center gap-6">
                <button onClick={() => onEdit(task)}>
                    <PenLine
                        className="text-gray-500 hover:text-white"
                        size={20}
                    />
                </button>
                <button onClick={() => onDelete(task.id)}>
                    <Trash2
                        className="text-gray-500 hover:text-white"
                        size={20}
                    />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
