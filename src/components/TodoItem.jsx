import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState(todo.text);

  const [isCompleted, setIsCompleted] = useState(false);
  const completeHandler = () => {
    setIsCompleted(!isCompleted);
  };
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    updateTodo(todo.id, value);
    setVisible(false);
  };

  return (
    <li className="flex items-center mb-4 gap-3 max-w-md mx-auto justify-between  rounded-md">
      <input
        type="checkbox"
        name="complete"
        id=""
        onClick={completeHandler}
        className="w-5 h-5"
      />
      {isVisible ? (
        <form onSubmit={handleUpdateTodo}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="rounded-md px-4 border">Update</button>
        </form>
      ) : (
        <div className="flex items-center gap-x-2">
          {
            <h2 className={`${isCompleted ? "line-through" : ""}`}>
              {todo.text}
            </h2>
          }
          <button
            onClick={() => setVisible(true)}
            className="bg-green-400 p-2 text-teal-50 rounded-md"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-200 p-2 rounded-md text-gray-800"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
