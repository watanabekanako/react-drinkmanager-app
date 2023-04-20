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
import { Paper } from "@mui/material";
import { Link } from "@mui/material";
import Timeline from "./Timeline";
import PollCard1 from "../card/PollCard";

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
                    background: "#ea6f00",
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
                    sx={{ m: 2, color: "#595857", fontSize: "25px" }}
                  >
                    ランキング
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ m: 2, color: "#595857", fontSize: "16px" }}
                  >
                    ●●月の投票結果はこちら
                  </Typography>
                </Card>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      mt: 10,
                      pb: 10,
                      backgroundImage: "url(/crown1.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100px",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <ItemCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      mt: 10,
                      pb: 10,
                      backgroundImage: "url(/crown2.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100px",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <ItemCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      mt: 10,
                      pb: 10,
                      backgroundImage: "url(/crown3.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100px",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <ItemCard />
                </Grid>
              </Grid>
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
                  sx={{ m: 2, color: "#595857", fontSize: "25px" }}
                >
                  みんなの声
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ m: 2, color: "#595857", fontSize: "16px" }}
                >
                  ラクスパートナーズのみんなの投稿がとどいてるよ !
                </Typography>
              </Card>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={3}
                    sx={{ mt: 2, height: "auto", p: "6px", px: 2 }}
                  >
                    <Box sx={{ borderBottom: "1px solid", mx: "5px" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bolder", color: "blue" }}
                      >
                        rakuco
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography variant="body2">
                            2023/04/18 16:09
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ background: "#eae5e3", mr: "10px", px: "3px" }}
                        >
                          投稿
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          新年度を迎えるにあたって
                          中村社長から届いたコチラのメッセージ
                          もうご覧になりましたか？▼
                          https://rakuplus.jp/archives/13267
                          売上増に在籍人数の拡大、 そして
                          『日本を代表する企業への最終ステップ
                          となる国内トップ200企業！』 というビジョン これが、
                          これから3年間で実現できたら、 本当にすごいですよね！
                          rakucoもこのまま、 会社と共に成長していきたいです！
                          今年度も一緒に頑張っていきましょうね！
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Paper
                        component="form"
                        elevation={0}
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          m: "5px",
                          height: "35px",
                        }}
                      >
                        <Grid container alignItems="center" spacing={5}></Grid>
                      </Paper>
                      <Box sx={{ display: "flex", m: "10px" }}>
                        <Grid container spacing={2}></Grid>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={3}
                    sx={{ mt: 2, height: "auto", p: "6px", px: 2 }}
                  >
                    <Box sx={{ borderBottom: "1px solid", mx: "5px" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bolder", color: "blue" }}
                      >
                        rakuco
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography variant="body2">
                            2023/04/18 16:09
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ background: "#eae5e3", mr: "10px", px: "3px" }}
                        >
                          投稿
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          新年度を迎えるにあたって
                          中村社長から届いたコチラのメッセージ
                          もうご覧になりましたか？▼
                          https://rakuplus.jp/archives/13267
                          売上増に在籍人数の拡大、 そして
                          『日本を代表する企業への最終ステップ
                          となる国内トップ200企業！』 というビジョン これが、
                          これから3年間で実現できたら、 本当にすごいですよね！
                          rakucoもこのまま、 会社と共に成長していきたいです！
                          今年度も一緒に頑張っていきましょうね！
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Paper
                        component="form"
                        elevation={0}
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          m: "5px",
                          height: "35px",
                        }}
                      >
                        <Grid container alignItems="center" spacing={5}></Grid>
                      </Paper>
                      <Box sx={{ display: "flex", m: "10px" }}>
                        <Grid container spacing={2}></Grid>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    elevation={3}
                    sx={{ mt: 2, height: "auto", p: "6px", px: 2 }}
                  >
                    <Box sx={{ borderBottom: "1px solid", mx: "5px" }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bolder", color: "blue" }}
                      >
                        rakuco
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography variant="body2">
                            2023/04/18 16:09
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ background: "#eae5e3", mr: "10px", px: "3px" }}
                        >
                          投稿
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          新年度を迎えるにあたって
                          中村社長から届いたコチラのメッセージ
                          もうご覧になりましたか？▼
                          https://rakuplus.jp/archives/13267
                          売上増に在籍人数の拡大、 そして
                          『日本を代表する企業への最終ステップ
                          となる国内トップ200企業！』 というビジョン これが、
                          これから3年間で実現できたら、 本当にすごいですよね！
                          rakucoもこのまま、 会社と共に成長していきたいです！
                          今年度も一緒に頑張っていきましょうね！
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Paper
                        component="form"
                        elevation={0}
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          m: "5px",
                          height: "35px",
                        }}
                      >
                        <Grid container alignItems="center" spacing={5}></Grid>
                      </Paper>
                      <Box sx={{ display: "flex", m: "10px" }}>
                        <Grid container spacing={2}></Grid>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
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

        <></>
        <Footer />
      </>
    </>
  );
});

export default Top;
