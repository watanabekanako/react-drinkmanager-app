import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const PrimaryInput = ({
  type,
  label,
  placeHolder,
  helperText,
  errorInput,
  ...props
}: any) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        type={type}
        label={label}
        variant="outlined"
        placeholder={placeHolder}
        margin="normal"
        helperText={helperText}
        fullWidth
        error={errorInput}
        {...props}
      />
    </>
  );
};

const SecondaryInput = ({
  type,
  label,
  placeHolder,
  helperText,
  errorInput,
  ...props
}: any) => {
  return (
    <TextField
      id="outlined-basic"
      type={type}
      label={label}
      variant="outlined"
      placeholder={placeHolder}
      margin="normal"
      helperText={helperText}
      error={errorInput}
      {...props}
    />
  );
};

export { PrimaryInput, SecondaryInput };
