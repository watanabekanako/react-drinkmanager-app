import React from "react";
import "./App.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DefaultLayout from "./layout/defaultLayout";
import { PrimaryButton } from "./button/Button";
import Grid from "@mui/material/Grid";
function Top() {
  const handleClick = () => {};
  return (
    <>
      <CardMedia
        component="img"
        alt="green "
        height="345"
        image="/top.png"
        sx={{ background: "#fff" }}
      />
      <Box></Box>
      <DefaultLayout>
        <Card sx={{ m: 20, borderRadius: 10, p: 8 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4 }}
          >
            みんなの投票で会社に設置してある ドリンクの種類がかわるよ！
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Typography>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: "12px",
                  background: "#FF9900",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: "#fff" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: "12px",
                  background: "#FF9900",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: "#fff" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: "12px",
                  background: "#FF9900",
                  color: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: "#fff" }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <PrimaryButton
          onClick={handleClick}
          sx={{
            background: "linear-gradient(95deg, #ffc97a, #ff9900)",
            my: 4,
            borderRadius: 4,
          }}
        >
          Primary Button
        </PrimaryButton>
      </DefaultLayout>
    </>
  );
}

export default Top;
