import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";

const AccordionMenu = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {/* アコーディオンメニュー */}
      <div>
        <Box className="productTtl">
          <Typography variant="h5" textAlign="center" sx={{ color: "#ea6f00" }}>
            - PRODUCTS -
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ mb: 4, color: "#ea6f00" }}
          >
            商品一覧
          </Typography>
        </Box>
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
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderTop: "2px dashed #ea6f00",
                // borderBottom: "2px dashed #ea6f00",
              }
            }
          >
            ダーク（深煎り）
          </AccordionSummary>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderBottom: "2px dashed #ea6f00",
              }
            }
          >
            ミディアム（中煎り）
          </AccordionSummary>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderBottom: "2px dashed #ea6f00",
              }
            }
          >
            ライト（浅煎り）
          </AccordionSummary>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderBottom: "2px dashed #ea6f00",
              }
            }
          >
            カフェインレス
          </AccordionSummary>
          <Link href="/search">
            <AccordionSummary id="panel2a-header">
              すべてのコーヒー
            </AccordionSummary>
          </Link>
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
            ティー・ココア
          </AccordionSummary>

          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderBottom: "2px dashed #ea6f00",
                // borderTop: "2px dashed #ea6f00",
              }
            }
          >
            ティー
          </AccordionSummary>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={
              {
                // borderBottom: "2px dashed #ea6f00",
              }
            }
          >
            その他
          </AccordionSummary>
        </Accordion>

        <Accordion sx={{ m: 0 }}>
          <Link href="/home/search">
            <AccordionSummary id="panel1a-header">
              すべての商品
            </AccordionSummary>
          </Link>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionMenu;
