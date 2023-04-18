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
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../button/Button";
const AccordionMenu = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {/* アコーディオンメニュー */}
      <div>
        <Typography variant="h5" textAlign="center">
          - PRODUCTS -
        </Typography>
        <Typography variant="h6" textAlign="center">
          商品一覧
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            コーヒー
          </AccordionSummary>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            Second Accordion
          </AccordionSummary>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            Second Accordion
          </AccordionSummary>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            コーヒー
          </AccordionSummary>

          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            ダーク（深煎り）
          </AccordionSummary>
        </Accordion>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            すべての商品
          </AccordionSummary>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            Second Accordion
          </AccordionSummary>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            Second Accordion
          </AccordionSummary>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionMenu;
