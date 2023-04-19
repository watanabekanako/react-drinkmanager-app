import React from "react";
// import "./App.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Paginate from "../paginate/paginate";
import Stack from "@mui/material/Stack";
const Itmesearch = () => {
  const handleClick = () => {};
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ background: "linear-gradient(95deg, #ffc97a, #ff9900)" }}>
          人気順
        </Button>
        <Button>名前順</Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paginate count={10} />
      </Box>
    </>
  );
};

export default Itmesearch;
