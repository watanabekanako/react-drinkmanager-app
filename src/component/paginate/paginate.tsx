import React from "react";
import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
const Paginate = ({ count }: any) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={count}
          sx={{ m: "auto", mt: 50, textAlign: "center" }}
        />
      </Box>
    </>
  );
};

export default Paginate;
