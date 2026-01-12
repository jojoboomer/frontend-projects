import { addTask } from "@/features/todo/todo-store";
import React, { useState } from "react";
import { task } from "./styles";

function NewTask() {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTodo);
    setNewTodo("");
  };

  return (
    <form className={`${task} task-new`} onSubmit={handleSubmit}>
      <input disabled type="checkbox" name="newTask" id="newTask" />
      <label htmlFor={`newTask`} className="checkIcon"></label>
      <input
        type="text"
        name="newTaskName"
        id="newTaskName"
        placeholder="Create a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}

export default NewTask;
