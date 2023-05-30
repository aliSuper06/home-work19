import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AcitonTypeTodo } from "../store/todoSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: new Date().getTime(),
        text: newTodo,
        completed: false,
      };
      dispatch(AcitonTypeTodo.addTodo(todo));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(AcitonTypeTodo.deleteTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(AcitonTypeTodo.completed(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(AcitonTypeTodo.edit({ id, newText }));
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
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

export default TodoList;
