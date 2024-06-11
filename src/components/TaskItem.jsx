import React from "react";
import { Trash2 } from "lucide-react";
import { PenLine } from "lucide-react";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-[#262626] px-4 py-4 rounded-lg border border-[#404040] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="size-5 fill-none checked:bg-black "
          checked={task.isCompleted}
        />
        <p className="">{task.title}</p>
      </div>

      <div className="flex items-center gap-6">
        <button>
          <PenLine className="text-gray-500 hover:text-white" size={20} />
        </button>
        <button>
          <Trash2 className="text-gray-500 hover:text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
