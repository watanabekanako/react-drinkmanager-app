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
import { Title } from '@mui/icons-material';

type Props = {};

const AdminHome: FC<Props> = memo((props) => {
  return (
    <>
      <DefaultLayout>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ flexDirection: 'column' }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'Georgia',
                fontSize: '50px',
              }}
            >
              -Management-
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>管理者画面TOP</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justyfyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '100%',
              transform: 'translateX(120px)',
              pb: '100px',
            }}
          >
            <Card
              sx={{
                margin: '0 auto',
                width: 400,
                height: 400,
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
                <AddBoxIcon sx={{ fontSize: 300, mb: 0 }} />
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
                margin: '0 auto',

                width: 400,
                height: 400,
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
                <IndeterminateCheckBoxIcon sx={{ fontSize: 300, mb: 0 }} />
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
                width: 400,
                height: 400,
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
                <ManageSearchIcon sx={{ fontSize: 300, mb: 0 }} />
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
                width: 400,
                height: 400,
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
                <AssignmentIcon sx={{ fontSize: 300, mb: 0 }} />
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
          </Box>
        </Card>
      </DefaultLayout>
    </>
  );
});

export default AdminHome;
