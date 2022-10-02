import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Customeritem=({item})=>{

    return(
<Grid item xs={2}>
    <Card sx={{bgcolor:blue}}>
        <CardContent>
  <h4>{item.name}</h4>
  <h5>{item.mobile}</h5>
   <h6>{item.city}</h6>
   </CardContent>
   </Card>
</Grid>

    )
}