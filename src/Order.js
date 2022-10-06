import React from "react";
import { useState } from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import Navbar from "./Navbar";

const Order = () => {
  const [amount, setAmount] = useState("");
  const handleClick = () => {
    setAmount("");
  };
  return (
    <Box>
    <Navbar />
      <TextField
        label="amount"
        InputProps={{
          StartAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      ></TextField>
      <Button value={amount} onClick={handleClick}>
        Buy
      </Button>
    </Box>
  );
};

export default Order;
