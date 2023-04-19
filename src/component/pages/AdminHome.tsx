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
  CardHeader,
  Avatar,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddIcon from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import DefaultLayout from '../layout/defaultLayout';
import { PrimaryButton } from '../button/Button';

type Props = {};

const AdminHome: FC<Props> = memo((props) => {
  return (
    <>
      <DefaultLayout>
        <Typography sx={{ textAlign: 'center' }}>-Management-</Typography>
        <Typography sx={{ textAlign: 'center' }}>管理者画面Top</Typography>
        <Card sx={{ display: 'flex' }}>
          <Card
            sx={{
              width: 270,
              m: 2,
              pb: 0,
              boxShadow: 'none',
              border: 'solid 1px ',
              borderColor: '#bfbec5',
              textAlign: 'center',
              borderRadius: '20px',
              backgroundColor: '#FBAB7E',
              backgroundImage:
                'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
              ':hover': { opacity: 0.8 },
            }}
          >
            <CardMedia>
              <AddBoxIcon sx={{ fontSize: 200, mb: 0 }} />
            </CardMedia>
            <Box sx={{ mb: 0 }}>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: 'Noto Serif JP',
                  fontSize: '30px',
                  color: 'white',
                }}
              >
                補充在庫入力
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              width: 270,
              m: 2,
              pb: 0,
              boxShadow: 'none',
              border: 'solid 1px ',
              borderColor: '#bfbec5',
              textAlign: 'center',
              borderRadius: '20px',
              backgroundColor: '#FBAB7E',
              backgroundImage:
                'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
              ':hover': { opacity: 0.8 },
            }}
          >
            <CardMedia>
              <IndeterminateCheckBoxIcon sx={{ fontSize: 200, mb: 0 }} />
            </CardMedia>
            <Box sx={{ mb: 0 }}>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: 'Noto Serif JP',
                  fontSize: '30px',
                  color: 'white',
                }}
              >
                消費在庫入力
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              width: 270,
              m: 2,
              pb: 0,
              boxShadow: 'none',
              border: 'solid 1px ',
              borderColor: '#bfbec5',
              textAlign: 'center',
              borderRadius: '20px',
              backgroundColor: '#FBAB7E',
              backgroundImage:
                'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
              ':hover': { opacity: 0.8 },
            }}
          >
            <CardMedia>
              <ManageSearchIcon sx={{ fontSize: 200, mb: 0 }} />
            </CardMedia>
            <Box sx={{ mb: 0 }}>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: 'Noto Serif JP',
                  fontSize: '30px',
                  color: 'white',
                }}
              >
                在庫履歴
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              width: 270,
              m: 2,
              pb: 0,
              boxShadow: 'none',
              border: 'solid 1px ',
              borderColor: '#bfbec5',
              textAlign: 'center',
              borderRadius: '20px',
              backgroundColor: '#FBAB7E',
              backgroundImage:
                'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
              ':hover': { opacity: 0.8 },
            }}
          >
            <CardMedia>
              <AssignmentIcon sx={{ fontSize: 200, mb: 0 }} />
            </CardMedia>
            <Box sx={{ mb: 0 }}>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: 'Noto Serif JP',
                  fontSize: '30px',
                  color: 'white',
                }}
              >
                アンケート作成
              </Typography>
            </Box>
          </Card>
        </Card>
      </DefaultLayout>
    </>
  );
});

export default AdminHome;
