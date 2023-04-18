import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DefaultLayout from '../layout/defaultLayout';
import { PrimaryButton } from '../button/Button';

export const MainMock = () => {
  const handleClick = () => {};

  return (
    <>
      <CardMedia
        component="img"
        alt="green "
        height="500"
        image="/top.png"
        sx={{ background: '#fff' }}
      />
      <Box>
        <Paper elevation={3} />
      </Box>
      <DefaultLayout>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: '12px',
                  background: '#FF9900',
                  color: '#fff',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: '#fff' }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: '12px',
                  background: '#FF9900',
                  color: '#fff',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: '#fff' }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: '12px',
                  background: '#FF9900',
                  color: '#fff',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green "
                  height="345"
                  image="/item.jpg"
                  sx={{ background: '#fff' }}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                  sx={{ m: 4 }}
                >
                  テキストテキストテキスト
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <PrimaryButton
          onClick={handleClick}
          sx={{
            background: 'linear-gradient(95deg, #ffc97a, #ff9900)',
            my: 4,
            borderRadius: 4,
          }}
        >
          Primary Button
        </PrimaryButton>
      </DefaultLayout>
    </>
  );
};
