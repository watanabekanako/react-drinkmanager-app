import { useParams } from "react-router-dom";
import { FC, memo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ mb: 8 }}
      >
        商品{id.itemId}
      </Typography>
      <Box
        sx={{
          display: { xs: "flex" },
          mb: 3,
        }}
      >
        <Box sx={{ mr: 10, p: 1 }}>
          <CardMedia
            component="img"
            image="/item.png"
            alt="商品名"
            sx={{ mr: 10, ml: 5 }}
          />
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
            \ 商品に関連する投稿はこちら /
          </Typography>

          <Card sx={{ display: "flex", width: "100" }}>
            <Box sx={{ display: "flex" }}>
              <CardContent sx={{ flex: "1 0 auto", width: "0.7" }}>
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
                sx={{ height: 200, p: 1, m: "auto" }}
                image="/snack.jpeg"
                alt="スナック名"
              />
            )}
          </Card>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mr: 5 }}>
        <Button
          key="item_edit_btn"
          href={`/adminhome/itemedit/${id.itemId}`}
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
    </>
  );
});

export default ItemDetail;
