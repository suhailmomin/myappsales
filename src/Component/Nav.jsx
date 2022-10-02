import React from "react";
import { Grid, } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{

    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                  <Link to="/home">Home</Link>  
                </Grid>
                <Grid item xs={2}>
                    <Link to="/customer">CustomerList</Link>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/support">Support</Link>  
                </Grid>


            </Grid>

        </div>
    )
}