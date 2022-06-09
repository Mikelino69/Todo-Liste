import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const alltodos = [
  { description: "einkaufen", done: true },
  { description: "Sport", done: false },
  { description: "programmieren", done: false },
];

const TodoList = () => {
  const [opencount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(alltodos);
  const [textinput, setTextinput] = useState("");

  const changeText = (e) => {
    setTextinput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, {description:textinput, done:false}];
    setTodos(newTodos);
  };

  const countOpen = () => {
    const doneTodos = todos.filter((item) => {
      return !item.done;
    });
    countOpenTodos(doneTodos.length);
  };

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1 );
    setTodos(newTodos);
  };

  useEffect(() => {
    countOpen();
    localStorage.setItem("items", JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div
        className="textonClick={submit}-center
         bg-red-400
         text-white text-xl
         py-4 font-semibold"
      >
        <h1 className="text-3xl text-center">Unsere Todos</h1>
        <h2 className="text-center font-thin-bold">Offene Todos:{opencount}</h2>
        <form className="grid grid-cols-3 py-5">
          <input
            onChange={changeText}
            type="text"
            placeholder="Neues Todo.."
            className="text-gray-900"
          ></input>
          <input
            onClick={submit}
            className="text-1xl col-span-2 cursor-pointer text-right  
            bg-white p-1 text-gray-400"
            type="submit"
            value="Add Todo"
          ></input>
        </form>
      </div>

      {todos.map((item, index) => {
        return (
          <Todo
            description={item.description}
            done={item.done}
            key={index}
            index={index}
            onChangeTodo={changeTodo}
            onDeleteTodo={deleteTodo}
          ></Todo>
        );
      })}
    </div>
  );
};

export default TodoList;
