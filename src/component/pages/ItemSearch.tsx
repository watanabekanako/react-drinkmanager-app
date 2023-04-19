import { FC, memo } from "react";
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
import { PrimaryButton } from "../button/Button";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
type Props = {};

const ItemSearch: FC<Props> = memo((props) => {
  return (
    <>
      <Card sx={{ borderRadius: 10, p: 8 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          みんなの投票で会社に設置してある ドリンクの種類がかわるよ！
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </Typography>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ m: 0 }}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "12px",
                background: "#FF9900",
                color: "#fff",
                m: 0,
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
        // onClick={handleClick}
        sx={{
          background: "linear-gradient(95deg, #ffc97a, #ff9900)",
          my: 4,
          borderRadius: 4,
        }}
      >
        Primary Button
      </PrimaryButton>
      {/* <Pagination sx={{ display: "flex", justifyContent: "center" }} /> */}
      <Stack spacing={2}>
        <Pagination
          // 総ページ数
          count={10}
          sx={{ m: "auto", mt: 50 }}
        />
      </Stack>
    </>
  );
});

export default ItemSearch;
