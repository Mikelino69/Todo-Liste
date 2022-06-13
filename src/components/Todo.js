import React from "react";


const Todo = ({ description, done, onChangeTodo, onDeleteTodo, index }) => {
  return (
    <div>
      <div
        className={
          done
            ? "flex justify-between items-center p-2 bg-green-600"
            : "flex justify-between items-center p-2 bg-red-500" 
        }
      >
        <h1
          className="text-2xl cursor-pointer"
          onClick={() => {
            onChangeTodo(index);
          }}
        >
          {description}
        </h1>
        <button
          className="text-lg bg-white p-1"
          onClick={() => {
            onDeleteTodo(index);
          }}
        >
          Löschen
        </button>
      </div>
    </div>
  );
};

export default Todo;
