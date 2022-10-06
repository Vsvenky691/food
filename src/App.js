import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  Stack,
} from "@mui/material";
import axios from "axios";
import Food from "./food";


const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "35bc1c33";
  const YOUR_APP_KEY = "d7f94faca4a55404a72d91e879118836";
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(search);
    await axios(
      "https://api.edamam.com/search?q=" +
        search +
        "&app_id=" +
        YOUR_APP_ID +
        "&app_key=" +
        YOUR_APP_KEY +
        "&from=0&to=12&calories=591-722&health=alcohol-free"
    )
      .then((response) => {
        setData(response.data.hits);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Box sx={{backgroungColor:''}}>
      <Stack width={210} marginLeft={60} >
        <Typography>Food Recipe App</Typography>
        <FormControl>
          <Stack spacing={2}>
            <TextField
              label="food"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
            maxWidth="-50"
              variant="contained"
              type="submit"
              value="search"
              onClick={submitHandler}
            >
              submit
            </Button>
          </Stack>
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2}>
        {data.length >= 1 ? <Food hello={data} /> : null}
      </Stack>
    </Box>
  );
};

export default App;
