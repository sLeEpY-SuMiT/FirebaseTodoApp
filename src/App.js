import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  where
} from "firebase/firestore";
import { db } from "./config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Title from "./components/Title";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import SignUp from "./components/SignUp";

const USER = "user"


function App() {
  
  return (
    <React.Fragment>
       
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<SignUp />}/>
        <Route path='/AddTodo' exact element={<AddTodo />}/>
        <Route path='/Todo' exact element={<Todo />}/>
      </Routes>      
      </BrowserRouter>
      </React.Fragment>
  );
}



export const TodoList = () => {

  const [todos, setTodos] = React.useState([]);
  const user = JSON.parse(localStorage.getItem(USER))
  console.log(user);


  React.useEffect(() => {
    let todosRef = collection(db, "todos");
    const q = query(todosRef,where('userId',"==",user.id));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
  
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    
  )
}
export default App;
