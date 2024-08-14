import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./models/Todo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, { id: tasks.length + 1, task, completed: false }]);
  };

  const moveTask = (task: Todo, fromCompleted: boolean) => {
    if (fromCompleted) {
      setCompletedTodos(completedTodos.filter((t) => t.id !== task.id));
      setTasks([...tasks, { ...task, completed: false }]);
    } else {
      setTasks(tasks.filter((t) => t.id !== task.id));
      setCompletedTodos([...completedTodos, { ...task, completed: true }]);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 p-4">
      <h1 className="text-center font-roboto text-2xl text-white">Taskify</h1>
      <InputField handleAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        setTask={setTasks}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        moveTask={moveTask}
      />
    </div>
  );
};

export default App;
