import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import { useState } from 'react';

const AddTask = () =>{
    const [task, setTask] = useState({
        taskName: "",
        taskDescription: ""
    })

    const OnTextChange=(e)=>{

        let eleName= e.target.name;
        
        setTask({...task,[eleName]:e.target.value})

    }
    const SaveTask = (e) => {
        e.preventDefault();
        console.log(task);
        setTask({
            taskName:"",
            taskDescription:""
        });
    }
    return(
        <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            <br></br>
            <br></br>
            <div>
                <TextField
                required
                id="outlined-required"
                label="Task Name"
                placeholder="enter task name"
                name="taskName"
                value={task.taskName}
                onChange={OnTextChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <TextField
                required
                id="outlined-required"
                label="Task Description"
                placeholder="enter task description"
                name="taskDescription"
                value={task.taskDescription}
                onChange={OnTextChange}
                />
            </div>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={SaveTask}>Save</Button>
            <br></br>
            <br></br>
        </Box>
    )
}
export default AddTask