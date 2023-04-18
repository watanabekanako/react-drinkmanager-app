import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PrimaryButton } from "./button/Button";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "10px solid #ffc97a",
  borderImage: "linear-gradient(95deg, #ffc97a, #ff9900)",
  borderImageSlice: "1",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { title, content } = props;

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Typography id="transition-modal-title" variant="h6" component="h2" align="center">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} align="center">
              {content}
            </Typography>
            <Grid container>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              <PrimaryButton
                onClick={() => console.log("1")}
                sx={{
                  background: "linear-gradient(95deg, #ffc97a, #ff9900)",
                  my: 4,
                  borderRadius: 4,
                }}
              >
                Primary Button
              </PrimaryButton>
              </Grid>
              <Grid xs display="flex" justifyContent="center" alignItems="center">
              <PrimaryButton
                onClick={handleClose}
                sx={{
                  background: "linear-gradient(95deg, #ffc97a, #ff9900)",
                  my: 4,
                  borderRadius: 4,
                }}
              >
                キャンセル
              </PrimaryButton>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
