import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../button/Button";
import AccordionMenu from "../accordion/AccordionMenu";
import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({ children }: { children: any }) {
  return (
    <React.Fragment>
      <Header />

      <Container maxWidth="xl" sx={{ my: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <AccordionMenu />
            {/* 検索ボタン */}
            <Box sx={{ my: 10 }}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ my: 4, width: "100%", backgroundColor: "#fff" }}
              />

              <PrimaryButton
                sx={{
                  background: "linear-gradient(95deg, #ffc97a, #ff9900)",
                  mb: 4,
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                検索する
              </PrimaryButton>
            </Box>
          </Grid>

          <Grid item xs={9}>
            {/* <Item>{children} </Item> */}
            {children}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
export default DefaultLayout;
