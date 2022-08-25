import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";
import { Navigate } from 'react-router-dom'
import { TodoList } from "../App";
import { signOut, getAuth } from 'firebase/auth';
import { Button, Image } from 'react-bootstrap';
import Cookies from "universal-cookie";


const USER = "user"
export default function AddTodo() {
  const user = JSON.parse(localStorage.getItem(USER))
  const [title, setTitle] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        userId: user.id
      });
      setTitle("");
    }
  };

  

  function SignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      setRedirect(true);
      console.log("ho gya bhai");// Sign-out successful.
    }).catch((error) => {
      console.log("bhai kya kr rha hai tuu");
    });
  }
  return (
    <React.Fragment>
      {redirect ? <Navigate to={"/"} /> : (
        <>
          <div style={{ padding: '30px', marginBottom: '80px' }}>
            <Image style={{ float: 'right' }} src={user.photoURL} />
          </div>
          <div style={{ marginRight: '50px' }}>
            <Button style={{ float: 'right' }} onClick={(e) => { e.preventDefault(); SignOut() }} variant='outline-primary'>
              Log Out
            </Button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3>Welcome, {user.userName} <span> write your first todo here</span></h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <input
                type="text"
                placeholder="Enter todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="btn_container">
              <button>Add</button>
            </div>
          </form>
          <TodoList />
        </>
      )}

    </React.Fragment>
  );
}
