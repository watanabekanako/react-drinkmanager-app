import { FC, memo, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { PrimaryButton } from "../button/Button";
import { PrimaryInput } from "../input/Input";
import { Link } from "react-router-dom";

type Props = {};

const Login: FC<Props> = memo((props) => {
  const [passText, setPassText] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const passFocus = () => {
    setPassText(true);
  };
  const mailBlur = () => {
    setErrorMail(true);
  };

  const passBlur = () => {
    setErrorPass(true);
  };
  return (
    <Container maxWidth="sm" sx={{ alignItems: "center" }}>
      <Box sx={{ textAlign: "center" }}>
        <h1>ログイン</h1>
        <PrimaryInput
          type="text"
          label="メールアドレス"
          placeHolder="例）example@example.com"
          helperText={errorMail ? "メールアドレスを入力してください" : ""}
          errorInput={errorMail}
          onBlur={mailBlur}
          InputProps={{
            readOnly: true,
          }}
        />
        <PrimaryInput
          type="text"
          label="パスワード"
          placeHolder=""
          required
          helperText={
            errorPass
              ? "パスワードを入力してください"
              : "半角英字大文字、小文字、数字を8文字以上16文字以内で入力してください"
          }
          errorInput={errorPass}
          onFocus={passFocus}
          onBlur={passBlur}
        />
        {passText ? (
          // <Box sx={{ textAlign: "left", listStyle: "none" }}>
          //   <ul>
          //     <li>✅8文字以上16文字以内</li>
          //     <li>✅半角英字大文字、小文字、数字の3種類を1つ必ず使用</li>
          //   </ul>
          // </Box>
          <List>
            <ListItem>
              <Stack>
                <ListItemText primary="✅8文字以上16文字以内" />
                <ListItemText primary="✅半角英字大文字、小文字、数字の3種類を1つ必ず使用" />
              </Stack>
            </ListItem>
          </List>
        ) : (
          ""
        )}

        <PrimaryButton children="ログイン" />
        <Box sx={{ margin: "10px" }}>
          <Link to="/register">会員登録はこちら</Link>
        </Box>
      </Box>
    </Container>
  );
});

export default Login;
