import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addTodo, deleteTodo, completeTodo, editTodo } from "./actions";

const TodoList = ({ addTodo, deleteTodo, completeTodo, editTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const todoshka = useSelector((state) => state.todo.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: new Date().getTime(),
        text: newTodo,
        completed: false,
      };
      addTodo(todo);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleCompleteTodo = (id) => {
    completeTodo(id);
  };

  const handleEditTodo = (id, newText) => {
    editTodo(id, newText);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todoshka.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleCompleteTodo(todo.id)}>
              Complete
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button
              onClick={() => {
                const newText = prompt("Enter new text", todo.text);
                if (newText !== null) {
                  handleEditTodo(todo.id, newText);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
