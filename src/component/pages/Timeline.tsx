import { FC, memo } from "react";
import ModalWindow from "../ModalWindow";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { CachedOutlined, Search } from "@mui/icons-material";

type Props = {};

const Timeline: FC<Props> = memo((props) => {
  return (
    <Paper sx={{p: "20px"}}>
      <Grid
        container
        sx={{ flexGrow: 1, borderBottom: 1, py: "10px", alignItems: "center" }}
      >
        <Grid item xs={4} sx={{}}>
          <Typography variant="h4">タイムライン</Typography>
        </Grid>
        <Grid item xs={5}>
          <Box component="form">
            <TextField
              label="検索"
              variant="outlined"
              sx={{ p: "0" }}
              size="small"
            />
          <IconButton
            sx={{
              background: "#89c3eb",
              color: "white",
              ml: "10px",
              alignItems: "center",
            }}
          >
            <Search />
          </IconButton>
          </Box>
        </Grid>
        <Grid item xs={2}>
          すべて
        </Grid>
        <Grid item xs={1} sx={{ p: "none" }}>
          <IconButton
            sx={{ background: "#89c3eb", color: "white", borderRadius: "none" }}
          >
            <CachedOutlined />
          </IconButton>
        </Grid>
      </Grid>
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
