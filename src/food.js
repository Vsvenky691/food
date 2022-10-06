import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
// import Order from "./Order";
import Navbar from "./Navbar";

const Food = ({ hello }) => {
  // const [amount, setAmount]= useState('');

  return (  
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {hello.map((data, index) => ( 
        <Card sx={{ width: 280, height: 350, flexDirection:'row', margin:1 }} key={index} >
          <CardMedia
            component="img"
            height="200"
            image={data.recipe.image}
            alt="Card image cap"
          />
          <CardContent>
            <Typography variant="body1">Food Chicken{data.recipe.label}</Typography>
            <Typography variant="body2" color="text-secondary">
              Total amount of: 2659 : {Math.round(data.recipe.calories)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={Navbar}>Order</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Food;
