import { FC, memo } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { PrimaryButton } from "../button/Button";

type Props = {};

const Login: FC<Props> = memo((props) => {
  return (
    <Container maxWidth="sm">
      <h1>ログイン</h1>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          placeholder="メールアドレスを入力してください"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="パスワード"
          variant="outlined"
          placeholder="8文字以上16文字以内"
          fullWidth
        />
        <PrimaryButton children="ログイン" />
      </FormControl>
      <p>会員登録はこちら</p>
    </Container>
  );
});

export default Login;
