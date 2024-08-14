import React, { useState } from "react";
import { Todo } from "../models/Todo";
import { AiFillEdit } from "react-icons/ai";
import { TiTick, TiArrowBack } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

type Props = {
  tasks: Todo[];
  item: Todo;
  index: number;
  setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
  moveTask: (task: Todo, fromCompleted: boolean) => void;
};

const TodoItem: React.FC<Props> = ({ item, tasks, setTask, moveTask }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.task);

  function handleComplete() {
    moveTask(item, false);
  }

  function handleDelete() {
    setTask(tasks.filter((task) => task.id !== item.id));
  }

  function handleRevert() {
    moveTask(item, true);
  }

  function handleEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditTodo(e.target.value);
  }

  function handleSave() {
    setTask(
      tasks.map((task) =>
        task.id === item.id ? { ...task, task: editTodo } : task
      )
    );
    setEdit(false);
  }

  return (
    <form
      className={`flex ${
        edit ? "flex-col" : "flex-row"
      } bg-yellow-400 p-4 rounded-lg min-w-full justify-between md:min-w-max hover:bg-yellow-300 transition-colors duration-300 ease-in-out mt-1 text-black`}
      onSubmit={(e) => e.preventDefault()}
    >
      {edit ? (
        <>
          <div className="flex flex-row items-center">
            <input
              type="text"
              value={editTodo}
              onChange={handleEditChange}
              className="font-lato w-[80%] min-h-12 rounded-lg p-4 border-2 border-gray-300 focus:border-blue-500 transition-colors duration-300 ease-in-out text-black"
            />
            <button
              type="button"
              onClick={handleSave}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </>
      ) : item.completed ? (
        <s className="font-playfair">{item.task}</s>
      ) : (
        <span className="font-lato break-words">{item.task}</span>
      )}

      <div className={`flex ${edit ? "mt-4" : "ml-6"} gap-8`}>
        <span
          className="cursor-pointer text-xl text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out"
          onClick={() => {
            if (!edit && !item.completed) {
              setEdit(true);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="cursor-pointer text-xl text-red-700 hover:text-red-500 transition-colors duration-300 ease-in-out"
          onClick={handleDelete}
        >
          <MdDelete />
        </span>
        {item.completed ? (
          <span
            className="cursor-pointer text-xl text-green-700 hover:text-green-500 transition-colors duration-300 ease-in-out"
            onClick={handleRevert}
          >
            <TiArrowBack />
          </span>
        ) : (
          <span
            className="cursor-pointer text-xl text-blue-700 hover:text-blue-500 transition-colors duration-300 ease-in-out"
            onClick={handleComplete}
          >
            <TiTick />
          </span>
        )}
      </div>
    </form>
  );
};

export default TodoItem;
