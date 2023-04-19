import { FC, memo } from "react";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

type Props = {};

const Faq: FC<Props> = memo((props) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ background: "#fff" }}>
        <Box sx={{ pb: 40 }}>
          <Paper sx={{ backgroundColor: "#ffffff", py: 4 }}>
            {/* Add your content here */}
            コーヒーメーカの使用方法が知りたいです。
          </Paper>
          <Paper sx={{ backgroundColor: "#ffffff", py: 4, my: 4 }}>
            {/* Add your content here */}
            コーヒーメーカの使用方法が知りたいです。
          </Paper>
          <Paper sx={{ backgroundColor: "#ffffff", py: 4, my: 4 }}>
            {/* Add your content here */}
            コーヒーメーカの使用方法が知りたいです。
          </Paper>
        </Box>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ my: 4, width: "80%", backgroundColor: "#fff" }}
            placeholder="質問内容を入力してください"
          />
          <Button
            sx={{
              background: "#8FB8D6",
              color: "#FFF",
              fontWeight: "bold",
              marginLeft: 2,
              width: 200,
              my: 4,
            }}
          >
            送信する
          </Button>
        </Box>
      </Container>
    </>
  );
});

export default Faq;
