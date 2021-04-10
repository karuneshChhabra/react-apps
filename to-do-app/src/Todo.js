import React, { useState } from 'react';
import { ListItem ,List ,ListItemText,ListItemIcon,Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import db from "./firebase";


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();

    const [open,setOpen] = useState(false);
    const [input,setInput] = useState("");

    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
           todo:input
        },{merge:true})
        setInput("");
        setOpen(false)
    }

    return (
    <>
        <Modal 
        open={open}
        onClose={e=>setOpen(false)}
       
        >
            <div className={classes.paper}>
      <p>previous Value :{props.todo.todo}</p>
      <input value={input} placeholder={props.todo.todo} onChange={e=> setInput(e.target.value)}/>
      <Button disabled={!input} onClick={updateTodo}>Update</Button>
      </div>
        </Modal> 
        <List className="todo_list" >

            <ListItem>
             <ListItemText primary={props.todo.todo} ></ListItemText>
                <ListItemIcon>
                    <DeleteForeverIcon onClick={event => {
                        db.collection('todos').doc(props.todo.id).delete()
                    }} variant="outlined" color="primary"></DeleteForeverIcon>
                
                </ListItemIcon>

             <ListItemIcon>
               <CreateIcon variant="outlined" onClick={event => setOpen(true)} color="primary" style={{'paddingRight':'8px'}} ></CreateIcon>
            </ListItemIcon>
            
             </ListItem>
             
           
      
        </List>
        </>
    )
}

export default Todo
