import DefaultLayout from '../layout/defaultLayout';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from '../button/Button';
import { CardActionArea } from '@mui/material';

function ItemDetails() {
  // const navigate = useNavigate();
  const onClickItemDelete = () => {
    const deleteOrNot = window.confirm('本当に商品を削除しますか？');
    if (deleteOrNot) {
      // navigate('/home');
    }
  };
  return (
    <DefaultLayout>
      <Box
        sx={{
          display: { xs: 'flex' },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                sx={{ m: 5 }}
              >
                商品名
              </Typography>
            </CardContent>
            <CardMedia component="img" image="/item.jpg" alt="商品名" />
          </CardActionArea>
        </Card>
        <Box>
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            sx={{ m: 4 }}
          >
            商品説明商品説明商品説明商品説明商品説明商品説明
          </Typography>

          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4 }}
          >
            こちらの商品に関連する投稿はこちら
          </Typography>

          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1" component="div">
                  投稿内容
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="/snack.jpeg"
              alt="スナック名"
            />
          </Card>
        </Box>
      </Box>

      <Button
        key="item_edit_btn"
        href="/itemedit"
        sx={{
          my: 2,
          color: 'black',
          display: 'block',
          backgroundColor: 'white',
        }}
      >
        商品を編集
      </Button>

      <Button
        key="item_delete_btn"
        onClick={onClickItemDelete}
        sx={{
          my: 2,
          color: 'black',
          display: 'block',
          backgroundColor: 'white',
        }}
      >
        商品を削除
      </Button>
    </DefaultLayout>
  );
}

export default ItemDetails;
