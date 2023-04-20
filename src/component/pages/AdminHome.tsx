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
  Paper,
  Stack,
  Input,
  TextField,
  Hidden,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Inventory2Icon from '@mui/icons-material/Inventory2';
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
        <Paper
          sx={{
            width: '100%',
            minWidth: 500,
            maxWidth: 1200,
            minHeight: 600,
            padding: '50px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Georgia',
              fontSize: '50px',
              color: '#024098',
              mt: '50px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            -管理者MENU-
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            flexWrap="wrap"
            marginTop="110px"
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#024098',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid',
                backgroundImage:
                  'linear-gradient(to bottom, #024098 70%, #fff 30%)', // ここで別の色を指定してください
                '&:hover': {
                  opacity: 0.8,
                  cursor: 'pointer',
                },
              }}
            >
              <AddBoxIcon
                sx={{
                  width: '130px',
                  height: '130px',
                  color: 'white',
                  paddingTop: '10px',
                }}
              />
              <Typography
                fontFamily="Source Han Sans"
                sx={{ color: 'black', fontSize: '20px', marginTop: '10px' }}
              >
                補充在庫入力
              </Typography>
            </Box>
            <Box
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#024098',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid',
                backgroundImage:
                  'linear-gradient(to bottom, #024098 70%, #fff 30%)', // ここで別の色を指定してください
                '&:hover': {
                  opacity: 0.8,
                  cursor: 'pointer',
                },
              }}
            >
              <IndeterminateCheckBoxIcon
                sx={{
                  width: '130px',
                  height: '130px',
                  color: 'white',
                  paddingTop: '10px',
                }}
              />
              <Typography
                fontFamily="Source Han Sans"
                sx={{ color: 'black', fontSize: '20px', marginTop: '10px' }}
              >
                消費在庫入力
              </Typography>
            </Box>
            <Box
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#024098',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid',
                backgroundImage:
                  'linear-gradient(to bottom, #024098 70%, #fff 30%)', // ここで別の色を指定してください
                '&:hover': {
                  opacity: 0.8,
                  cursor: 'pointer',
                },
              }}
            >
              <ManageSearchIcon
                sx={{
                  width: '130px',
                  height: '130px',
                  color: 'white',
                  paddingTop: '10px',
                }}
              />
              <Typography
                fontFamily="Source Han Sans"
                sx={{ color: 'black', fontSize: '20px', marginTop: '10px' }}
              >
                在庫履歴
              </Typography>
            </Box>
            <Box
              sx={{
                width: 200,
                height: 200,
                backgroundColor: '#024098',
                textAlign: 'center',
                borderRadius: '20px',
                border: '1px solid',
                backgroundImage:
                  'linear-gradient(to bottom, #024098 70%, #fff 30%)', // ここで別の色を指定してください
                '&:hover': {
                  opacity: 0.8,
                  cursor: 'pointer',
                },
              }}
            >
              <AssignmentIcon
                sx={{
                  width: '130px',
                  height: '130px',
                  color: 'white',
                  paddingTop: '10px',
                }}
              />
              <Typography
                fontFamily="Source Han Sans"
                sx={{ color: 'black', fontSize: '20px', marginTop: '10px' }}
              >
                補充在庫入力
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </DefaultLayout>
    </>
  );
});

export default AdminHome;

// {        <Card
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   }}
// >
//   <Box sx={{ flexDirection: 'column' }}>
//     <Typography
//       sx={{
//         textAlign: 'center',
//         fontFamily: 'Georgia',
//         fontSize: '50px',
//         color: '#ea6f00',
//         mt: '20px',
//       }}
//     >
//       -管理者画面TOP-
//     </Typography>
//     <hr style={{ height: '100%', margin: '10px 0' }} />
//   </Box>
//   <Box
//     sx={{
//       display: 'flex',
//       flexDirection: 'row',
//       justyfyContent: 'center',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//       width: '100%',
//       transform: 'translateX(120px)',
//       pb: '100px',
//     }}
//   >
//     <Card
//       sx={{
//         margin: '0 auto',
//         width: 400,
//         height: 400,
//         m: 2,
//         pb: 0,
//         boxShadow: 'none',
//         border: 'solid 1px ',
//         borderColor: '#bfbec5',
//         textAlign: 'center',
//         borderRadius: '20px',
//         backgroundColor: '#FBAB7E',
//         backgroundImage:
//           'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
//         ':hover': { opacity: 0.8 },
//       }}
//     >
//       <CardMedia>
//         <AddBoxIcon sx={{ fontSize: 300, mb: 0 }} />
//       </CardMedia>
//       <Box sx={{ mb: 0 }}>
//         <Typography
//           gutterBottom
//           sx={{
//             fontFamily: 'Noto Serif JP',
//             fontSize: '30px',
//             color: 'white',
//           }}
//         >
//           補充在庫入力
//         </Typography>
//       </Box>
//     </Card>
//     <Card
//       sx={{
//         margin: '0 auto',

//         width: 400,
//         height: 400,
//         m: 2,
//         pb: 0,
//         boxShadow: 'none',
//         border: 'solid 1px ',
//         borderColor: '#bfbec5',
//         textAlign: 'center',
//         borderRadius: '20px',
//         backgroundColor: '#FBAB7E',
//         backgroundImage:
//           'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
//         ':hover': { opacity: 0.8 },
//       }}
//     >
//       <CardMedia>
//         <IndeterminateCheckBoxIcon sx={{ fontSize: 300, mb: 0 }} />
//       </CardMedia>
//       <Box sx={{ mb: 0 }}>
//         <Typography
//           gutterBottom
//           sx={{
//             fontFamily: 'Noto Serif JP',
//             fontSize: '30px',
//             color: 'white',
//           }}
//         >
//           消費在庫入力
//         </Typography>
//       </Box>
//     </Card>
//     <Card
//       sx={{
//         width: 400,
//         height: 400,
//         m: 2,
//         pb: 0,
//         boxShadow: 'none',
//         border: 'solid 1px ',
//         borderColor: '#bfbec5',
//         textAlign: 'center',
//         borderRadius: '20px',
//         backgroundColor: '#FBAB7E',
//         backgroundImage:
//           'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
//         ':hover': { opacity: 0.8 },
//       }}
//     >
//       <CardMedia>
//         <ManageSearchIcon sx={{ fontSize: 300, mb: 0 }} />
//       </CardMedia>
//       <Box sx={{ mb: 0 }}>
//         <Typography
//           gutterBottom
//           sx={{
//             fontFamily: 'Noto Serif JP',
//             fontSize: '30px',
//             color: 'white',
//           }}
//         >
//           在庫履歴
//         </Typography>
//       </Box>
//     </Card>
//     <Card
//       sx={{
//         width: 400,
//         height: 400,
//         m: 2,
//         pb: 0,
//         boxShadow: 'none',
//         border: 'solid 1px ',
//         borderColor: '#bfbec5',
//         textAlign: 'center',
//         borderRadius: '20px',
//         backgroundColor: '#FBAB7E',
//         backgroundImage:
//           'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
//         ':hover': { opacity: 0.8 },
//       }}
//     >
//       <CardMedia>
//         <AssignmentIcon sx={{ fontSize: 300, mb: 0 }} />
//       </CardMedia>
//       <Box sx={{ mb: 0 }}>
//         <Typography
//           gutterBottom
//           sx={{
//             fontFamily: 'Noto Serif JP',
//             fontSize: '30px',
//             color: 'white',
//           }}
//         >
//           アンケート作成
//         </Typography>
//       </Box>
//     </Card>
//   </Box>
// </Card>
// }
