import { FC, memo } from "react";
// import "./App.css";
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DefaultLayout from "../layout/defaultLayout";
import { PrimaryButton } from "../button/Button";
import Grid from "@mui/material/Grid";
type Props = {};

const Top: FC<Props> = memo((props) => {
  return (
    <>
      <>
        <CardMedia
          component="img"
          alt="green "
          height="345"
          image="/top.png"
          sx={{ background: "#f3bf88" }}
        />
        <Box></Box>
        <DefaultLayout>
          <Card
            sx={{
              mb: 20,
              mx: 10,
              borderRadius: 10,
              p: 8,
              backgroundColor: "#f3bf88",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              sx={{ m: 4, fontFamily: "Noto Serif JP, serif" }}
            >
              みんなの投票で会社に設置してある ドリンクの種類がかわるよ！
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Typography>
          </Card>
          <Card sx={{ m: 10, p: 2 }}>
            {/* <Typography
              gutterBottom
              variant="h4"
              component="div"
              textAlign="center"
              sx={{ my: 1, py: 4 }}
              className="ttlUnder"
            >
              投票ランキング
            </Typography> */}
          </Card>
          <PrimaryButton
            // onClick={handleClick}
            sx={{
              background: "linear-gradient(95deg, #ffc97a, #ff9900)",
              borderRadius: 4,
              textAlign: "center",
              display: "block",
              margin: "auto",
            }}
          >
            Primary Button
          </PrimaryButton>
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
              {/* <Box>
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
              </Box> */}
            </Grid>
            <Grid item xs={4}>
              {/* <Box>
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
              </Box> */}
            </Grid>
          </Grid>
          <PrimaryButton
            // onClick={handleClick}
            sx={{
              background: "linear-gradient(95deg, #ffc97a, #ff9900)",
              my: 2,
              borderRadius: 4,
              textAlign: "center",
              display: "block",
              margin: "auto",
            }}
          >
            Primary Button
          </PrimaryButton>
        </DefaultLayout>
      </>
    </>
  );
});

export default Top;
