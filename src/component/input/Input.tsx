import React from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";

const PrimaryInput = ({ label, placeHolder }: any) => {
  return (
    <>
      ①
      <TextField
        id="outlined-basic"
        label="メールアドレス"
        variant="outlined"
        placeholder="メールアドレスを入力してください"
        margin="normal"
        fullWidth
      />
      ②
      <label>
        <p>
          メールアドレス<span>※必須</span>
        </p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="メールアドレスを入力してください"
          fullWidth
        />
        <p>✅〜文字以上</p>
        <p>✅記号不可</p>
      </label>
      ③
      <TextField
        name="taskName"
        label="メールアドレス"
        helperText="記号不可"
        margin="normal"
        placeholder="メールアドレスを入力してください"
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      ④
      <TextField
        name="taskName"
        label="メールアドレス"
        helperText="40文字以内で入力してください"
        margin="normal"
        placeholder="メールアドレスを入力してください"
        fullWidth
        InputLabelProps={{ shrink: true }}
        error
      />
    </>
  );
};

const SecondaryInput = ({ label, placeHolder }: any) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeHolder}
    />
  );
};

export { PrimaryInput, SecondaryInput };
