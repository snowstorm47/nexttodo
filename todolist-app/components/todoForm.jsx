import { Button, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { useState } from "react";
import { db } from "../firebase";

const Todoform = () => {
    const [todo,setTodo] = useState({ title:'', detail:'' })
    const onSubmit = async () => {
        const collectionRef = collection(db,"todos")
        const docRef = await addDoc(collectionRef, { ...todo, timestamp: serverTimestamp()})
        setTodo({title: '', detail: ''})
        alert("Todo with the ID ${docRef.id} is added")
       
    }






    return ( 
    <>
        <TextField fullWidth label="title" margin="normal"
        value={todo.title}
        onChange={e=>setTodo({...todo,title:e.target.value})}
        />
        <TextField fullWidth label="detail" multiline maxRows={4}
        value={todo.detail}
        onChange={e=>setTodo({...todo,detail:e.target.value})}
        />
        <Button onClick={onSubmit} sx = {{mt:3}} variant="contained">Add a new Todo</Button>
    </>
        
     );
}
 
export default Todoform;