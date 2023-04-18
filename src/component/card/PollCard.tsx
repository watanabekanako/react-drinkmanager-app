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
      <Card sx={{ maxWidth: 250, m: 2 }}>
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
              sx={{ textAlign: "center", fontSize: "15px" }}
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
        <CardActions>
          <PrimaryButton
            sx={{
              background: "linear-gradient(95deg, #ffc97a, #ff9900)",
              my: 4,
              borderRadius: 4,
              m: "auto",
              px: 2,
            }}
          >
            この商品に投票
          </PrimaryButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 250,
          m: 2,
          boxShadow: "none",
          borderStyle: "solid",
          borderColor: "#ccc",
        }}
      >
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
                fontFamily:"Impact"
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
        <CardActions>
          <PrimaryButton
            sx={{
              background: "#C89F81",
              my: 4,
              m: "auto",
              px: 2,
              boxShadow: "none",
            ':hover': {
              background: "#8d6449",
              cursor: "pointer"
            }
            }}
          >
            🔎詳細を見る
          </PrimaryButton>
          <PrimaryButton
            sx={{
              background: "#FE889A",
              my: 4,
              m: "auto",
              px: 2,
              boxShadow: "none",
            }}
          >
            + 投票する
          </PrimaryButton>
        </CardActions>
      </Card>
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
              sx={{ textAlign: "center", fontSize: "13px",backgroundColor:"#946c45",width:80,p:"3px",fontFamily:"HiraMinProN-W3",color:"#fff", border:"double" }}
            >☕️coffee
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
                fontFamily:"Georgia"
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
            ml:3,
            ':hover': {
              background: "#8d6449",
              cursor: "pointer"
            }
          }}
        >
          🔎詳細を見る
        </PrimaryButton>
        <PrimaryButton
          sx={{
            background: "#6c2735",
            width: 200,
            mb: 2,
            boxShadow: "none",
            border:"double",
            ml:3,
            ':hover': {
              background: "#6c2735",
              cursor: "pointer"
            }
          }}
        >
          + 投票する
        </PrimaryButton>
      </Card>
      <Card
        sx={{
          maxWidth: 250,
          m: 2,
          boxShadow: "none",
          borderStyle: "solid",
          borderColor: "#ccc",
        }}
      >
        <CardActionArea>
        <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{ textAlign: "center", fontSize: "13px",backgroundColor:"#946c45",width:80,p:"3px",fontFamily:"HiraMinProN-W3",color:"#fff", border:"dotted 1.5px #f6e5cc" }}
            >☕️coffee
            </Typography>
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
                fontFamily:"HiraMinProN-W3"
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
            ml:3,
            ':hover': {
              background: "#8d6449",
              cursor: "pointer"
            }
          }}
        >
          🔎詳細を見る
        </PrimaryButton>
        <PrimaryButton
          sx={{
            background: "#f3981d",
            width: 200,
            mb: 2,
            boxShadow: "none",
            border:"double",
            ml:3,
            ':hover': {
              background: "#FFA500",
              cursor: "pointer"
            }
          }}
        >
          + 投票する
        </PrimaryButton>
      </Card>
    </>
  );
};

export default PollCard;
