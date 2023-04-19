import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { FC, memo, useState } from "react";
import PollCard from "../card/PollCard";
import { Pagination } from "@material-ui/lab";
import { BorderColor } from "@mui/icons-material";
import { PrimaryButton } from "../button/Button";
import PollDone from "../card/PollDone";
import PollDone2 from "../card/PollDone2";
import ItemCard from "../card/ItemCard";
import { PrimaryInput, SecondaryInput } from "../input/Input";
import AddPollCard from "../card/AddPollCard";
import ModalWindow from "../ModalWindow";
import PollCard1 from "../card/PollCard1";

type Props = {};

const Poll: FC<Props> = memo((props) => {
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const handleClick = () => {
    setFlag(true);
    console.log(flag);
  };
  console.log(flag);

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const [selectedValue, setSelectedValue] = useState("日付を選択してください");

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Paper sx={{ mb: 5, width: "100%", minWidth: 500, maxWidth: 1200 }}>
        <Box
          sx={{
            fontFamily: "cursive",
            fontSize: "30px",
            textAlign: "center",
            pt: 10,
            backgroundColor: "white",
            
          }}
        >
          アンケート追加画面
        </Box>
        <Box sx={{ textAlign: "left", ml: 6 }}>
          <TextField
            label="アンケート名"
            variant="outlined"
            sx={{ width: "500px", my: 5 }}
          />
          <TextField
            label="アンケート詳細"
            variant="outlined"
            sx={{ width: "700px", mb: 5 }}
          />
          <Box>
          <InputLabel id="brand-label"  sx={{mt:2,fontWeight:"bold"}}>期間</InputLabel>
            <TextField
              type="date"
              variant="standard"
              sx={{ width: "200px", mb: 5 }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              〜
            </span>
            <TextField
              type="date"
              variant="standard"
              sx={{ width: "200px", mb: 5 }}
            />
          </Box>
        </Box>
        <Box sx={{mt:5}}>＊アンケートに追加する商品を追加してください</Box>
        <ModalWindow
          title="新規商品登録"
          content={
            <form onSubmit={handleSubmit}>
              <TextField
                label="商品名"
                variant="outlined"
                sx={{ width: "700px", mb: 5 }}
              />
              <br />
              <TextField
                label="商品詳細"
                variant="outlined"
                sx={{ width: "700px", mb: 5 }}
              />
              <br />
              <label>
                <input type="file" name="img" />
              </label>
              <br />
            </form>
          }
          modalOpenButton="+ アンケートに新しい商品を登録する"
          completeButtonName="test"
          completeAction={() => {
            console.log("test");
          }}
        />
        <AddPollCard />
        <Box sx={{ ml: 50, my: 5, pb: 5 }}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Box>
        <Box sx={{ textAlign: "center", my: 3, pb: 3 }}>
          <PrimaryButton
            sx={{
              background: "#bcbace",
              mb: 1,
              width: 200,
              boxShadow: "none",
              ml: 4,
              border: "double",
              mr: 2,
              ":hover": {
                background: "#bcbace",
                cursor: "pointer",
              },
            }}
          >
            追加
          </PrimaryButton>
        </Box>
      </Paper>
    </>
  );
});

export default Poll;
