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
import DefaultLayout from "./component/layout/defaultLayout";
import { PrimaryButton, SecondaryButton } from "./component/button/Button";
import Grid from "@mui/material/Grid";
function App() {
  const handleClick = () => {};
  return (
    <>
      <CardMedia
        component="img"
        alt="green "
        height="500"
        image="/top.png"
        sx={{ background: "#fff" }}
      />
      <Box>
        <Paper elevation={3} />
      </Box>
      <DefaultLayout>
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

export default App;
