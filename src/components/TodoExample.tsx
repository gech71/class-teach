import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../features/todos/todosSlice";

const TodoExample = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector(
    (state: { todos: { id: number; text: string; completed: boolean }[] }) =>
      state.todos
  );
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };
  return (
    <div>
      <h3>My Todo List</h3>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.text}</strong>
            <br />
            <span> Is Task Completed : {todo.completed ? "✔️" : "✖️"}</span>
            <br />
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove Todo
            </button>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoExample;
