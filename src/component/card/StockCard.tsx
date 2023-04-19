import React, { useCallback, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { PrimaryButton } from '../button/Button';
import { Box, TextField } from '@mui/material';
import Consumption from '../pages/Consumption';

const StockCard = () => {
  const data = [
    'コーヒー',
    'コーヒー',
    'コーヒー',
    'コーヒー',
    'コーヒー',
    'コーヒー',
    'コーヒー',
    'コーヒー',
  ];

  const [errorMessage, setErrorMessage] =
    useState('消費在庫数を入力してください。');

  const [confirmd, setConfirmd] = useState('false');

  const onClickConfirm = useCallback(() => {
    setConfirmd(confirmd!);
    console.log(confirmd);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          mt: 5,
        }}
      >
        {data.map((drink) => {
          return (
            <Card
              sx={{
                width: 270,
                m: 2,
                boxShadow: 'none',
                border: 'solid 1px ',
                borderColor: '#bfbec5',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="商品画像"
                  height="140"
                  width="140"
                  image="/item.jpg"
                  title="商品名"
                  sx={{
                    display: 'block',
                    width: 200,
                    height: 200,
                    objectFit: 'cover',
                    m: 'auto',
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{
                      textAlign: 'center',
                      fontSize: '16px',
                      borderBottom: 'double',
                      fontFamily: 'Georgia',
                    }}
                  >
                    LAVAZZA INTENSO
                  </Typography>
                </CardContent>
              </CardActionArea>
              <TextField
                sx={{ width: '250px', margin: '10px' }}
                disabled={false}
                id="outlined-number"
                label={errorMessage}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputProps: { min: 0, max: 999 },
                  onBlur: (e) => {
                    const inputValue = parseInt(e.target.value, 10); // 第二引数に基数を指定する
                    if (inputValue > 999) {
                      alert('999以下の数値を入力してください。');
                      e.target.value = '999'; // 文字列型であるため、値を文字列で設定する必要がある
                    }
                  },
                }}
              />

              <PrimaryButton
                sx={{
                  background: '#e29399',
                  width: 200,
                  mb: 2,
                  boxShadow: 'none',
                  border: 'double',
                  ml: 4,
                  ':hover': {
                    background: '#e29399',
                    cursor: 'pointer',
                  },
                }}
                onClick={onClickConfirm}
              >
                確認しました
              </PrimaryButton>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default StockCard;
