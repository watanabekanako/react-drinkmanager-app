import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { PrimaryButton } from "../button/Button";
import { Box} from "@mui/material";


const PollCard = () => {

  const data=["コーヒー",]

  return (
    <>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",mt:5}}>
      {data.map((drink)=>{
        return(
      <Card
        sx={{
          width: 270,
          m: 2,
          boxShadow: "none",
          border: "solid 1px ",
          borderColor:"#bfbec5"
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            textAlign: "center",
            fontSize: "13px",
            backgroundColor: "#d2691e",
            width: 80,
            p: "3px",
            fontFamily: "HiraMinProN-W3",
            color: "#fff",
            border: "double",
          }}
        >
          ☕️tea
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
            ml: 4,
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
disabled
          sx={{
            background: "#e17b34",
            width: 200,
            mb: 2,
            boxShadow: "none",
            ml: 4,
            color:"#000",
            ":hover": {
              background: "#e17b34",
              cursor: "pointer",
            },
          }}
        >
          ✔️この商品に<br/>投票しました!!
        </PrimaryButton>
      </Card>
        )
      })}
    </Box>
    </>
  );
};

export default PollCard;
