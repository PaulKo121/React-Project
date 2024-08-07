import React, { useState, useEffect, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

// 建立一個 Context
const TodoContext = createContext();

// TodoProvider 組件，提供待辦事項列表和操作函數
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 從本地存儲載入待辦事項
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // 將待辦事項保存到本地存儲
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// 顯示待辦事項列表的組件
const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

// TODO: 添加新待辦事項的組件
const AddTodo = () => {
  const [newTodo, setNewTod] = useState('');
  const [todos, setTodos] = useContext(TodoContext);
  
}

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

// 將 App 組件渲染到 root 元素中
ReactDOM.render(<App />, document.getElementById('root'));