import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { PrimaryButton } from "../button/Button";
import { Box} from "@mui/material";


const PollCard = () => {

  const data=["コーヒー","コーヒー","コーヒー","コーヒー","コーヒー","コーヒー","コーヒー","コーヒー",]

  return (
    <>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",mt:5,}}>
  {data.map((drink)=>{
    return(
      <Card
        sx={{
          position: "relative",
          width: 270,
          m: 2,
          boxShadow: "none",
          border: "solid 1px ",
          borderColor:"#bfbec5",
          backgroundColor: "#f5f5f5"
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            textAlign: "center",
            fontSize: "13px",
            backgroundColor: "#c49a6a",
            width: 80,
            p: "3px",
            fontFamily: "HiraMinProN-W3",
            color: "#fff",
            border: "double",
          }}
        >
          ☕️cocoa
        </Typography>
        <CardActionArea>
          <Box sx={{ position: "relative", width: 300, height: 300 }}>
  <img
    src="/item.jpg"
    alt="example"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      bgcolor: "rgba(0, 0, 0, 0.5)",
    }}
  />
</Box>

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
            background: "#c0c0c0",
            width: 200,
            mb: 2,
            boxShadow: "none",
            ml: 4,
            color:"#000",
            ":hover": {
              background: "#c0c0c0",
              cursor: "pointer",
            },
          }}
        >
          ✔️投票済み
        </PrimaryButton>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
          }}
        >
          投票は終了しました
        </Typography>
      </Card>
    )
  })}
</Box>

    </>
  );
};

export default PollCard;
