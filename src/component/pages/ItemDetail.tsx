import { useParams } from "react-router-dom";
import { FC, memo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {ActiveRedButton,
  InactiveButton,
  ActiveBlueButton,
  ActiveOrangeButton,
  ActiveBeigeButton,
  ActivePinkButton,
  ActiveDarkBlueButton,} from "../button/Button"

type Props = {};

const ItemDetail: FC<Props> = memo((props) => {
  const id = useParams();
  const [postImg, setPostImg] = useState("/********");
  const navigate = useNavigate();
  const onClickItemDelete = () => {
    const deleteOrNot = window.confirm("本当に商品を削除しますか？");
    if (deleteOrNot) {
      navigate("/home");
    }
  };

  const testEvent = () => {
    console.log("テスト")
  }
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ mb: 8 }}
      >
        商品{id.id}
      </Typography>
      <Box
        sx={{
          display: { xs: "flex" },
          mb: 3,
        }}
      >
        <Box>
        <Box sx={{ mr: 10, p: 1, display: "flex", ml: 5, alignItems: "center", width: 600 }}>
          <p style={{fontSize: "50px" }}>&lt;</p>
          <CardMedia
            component="img"
            image="/item.png"
            alt="商品画像"
          />
          <p style={{fontSize: "50px" }}>&gt;</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
        <p>●</p><p>○</p><p>○</p>
        </Box>
        </Box>
        
        <Box sx={{ mr: 5, width: 500 }}>
          <Typography variant="body1" component="p" sx={{ p: 1 }}>
            商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。
            商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。
            商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。商品説明が入ります。
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            textAlign="center"
            sx={{ p: 1, fontWeight: 600 }}
          >
            \ 商品に関連するタイムラインはこちら /
          </Typography>

          <Card
            sx={{
              p: 1,
              backgroundColor: "#ffdead",
              border: "2px dashed #fff ",
              boxShadow: " 0 0 0 8px #ffdead",
              // width: "100%",
              maxWidth: 500,
              minWidth: 100,
              display: "flex",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  width: "0.7",
                  overflowY: "scroll",
                  height: 200,
                }}
              >
                <Typography variant="body2" component="p">
                  投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。
                  投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。
                  投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。投稿内容が入ります。
                  投稿内容が入ります。投稿内容
                </Typography>
              </CardContent>
            </Box>
            {postImg && (
              <CardMedia
                component="img"
                sx={{
                  // height: 200,
                  p: 1,
                  m: "auto",
                  maxWidth: 300,
                  minWidth: 80,
                }}
                image="/snack.jpeg"
                alt="スナック名"
              />
            )}
          </Card>
          <a
            href="/home/timeline"
            style={{ marginTop: "10px", display: "block", textAlign: "end" }}
          >
            タイムラインへ移動
          </a>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mr: 5 }}>
        <Button
          key="item_edit_btn"
          href={`/adminhome/itemedit/${id.id}`}
          variant="contained"
          sx={{
            my: 2,
            color: "white",
            display: "block",
            backgroundColor: "#EA6F00",
            fontWeight: 500,
            ml: "auto",
          }}
        >
          商品を編集
        </Button>

        <Button
          key="item_delete_btn"
          onClick={onClickItemDelete}
          variant="contained"
          sx={{
            my: 2,
            color: "white",
            display: "block",
            backgroundColor: "#b30000",
            fontWeight: 500,
            ml: 3,
          }}
        >
          商品を削除
        </Button>
  
      </Box>
      <div style={{marginBottom: "100px"}}></div>
      <InactiveButton>非活性ボタン</InactiveButton>
  <ActiveBlueButton event={testEvent}>青ボタン</ActiveBlueButton>
  <ActiveOrangeButton event={testEvent}>オレンジボタン</ActiveOrangeButton>
  <ActiveBeigeButton event={testEvent}>ベージュボタン</ActiveBeigeButton>
  <ActivePinkButton event={testEvent}>ピンクボタン</ActivePinkButton>
  <ActiveDarkBlueButton event={testEvent}>ネイビーボタン</ActiveDarkBlueButton>
  <ActiveRedButton event={testEvent}>赤ボタン</ActiveRedButton>
    </>
  );
});

export default ItemDetail;
