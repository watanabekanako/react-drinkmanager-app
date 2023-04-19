import { FC, memo } from "react";
import ModalWindow from "../ModalWindow";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CachedOutlined, Search } from "@mui/icons-material";

type Props = {};

const Timeline: FC<Props> = memo((props) => {
  return (
    <Paper sx={{ p: "20px", background: "#eae5e3" }}>
      <Grid
        container
        sx={{
          flexGrow: 1,
          borderBottom: 1,
          py: "10px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Grid item xs={4}>
          <Typography variant="h4">タイムライン</Typography>
        </Grid>
        <Grid item xs={5}>
          <Box component="form">
            <TextField
              error={true}
              label="検索"
              variant="standard"
              sx={{ p: "0" }}
              size="small"
              helperText="20文字以内で入力してください"
            />
            <IconButton
              sx={{
                background: "#89c3eb",
                color: "white",
                ml: "10px",
                alignItems: "center",
              }}
              type="submit"
            >
              <Search />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Select
            size="small"
            fullWidth
            defaultValue="すべて"
            sx={{ border: "none" }}
          >
            <MenuItem key="1" value="すべて">
              すべて
            </MenuItem>
            <MenuItem key="2" value="投稿">
              投稿
            </MenuItem>
            <MenuItem key="3" value="お知らせ">
              お知らせ
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={1} sx={{ p: "none" }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              sx={{
                background: "#89c3eb",
                color: "white",
                borderRadius: "none",
              }}
            >
              <CachedOutlined />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="投稿"
          variant="standard"
          sx={{ p: "0" }}
          size="small"
        />
        <Select
          size="small"
          variant="standard"
          fullWidth
          defaultValue="商品を選択"
          sx={[
            {
              "&:hover": {
                border: "0px",
              },
            },
            { color: "orange", border: "none" },
          ]}
        >
          <MenuItem key="1" value="商品を選択" disabled>
            商品を選択
          </MenuItem>
          <MenuItem key="2" value="ライト">
            ライト
          </MenuItem>
          <MenuItem key="3" value="ダーク">
            ダーク
          </MenuItem>
          <MenuItem key="4" value="ココア">
            ココア
          </MenuItem>
        </Select>
        <InputLabel
          htmlFor="addImage"
          sx={[{
            "&:hover": {
              cursor: "pointer",
              borderBottom: "2px solid"
            },
          }, {borderBottom: "2px solid white"}]}
        >
          <Typography variant="body1">画像を追加</Typography>
        </InputLabel>
        <TextField
          id="addImage"
          fullWidth
          type="file"
          sx={{ p: "0", display: "none" }}
          size="small"
        />
      </Paper>
      <Box sx={{ml:5}}>
      <ModalWindow
        title="test modal"
        content="test modal description"
        modalOpenButton="open"
        completeButtonName="test"
        completeAction={() => {
          console.log("test");
        }}
      />
      </Box>
    </Paper>
  );
});

export default Timeline;
