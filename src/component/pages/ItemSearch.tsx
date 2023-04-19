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
import ItemCard from "../card/ItemCard";
import Paginate from "../paginate/paginate";
import Stack from "@mui/material/Stack";
const Itmesearch = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleClick = () => {};
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            background: "#C8A3A2",
            color: "#FFF",
            fontWeight: "bold",
            width: 100,
          }}
        >
          人気順
        </Button>

        <Button
          sx={{
            background: "#8FB8D6",
            color: "#FFF",
            fontWeight: "bold",
            marginLeft: 2,
            width: 100,
          }}
        >
          名前順
        </Button>
      </Box>
      <Typography
        variant="h4"
        component="p"
        sx={{ mb: 1, fontFamily: "HiraMinProN-W3" }}
      >
        ●●の検索結果一覧
      </Typography>
      <Typography component="p" sx={{ mb: 1, fontFamily: "HiraMinProN-W3" }}>
        検索に一致する商品はありませんでした。
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <ItemCard />
          </Grid>
        ))}
      </Grid>

      <Paginate count={10} />
      <Box sx={{ textAlign: "right", my: 4 }}>
        <Button
          sx={{
            background: "#8FB8D6",
            color: "#FFF",
            fontWeight: "bold",
            marginLeft: 2,
            width: 200,
          }}
        >
          商品追加する
        </Button>
      </Box>
    </>
  );
};

export default Itmesearch;
