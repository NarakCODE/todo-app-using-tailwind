import React, { useState, useEffect } from "react";
import { CircleFadingPlus } from "lucide-react";
const Header = ({ handleAddTask, updatedTask, setUpdatedTask }) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(updatedTask.title || "");
    }, [updatedTask]);

    function handleSubmit(event) {
        event.preventDefault();
        handleAddTask(title);
        setTitle("");
        setUpdatedTask({ id: "", title: "" });
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <div className="relative h-[300px] w-full flex justify-center">
            {/* Overlay  background */}
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#151515] to-black/50"></div>
            <img
                src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Header Image"
                className="w-full h-full object-cover"
            />

            <form
                onSubmit={handleSubmit}
                className="absolute bottom-0 max-w-[700px] px-6 mx-auto w-full flex items-center gap-2"
            >
                <input
                    type="text"
                    placeholder="Add new Task"
                    className="px-4 py-3 rounded-md bg-[#262626] w-full placeholder-white/50 outline-none"
                    onChange={onChangeTitle}
                    required
                    value={title}
                />
                <button className="flex items-center gap-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 rounded-md">
                    {updatedTask.id ? "Update" : "Create"}
                    <CircleFadingPlus size={20} />
                </button>
            </form>
        </div>
    );
};

export default Header;
