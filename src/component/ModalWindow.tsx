import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "5px solid #ffc97a",
  borderImage: "linear-gradient(95deg, #ffc97a, #ff9900)",
  borderImageSlice: "1",
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow(props: any) {
  // モーダルの表示非表示のstate
  const [open, setOpen] = React.useState(false);
  // モーダル表示処理
  const handleOpen = () => setOpen(true);
  // モーダル非表示処理
  const handleClose = () => setOpen(false);
  // モーダル内のタイトル、内容、モーダル表示ボタン、完了ボタン名、完了処理
  const {
    title,
    content,
    modalOpenButton,
    completeButtonName,
    completeAction,
  } = props;

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          background: "linear-gradient(95deg, #ffc97a, #ff9900)",
          my: 4,
          borderRadius: 4,
        }}
      >
        {modalOpenButton}
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              {title}
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              align="center"
            >
              {content}
            </Typography>
            <Grid container>
              <Grid
                xs
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    completeAction();
                    handleClose();
                  }}
                  sx={[
                    {
                      "&:hover": {
                        background: "#ffa500",
                      },
                    },
                    {
                      background: "#ffa500",
                      my: 4,
                      borderRadius: 4,
                    },
                  ]}
                >
                  {completeButtonName}
                </Button>
              </Grid>
              <Grid
                xs
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={[
                    {
                      "&:hover": {
                        background: "#deb887",
                      },
                    },
                    {
                      background: "#deb887",
                      my: 4,
                      borderRadius: 4,
                    },
                  ]}
                >
                  キャンセル
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
