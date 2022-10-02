import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Customeritem } from "./CustomerItem";

export const CustomerList=()=>{
    const[data,setData]=useState([])
    const [name,setName]=useState("")
    const[mobile,setNumber]=useState("")
    const[city,setCity]=useState("")
    const handleSubmit=()=>{
        const Customer={name,mobile,city}
        
        setData([Customer,...data])
        setName("")
        setNumber("")
        setCity("")
    }

    return(

        <div>
            <h1>Customer</h1>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" label="Cutomer Name" fullWidth />
            </Grid>
            <Grid item xs={2}>
                <TextField value={mobile} onChange={(e)=>setNumber(e.target.value)} variant="outlined" label="Mobile No :" fullWidth />
            </Grid>
            <Grid item xs={2}>
                <TextField value={city} onChange={(e)=>setCity(e.target.value)} variant="outlined" label="City :" fullWidth />
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>handleSubmit()} variant="contained" fullWidth>Add</Button>
            </Grid>
        {
            data.length>0 && data.map(item=>
                <Customeritem item={item}/>
                )
        }

            </Grid>

        </div>
    )
}