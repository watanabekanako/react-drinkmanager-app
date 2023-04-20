import { FC, memo } from "react";
// import "./App.css";
import React from "react";

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
import ItemCard from "../card/ItemCard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AccordionMenu from "../accordion/AccordionMenu";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import PollResult from "./PollResult";
import Paper from "@mui/material";
import { Link } from "@mui/material";
type Props = {};

const Top: FC<Props> = memo((props) => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <>
        <Header />
        <CardMedia component="img" alt="top" height="500" image="/top.png" />
        <Container maxWidth="xl" sx={{ my: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <AccordionMenu />
              {/* 検索ボタン */}

              <Typography
                variant="h5"
                textAlign="center"
                sx={{ color: "#ea6f00", mt: 10 }}
              >
                - キーワードで探す -
              </Typography>
              <Box sx={{ mb: 10 }}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ my: 4, width: "100%", backgroundColor: "#fff" }}
                />

                <PrimaryButton
                  sx={{
                    background: "linear-gradient(95deg, #ffc97a, #ff9900)",
                    mb: 4,
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  検索する
                </PrimaryButton>
                <Box sx={{ my: 4 }}>
                  <img src="/dummybanner.jpg" style={{ maxWidth: "100%" }} />
                </Box>
                <Box>
                  <img src="/dummybanner.jpg" style={{ maxWidth: "100%" }} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={9}>
              <Box sx={{ textAlign: "center" }}>
                <Card
                  sx={{
                    p: 1,
                    backgroundColor: "#fff",
                    border: "4px dotted #ffdead ",
                    textAlign: "center",
                    width: "60%",
                    borderRadius: "20px",
                    m: "auto",
                  }}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ m: 4, color: "#595857", fontSize: "25px" }}
                  >
                    みんなの投票で会社に設置してある<br></br>
                    <Typography
                      gutterBottom
                      component="span"
                      sx={{
                        color: "#f3bf88",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      ドリンクの種類
                    </Typography>
                    がかわるよ！
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ m: 4, color: "#595857", fontSize: "16px" }}
                  >
                    好きなドリンクを教えてね。<br></br>
                    あなたの一票で結果が変わるかも!?
                  </Typography>
                </Card>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    background: "#e29399",
                    color: "#FFF",
                    fontWeight: "bold",
                    px: 20,
                    py: 4,
                    my: 10,
                    borderRadius: 20,
                    fontSize: 20,
                  }}
                >
                  投票する
                </Button>
              </Box>
              {/* <Grid container spacing={2}>
                {items.map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <ItemCard />
                  </Grid>
                ))}
              </Grid> */}
              <PollResult />
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    background: "#e29399",
                    color: "#FFF",
                    fontWeight: "bold",
                    px: 20,
                    py: 4,
                    my: 10,
                    borderRadius: 20,
                    fontSize: 20,
                  }}
                >
                  過去の投票結果を見る
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            borderRadius: 20,
            position: "fixed",
            bottom: 20,
            right: 10,
            zIndex: 1,
            width: 100,
            height: 100,
          }}
        >
          <Link href="/faq">
            <img
              src="/chatbot.png"
              style={{ maxWidth: "100%", borderRadius: "20px" }}
            />
          </Link>
        </Box>
        <Footer />
      </>
    </>
  );
});

export default Top;
