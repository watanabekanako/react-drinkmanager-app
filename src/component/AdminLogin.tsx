import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { PrimaryButton } from "./button/Button";

const AdminLogin = () => {
  return (
    <Container maxWidth="sm">
      <h1>管理者ログイン</h1>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          placeholder="メールアドレスを入力してください"
        />
        <TextField
          id="outlined-basic"
          label="パスワード"
          variant="outlined"
          placeholder="8文字以上16文字以内"
        />
        <PrimaryButton children="ログイン" />
      </FormControl>
    </Container>
  );
};

export default AdminLogin;
