import { Box, Paper } from '@mui/material';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import PollCard1 from '../card/PollCard1';

type Props = {};

const PollResult: FC<Props> = memo((props) => {
  const { id } = useParams();

  return (
    <>
<Paper >
  <Box sx={{fontSize:"30px",textAlign:"center",pt:5}}>3月人気投票入れ替え戦結果</Box>
  <Box sx={{textAlign:"center"}}>たくさんのご投票ありがとうございました✨</Box>
  <Box sx={{textAlign:"center"}}>来月からOOOO商品に入れ替わります✨</Box>
  <Box sx={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
    <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown1.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
    <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
      <PollCard1/>
    </Box>
      <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown2.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
        <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
      <PollCard1/>
        </Box>
      <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown3.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
        <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
  <PollCard1/>
        </Box>
    <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown1.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
    <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
      <PollCard1/>
    </Box>
      <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown2.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
        <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
      <PollCard1/>
        </Box>
      <Box>
  <Box sx={{mt:10,pb:10,backgroundImage: "url(/crown3.png)"  ,  backgroundRepeat: "no-repeat",
        backgroundSize:"100px",
        backgroundPosition: "center",}}></Box>
        <Box sx={{fontSize:"30px",textAlign:"center"}}>OOO票</Box>
  <PollCard1/>
        </Box>
        </Box>
</Paper>
    </>
  );
});

export default PollResult;
