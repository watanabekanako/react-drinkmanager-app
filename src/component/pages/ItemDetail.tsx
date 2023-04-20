import { useParams } from "react-router-dom";
import { FC, memo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { ActiveRedButton, ActiveDarkBlueButton } from "../button/Button";

type Props = {};

const ItemDetail: FC<Props> = memo((props) => {
  const id = useParams();
  const [postImg, setPostImg] = useState('/********');
  const navigate = useNavigate();
  const onClickItemDelete = () => {
    const deleteOrNot = window.confirm('本当に商品を削除しますか？');
    if (deleteOrNot) {
      navigate('/home');
    }
  };

  const onClickItemEdit = () => {
    navigate(`/adminhome/itemedit/${id.id}`);
  };

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
          mb: 10,
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              mr: 15,
              p: 1,
              display: "flex",
              ml: 10,
              alignItems: "center",
              width: 400,
            }}
          >
            <p style={{ fontSize: "50px" }}>&lt;</p>
            <CardMedia component="img" image="/item.png" alt="商品画像" />
            <p style={{ fontSize: "50px" }}>&gt;</p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <p>●</p>
            <p>○</p>
            <p>○</p>
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
              backgroundColor: '#ffdead',
              border: '2px dashed #fff ',
              boxShadow: ' 0 0 0 8px #ffdead',
              // width: "100%",
              maxWidth: 500,
              minWidth: 100,
              display: 'flex',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <CardContent
                sx={{
                  flex: '1 0 auto',
                  width: '0.7',
                  overflowY: 'scroll',
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
                  m: 'auto',
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
            style={{ marginTop: '10px', display: 'block', textAlign: 'end' }}
          >
            タイムラインへ移動
          </a>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mr: 5 }}>
        <ActiveDarkBlueButton
          event={onClickItemEdit}
          sxStyle={{
            my: 2,
            ml: "auto",
          }}
        >
          商品を編集
        </ActiveDarkBlueButton>

        <ActiveRedButton
          event={onClickItemDelete}
          variant="contained"
          sxStyle={{
            my: 2,
            ml: 3,
          }}
        >
          商品を削除
        </ActiveRedButton>
      </Box>
    </>
  );
});

export default ItemDetail;
