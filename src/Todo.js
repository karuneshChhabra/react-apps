import React from 'react';
import { ListItem ,List ,ListItemText} from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
             <ListItemText primary={props.todo} ></ListItemText>
            
             
             </ListItem>
             <CreateIcon variant="outlined" color="primary" style={{'paddingRight':'8px'}} ></CreateIcon>
             <DeleteForeverIcon variant="outlined" color="primary"></DeleteForeverIcon>
           
      
        </List>
    )
}

export default Todo
