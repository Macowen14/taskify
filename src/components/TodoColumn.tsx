import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

interface Props {
  title: string;
  tasks: Todo[];
  setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
  moveTask: (task: Todo, fromCompleted: boolean) => void;
}

const TodoColumn: React.FC<Props> = ({ title, tasks, setTask, moveTask }) => {
  return (
    <div
      className={`flex-1 ${
        title === "Pending tasks" ? "bg-green-500" : "bg-red-500"
      } text-white md:shadow-lg rounded-lg pb-6`}
    >
      <h2 className="font-roboto text-center text-2xl pt-4 border-b-2 border-white pb-2">
        {title}
      </h2>
      <div className="space-y-6 flex flex-wrap justify-evenly flex-col lg:flex-row items-center">
        {tasks.map((item, index) => (
          <TodoItem
            key={item.id}
            index={index}
            item={item}
            tasks={tasks}
            setTask={setTask}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoColumn;
