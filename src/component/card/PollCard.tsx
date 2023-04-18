import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { PrimaryButton } from "../button/Button";
import { Button, makeStyles } from "@mui/material";
import { BorderColor } from "@mui/icons-material";

const PollCard = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          m: 2,
          boxShadow: "none",
          borderStyle: "solid 1.5px",
          borderColor: "#ccc",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            textAlign: "center",
            fontSize: "13px",
            backgroundColor: "#946c45",
            width: 80,
            p: "3px",
            fontFamily: "HiraMinProN-W3",
            color: "#fff",
            border: "double",
          }}
        >
          ☕️coffee
        </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="商品画像"
            height="140"
            width="140"
            image="/item.jpg"
            title="商品名"
            sx={{
              display: "block",
              width: 200,
              height: 200,
              objectFit: "cover",
              m: "auto",
            }}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{
                textAlign: "center",
                fontSize: "13px",
                backgroundColor: "#a4c1d7",
                width: 80,
                p: "3px",
                fontFamily: "HiraMinProN-W3",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              ☕️社内あり
            </Typography>
            <Typography
              gutterBottom
              sx={{
                textAlign: "center",
                fontSize: "16px",
                borderBottom: "double",
                fontFamily: "Georgia",
              }}
            >
              LAVAZZA INTENSO
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ textAlign: "center", fontSize: "13px" }}
            >
              スモーキーで香ばしい力強いフレーバーのダークローストコーヒー。
            </Typography>
          </CardContent>
        </CardActionArea>
        <PrimaryButton
          sx={{
            background: "#C89F81",
            mb: 1,
            width: 200,
            boxShadow: "none",
            ml: 3,
            border: "double",
            ":hover": {
              background: "#8d6449",
              cursor: "pointer",
            },
          }}
        >
          🔎詳細を見る
        </PrimaryButton>
        <PrimaryButton
          sx={{
            background: "#e29399",
            width: 200,
            mb: 2,
            boxShadow: "none",
            border: "double",
            ml: 3,
            ":hover": {
              background: "#e29399",
              cursor: "pointer",
            },
          }}
        >
          + 投票する
        </PrimaryButton>
      </Card>
    </>
  );
};

export default PollCard;
