import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);
                                           
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 shadow-lg max-w-[500px] px-4 py-5 bg-pink-300 rounded-md"
    >
      <div className="">
        <label
          className="block text-gray-800 mb-2 text-xl capitalize"
          htmlFor=""
        >
          New todo
        </label>
        <input
          className=" rounded-sm border-none ring-2 ring-transparent w-[300px] px-1 py-1 outline-none focus:ring-pink-500"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="New todo..."
        />
      </div>
      <button className="bg-green-400 text-gray-800 mt-4 px-8 text-xl py-1 rounded-md">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
