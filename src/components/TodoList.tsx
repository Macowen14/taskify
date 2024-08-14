import React from "react";
import { Todo } from "../models/Todo";
import TodoColumn from "./TodoColumn";

interface Props {
  tasks: Todo[];
  setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  moveTask: (task: Todo, fromCompleted: boolean) => void;
}

const TodoList: React.FC<Props> = ({
  tasks,
  setTask,
  completedTodos,
  setCompletedTodos,
  moveTask,
}) => {
  return (
    <div className="flex gap-4 flex-col md:flex-row mt-4">
      <TodoColumn
        title="Pending tasks"
        tasks={tasks}
        setTask={setTask}
        moveTask={moveTask}
      />
      <TodoColumn
        title="Completed tasks"
        tasks={completedTodos}
        setTask={setCompletedTodos}
        moveTask={moveTask}
      />
    </div>
  );
};

export default TodoList;
