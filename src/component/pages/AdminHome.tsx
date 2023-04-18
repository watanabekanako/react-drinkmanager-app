import { FC, memo } from 'react';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddIcon from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';

import DefaultLayout from '../layout/defaultLayout';
import { PrimaryButton } from '../button/Button';

type Props = {};

const AdminHome: FC<Props> = memo((props) => {
  return (
    <DefaultLayout>
      <h1>管理者ホーム画面です。</h1>
      <Box>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: '12px',
            background: '#FF9900',
            color: '#fff',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4 }}
          >
            →在庫確認画面
          </Typography>
        </Card>
      </Box>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <AddIcon />
            <CardContent>
              <Typography variant="h5" component="div">
                在庫消費量入力
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
        <CardActions>
          <Button>在庫消費入力画面へ</Button>
        </CardActions>
      </Card>

      <Button variant="outlined" startIcon={<IndeterminateCheckBoxIcon />}>
        消費在庫入力
      </Button>
      <Button variant="outlined" startIcon={<AddBoxIcon />}>
        補充在庫入力
      </Button>

      <Inventory2Icon />
      <HistorySharpIcon />
      <AddIcon />
      <IndeterminateCheckBoxIcon />
      <AddBoxIcon />
      <PrimaryButton>在庫履歴</PrimaryButton>
    </DefaultLayout>
  );
});

export default AdminHome;
