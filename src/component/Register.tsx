import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import { PrimaryButton } from "../component/button/Button";
import { PrimaryInput, SecondaryInput } from "../component/input/Input";

const Register = () => {
  return (
    <Container maxWidth="sm">
      <h1>会員登録</h1>
      <FormControl>
        <SecondaryInput label="社員ID" placeHolder="(例)0000" />
        <Stack direction="row" spacing={2}>
          <SecondaryInput label="姓" placeHolder="(例)ラクス" />
          <SecondaryInput label="名" placeHolder="(例)太郎" />
        </Stack>
        <PrimaryInput
          label="メールアドレス"
          placeHolder="(例)example@example.com"
        />
        <PrimaryInput label="パスワード" placeHolder="8文字以上16文字以内" />
        <span>✅8文字以上16文字以内</span>
        <span>✅半角英字大文字、小文字、数字の3種類を1つ必ず使用</span>
        <PrimaryInput
          label="確認用パスワード"
          placeHolder="8文字以上16文字以内"
        />
        <span>✅8文字以上16文字以内</span>
        <span>✅半角英字大文字、小文字、数字の3種類を1つ必ず使用</span>
        <PrimaryButton children="会員登録" />
      </FormControl>
    </Container>
  );
};

export default Register;
