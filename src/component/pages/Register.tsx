import { FC, memo, useState } from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { PrimaryButton } from "../button/Button";
import { SecondaryInput, PrimaryInput } from "../input/Input";

type Props = {};

const Register: FC<Props> = memo((props) => {
  const [passText, setPassText] = useState(false);

  const [errorId, setErrorId] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passFocus = () => {
    setPassText(true);
  };

  const idBlur = () => {
    setErrorId(true);
  };

  const firstNameBlur = () => {
    setErrorFirstName(true);
  };
  const lastNameBlur = () => {
    setErrorLastName(true);
  };

  const mailBlur = () => {
    setErrorMail(true);
  };

  const passBlur = () => {
    setErrorPass(true);
  };

  const confirmPassBlur = () => {
    setErrorConfirmPass(true);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "left" }}>
        <Box sx={{ textAlign: "center" }}>
          <h1>会員登録</h1>
          <p>*は必須入力項目です</p>
        </Box>

        <SecondaryInput
          type="text"
          label="社員ID*"
          placeholder="例）0000"
          helperText={errorId ? "社員IDを入力してください" : ""}
          error={errorId}
          onBlur={idBlur}
        />
        <Stack direction="row" sx={{ alignItems: "flex-end" }} spacing={2}>
          <Box sx={{ flexGrow: 1 }}>
            <SecondaryInput
              type="text"
              label="姓*"
              placeholder="例）ラクス*"
              helperText={errorFirstName ? "姓を入力してください" : ""}
              error={errorFirstName}
              onBlur={firstNameBlur}
              style={{ height: "100%" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <SecondaryInput
              type="text"
              label="名*"
              placeholder="例）太郎"
              helperText={errorLastName ? "名を入力してください" : ""}
              error={errorLastName}
              onBlur={lastNameBlur}
              style={{ height: "100%" }}
            />
          </Box>
        </Stack>
        <PrimaryInput
          type="text"
          label="メールアドレス*"
          placeholder="例）example@example.com"
          helperText={errorMail ? "メールアドレスを入力してください" : ""}
          error={errorMail}
          onBlur={mailBlur}
        />
        <PrimaryInput
          type="password"
          label="パスワード*"
          placeholder="パスワード"
          onFocus={passFocus}
          onBlur={passBlur}
          helperText={
            errorPass
              ? "パスワードを入力してください"
              : "半角英字大文字、小文字、数字を8文字以上16文字以内で入力してください"
          }
          error={errorPass}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
        <PrimaryInput
          type="password"
          label="確認用パスワード*"
          placeholder="確認用パスワード"
          helperText={
            errorConfirmPass ? "確認用パスワードを入力してください" : ""
          }
          error={errorConfirmPass}
          onBlur={confirmPassBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ textAlign: "center" }}>
          <PrimaryButton children="登録" />
        </Box>
      </Box>
    </Container>
  );
});

export default Register;
