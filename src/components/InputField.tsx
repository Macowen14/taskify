import React, { useState } from "react";

interface Props {
  handleAddTask: (task: string) => void;
}

const InputField: React.FC<Props> = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      handleAddTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center my-4 space-x-4"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="font-lato w-full max-w-md min-h-12 rounded-lg p-4 bg-white text-gray-700 shadow-md placeholder-gray-400 transition duration-300 ease-in-out focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
