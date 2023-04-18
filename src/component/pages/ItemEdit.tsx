import DefaultLayout from "../layout/defaultLayout";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {PrimaryButton} from "../button/Button"

function ItemEdit() {
//   const navigate = useNavigate();
  const [itemName, setItemName] = useState("既存の商品名")
  const [itemDescription, setItemDescription] = useState("既存の商品名")
  const onClickCanselModal = () => {
    const canselOrNotModal = window.confirm(
      "キャンセルすると内容は破棄されますがよろしいですか？"
    );
    if (canselOrNotModal) {
        // navigate(-1);
        console.log("前ページに戻る")
    }
  };
  return (
    <DefaultLayout>
      <TextField
        id="itemName"
        label="商品名"
        variant="outlined"
        defaultValue={itemName}
        required
        onChange={(e) => setItemName(e.target.value)}
      />
      <TextareaAutosize
        aria-label="itemDescription"
        placeholder="商品説明"
        style={{ width: 200 }}
        defaultValue={itemDescription}
        required
        onChange={(e) => setItemDescription(e.target.value)}
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
        onClick={onClickCanselModal}
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
  );
}

export default ItemEdit;
