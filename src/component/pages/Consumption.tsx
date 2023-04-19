import { Paper, Typography } from '@mui/material';
import { FC, memo } from 'react';
import StockCard from '../card/StockCard';

type Props = {};

const Consumption: FC<Props> = memo((props) => {
  return (
    <Paper sx={{ mb: 5, width: '100%', minWidth: 500, maxWidth: 1200 }}>
      <Typography
        sx={{
          paddingTop: '50px',
          textAlign: 'center',
          fontFamily: 'Georgia',
          fontSize: '50px',
        }}
      >
        消費在庫入力
      </Typography>

      <StockCard />
    </Paper>
  );
});

export default Consumption;
