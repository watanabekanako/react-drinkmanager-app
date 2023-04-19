import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const PrimaryInput = ({
  type,
  label,
  placeHolder,
  helperText,
  errorInput,
  InputProps,
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
        InputProps={InputProps}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {placeHolder === "パスワード" ? "👁" : "a"}
            </IconButton>
          </InputAdornment>
        }
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
      sx={{ minWidth: 0, flexGrow: 1 }}
      {...props}
    />
  );
};

export { PrimaryInput, SecondaryInput };
