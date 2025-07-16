
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const baseURL = "https://backend-z1th.onrender.com/todos";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch todos on load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(baseURL);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;

    if (editId) {
      // Update existing todo
      const res = await axios.put(`${baseURL}/${editId}`, { text });
      setTodos(todos.map((todo) => (todo._id === editId ? res.data : todo)));
      setEditId(null);
    } else {
      // Add new todo
      const res = await axios.post(baseURL, { text });
      setTodos([...todos, res.data]);
    }
    setText("");
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const startEdit = (todo) => {
    setEditId(todo._id);
    setText(todo.text);
  };

  return (
    <div className="text-center m-5">
      <h2 className="text-3xl text-red-500 mb-5">📝 Todo List</h2>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
          className="border w-sm p-2 rounded-xl"
        />
        <button onClick={addTodo} className="border p-2 m-2 bg-green-500 rounded-sm  hover:bg-black hover:text-white">{editId ? <MdTipsAndUpdates /> : <IoMdAdd />}</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => startEdit(todo)} className="border m-2 p-2 rounded-sm bg-amber-400 shadow-lg shadow-blue-700">
              <MdModeEditOutline />
            </button>
            <button onClick={() => deleteTodo(todo._id)}className="border m-2 p-2 rounded-sm bg-red-400 ">
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
