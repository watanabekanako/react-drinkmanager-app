import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC, memo, useState } from "react";
import PollCard from "../card/PollCard";
import { Pagination } from "@material-ui/lab";
import { BorderColor } from "@mui/icons-material";
import { PrimaryButton } from "../button/Button";
// yarn add @material-ui/lab

type Props = {};

const Poll: FC<Props> = memo((props) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: any, value: any) => {
    setPage(value);
  };

  const [selectedValue, setSelectedValue] = useState("日付を選択してください");

  const handleSelectChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Paper sx={{mb:5,minWidth:1300,ml:5}}>
        <PrimaryButton
          sx={{
            backgroundColor: "#84b9cb",
            my: 4,
            p: 3,
            ml: 100,
            width: 300,
            fontSize: "20px",
            fontWeight:"bold",
            ":hover": {
              background: "#5f9ea0",
              cursor: "pointer",
            },
          }}
        >
          過去の投票結果を見る👀
        </PrimaryButton>
        <Box
          sx={{
            background: "#fff9f5",
            p: 5,
            backgroundImage: "url(/coffee.png)",
            mb: 5,
          }}
        >
          <Box
            sx={{
              fontFamily: "cursive",
              fontSize: "40px",
              textAlign: "center",
              mt: 10,
              backgroundColor: "white",
              background:
                "-webkit-repeating-linear-gradient(-45deg, #6ad1c8, #6ad1c8 2px, #fff 2px, #fff 4px)",
            }}
          >
            社内drink人気投票
          </Box>
          <Box
            sx={{
              fontFamily: "cursive",
              fontSize: "20px",
              textAlign: "center",
              mt: 5,
              backgroundColor: "white",
            }}
          >
            開催期間:4月15日〜5月15日まで
          </Box>
        </Box>
        <Card
          sx={{
            p: 1,
            mb: 5,
            backgroundColor: "#f3bf88",
            border: "2px dashed #fff ",
            boxShadow: " 0 0 0 8px #f3bf88",
            width: 800,
            m: "auto",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4, color: "#595857", fontSize: "25px" }}
          >
            一番気になる、好きなドリンクに投票しよう！
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4, color: "#595857", fontSize: "20px" }}
          >
            ※各投票、お一人につき一回まで投票が可能です
          </Typography>
        </Card>
        <PollCard />
        <Box sx={{ ml: 60, my: 5 }}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Box>
        <Box
          sx={{
            background: "#fff9f5",
            p: 5,
            backgroundImage: "url(/coffee.png)",
            mt: 5,
            mb: 5,
          }}
        >
          <Box
            sx={{
              fontFamily: "cursive",
              fontSize: "40px",
              textAlign: "center",
              mt: 10,
              backgroundColor: "white",
              background:
                "-webkit-repeating-linear-gradient(-45deg, #d4acad, #d4acad 2px, #fff 2px, #fff 4px)",
            }}
          >
            drink入れ替え投票
          </Box>
          <Box
            sx={{
              fontFamily: "cursive",
              fontSize: "20px",
              textAlign: "center",
              mt: 5,
              backgroundColor: "white",
            }}
          >
            開催期間:4月15日〜5月15日まで
          </Box>
        </Box>
        <Card
          sx={{
            p: 1,
            mb: 5,
            backgroundColor: "#f3bf88",
            border: "2px dashed #fff ",
            boxShadow: " 0 0 0 8px #f3bf88",
            width: 800,
            m: "auto",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4, color: "#595857", fontSize: "25px" }}
          >
            みんなの投票で会社に設置してある ドリンクの種類がかわるよ！
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ m: 4, color: "#595857", fontSize: "20px" }}
          >
            ※各投票、お一人につき一回まで投票が可能です
          </Typography>
        </Card>
        <PollCard />
        <Box sx={{ ml: 60, my: 5, pb: 5 }}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Box>
        <Box
          sx={{
            background: "#fff9f5",
            p: 5,
            backgroundImage: "url(/coffee.png)",
            mt: 5,
            mb: 5,
          }}
        >
          <Box
            sx={{
              fontFamily: "cursive",
              fontSize: "40px",
              textAlign: "center",
              mt: 10,
              backgroundColor: "white",
              background:
                "-webkit-repeating-linear-gradient(-45deg, #9acd32, #d4acad 2px, #fff 2px, #fff 4px)",
            }}
          >
            過去の投票結果
          </Box>
        </Box>
        <Box sx={{ ml: 85 }}>
          <Box>
          <Select
            id="condition"
            sx={{ mb: 3, backgroundColor: "#fffffc" }}
            aria-labelledby="days-label"
            defaultValue={selectedValue}
            onChange={handleSelectChange}
          >
            <MenuItem value="日付を選択してください">
              日付を選択してください
            </MenuItem>
            <MenuItem value="2023年1月">2023年1月</MenuItem>
            <MenuItem value="2023年2月">2023年2月</MenuItem>
            <MenuItem value="2023年3月">2023年3月</MenuItem>
          </Select>
          〜
          <Select
            id="condition"
            sx={{ mb: 3, backgroundColor: "#fffffc" }}
            aria-labelledby="days-label"
            defaultValue={selectedValue}
            onChange={handleSelectChange}
          >
            <MenuItem value="日付を選択してください">
              日付を選択してください
            </MenuItem>
            <MenuItem value="2023年1月">2023年1月</MenuItem>
            <MenuItem value="2023年2月">2023年2月</MenuItem>
            <MenuItem value="2023年3月">2023年3月</MenuItem>
          </Select>
          </Box>
          <Box>
            ※期間で絞り込みができます。
          </Box>
        </Box>

        <List sx={{textAlign:"center",fontSize:"25px",color:"1e90ff"}}>
          <ListItem sx={{textAlign:"center"}} button component="a" href="#">
            <ListItemText primaryTypographyProps={{ fontSize: "25px" }} primary="・1月の人気投票結果発表" />
          </ListItem>
          <ListItem sx={{textAlign:"center"}}  button component="a" href="#">
            <ListItemText primaryTypographyProps={{ fontSize: "25px" }} primary="・2月の人気投票結果発表" />
          </ListItem>
          <ListItem sx={{textAlign:"center" }}  button component="a" href="#">
            <ListItemText primaryTypographyProps={{ fontSize: "25px" }} primary="・3月の人気投票結果発表" />
          </ListItem>
        </List>
      </Paper>
    </>
  );
});

export default Poll;
