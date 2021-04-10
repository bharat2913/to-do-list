import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
// import firebase from "firebase";
import { db } from "./firebase.config";


export default function TodoListItem({ todo, inprogress, id }) {

  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    
    <div style={{  display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "On Going" : "completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>

    
  );
}