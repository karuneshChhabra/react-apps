import React, { useState, useEffect } from "react";
import { Button,InputLabel ,Input,FormControl,TextField } from '@material-ui/core';

import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const fetchValueFromDb =()=>{
   
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    }) 
    console.log(todos);
  }

  useEffect(
    fetchValueFromDb
    , []);

  const todoList = (event) => {
    event.preventDefault();
    
    db.collection('todos').add({
      "todo": input,
      "timestamp":firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput("");
    console.log(todos);
  };

  

  return (
    <div className="App"    style={{ 'backgroundColor': '#282c34'}} >
      <h1  style={{ 'color': '#fff'}}>To Do App 🤗</h1>
      <form>
      <FormControl style={{ 'color': '#fff'}}  className="App-header">
       <div>
         <TextField    onChange={(event) => setInput(event.target.value)} 
         id="standard-error-helper-text"
         value={input} style={{ 'color': '#fff'}} label="Enter Todo"></TextField>
        {/* <InputLabel style={{ 'color': '#fff'}}>Enter Todo</InputLabel>
       
        <Input name="input" style={{ 'color': '#fff'}}
          value={input}
         
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <Button  disabled={!input} type="submit" onClick={todoList}  variant="outlined" color="primary"
        style={{ 'backgroundColor': 'white'}} >
          Add Todo
        </Button>
        </div>
        <ul className="list">
        {todos && todos.map((todo, index) =>
        <Todo todo={todo} key={index}></Todo>
        
         )}
      </ul>
      </FormControl>
      </form>
     
     
    </div>
  );
}

export default App;
