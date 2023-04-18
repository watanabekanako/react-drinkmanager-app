import { FC, memo } from 'react';
import DefaultLayout from "../layout/defaultLayout";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import Button from "@mui/material/Button";
import {PrimaryButton, SecondaryButton} from "../button/Button"
// import { useNavigate } from 'react-router-dom';

type Props = {};

const AddItem: FC<Props> = memo((props) => {
      // const navigate = useNavigate();
      const onClickCansel = () => {
        const canselOrNot = window.confirm('キャンセルすると内容は破棄されますがよろしいですか？');
        if(canselOrNot) {
          // navigate(-1);
          console.log("前ページに戻る")
        } 
      }
  return (
    <>
    <DefaultLayout>
      <TextField id="itemName" label="商品名" variant="outlined" required />
      <TextareaAutosize
        aria-label="itemDescription"
        placeholder="商品説明"
        style={{ width: 200 }}
      />
      <SelectUnstyled>
        <OptionUnstyled value={1}>コーヒー/ダーク(深煎り)</OptionUnstyled>
        <OptionUnstyled value={2}>コーヒー/ダーク(中煎り)</OptionUnstyled>
        <OptionUnstyled value={3}>コーヒー/ライト(浅煎り)</OptionUnstyled>
        <OptionUnstyled value={4}>コーヒー/カフェインレス</OptionUnstyled>
        <OptionUnstyled value={5}>ティー、ココア/ティー</OptionUnstyled>
        <OptionUnstyled value={6}>ティー、ココア/その他</OptionUnstyled>
      </SelectUnstyled>

      <Button
        key="cansel_btn"
        onClick={onClickCansel}
        sx={{ my: 2, color: "black", display: "block", backgroundColor: "white" }}
      >
        キャンセル
      </Button>

      <Button
        key="confirm_btn"
        href="/adminhome"
        sx={{ my: 2, color: "black", display: "block", backgroundColor: "white" }}
      >
        確定
      </Button>

    </DefaultLayout>
    </>
  )
});

export default AddItem;
