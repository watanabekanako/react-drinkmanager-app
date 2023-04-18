import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const PollCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 250,m:2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="商品画像"
            height="140"
            width="140"
            image="/item.jpg"
            title="商品名"
            sx={{display:"block",width:200,height:200,objectFit:"cover",m:"auto"}}
          />
          <CardContent>
            <Typography gutterBottom sx={{textAlign:"center",fontSize:"15px",backgroundColor: "#ffc97a",borderRadius:"20"}}>
            LAVAZZA INTENSO
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p"  sx={{textAlign:"center",fontSize:"13px"}}>
            スモーキーで香ばしい力強いフレーバーのダークローストコーヒー。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PollCard;