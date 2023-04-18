import { useParams } from "react-router-dom";
import { FC, memo } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";

type Props = {};

const ItemEdit: FC<Props> = memo((props) => {
  const id = useParams();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("既存の商品名");
  const [itemDescription, setItemDescription] = useState("既存の商品説明");
  const [itemCategory, setItemCategory] = useState(3);
  const onClickCanselModal = () => {
    const canselOrNotModal = window.confirm(
      "キャンセルすると内容は破棄されますがよろしいですか？"
    );
    if (canselOrNotModal) {
      navigate(-1);
      console.log("前ページに戻る");
    }
  };
  return (
    <>
      <TextField
        id="itemName"
        label="商品名"
        variant="outlined"
        defaultValue={itemName}
        required
        onChange={(e) => setItemName(e.target.value)}
        sx={{ width: 360, mb: 5 }}
        inputProps={{ maxLength: 20 }}
      />
      <TextField
        multiline
        aria-label="itemDescription"
        label="商品説明"
        sx={{ width: 700, mb: 5 }}
        inputProps={{ maxLength: 200 }}
        defaultValue={itemDescription}
        required
        onChange={(e) => setItemDescription(e.target.value)}
        rows={5}
      />

      <InputLabel id="itemCategoryField" required>
        商品カテゴリー
      </InputLabel>
      <Select
        labelId="itemCategoryField"
        id="itemCategoryField"
        value={itemCategory}
        label="商品カテゴリー"
        onChange={(e) => {
          setItemCategory(Number(e.target.value));
        }}
        sx={{ mb: 5 }}
      >
        <MenuItem value={1}>コーヒー/ダーク(深煎り)</MenuItem>
        <MenuItem value={2}>コーヒー/ダーク(中煎り)</MenuItem>
        <MenuItem value={3}>コーヒー/ライト(浅煎り)</MenuItem>
        <MenuItem value={4}>コーヒー/カフェインレス</MenuItem>
        <MenuItem value={5}>ティー、ココア/ティー</MenuItem>
        <MenuItem value={6}>ティー、ココア/その他</MenuItem>
      </Select>

      <Box sx={{ display: "flex" }}>
        <Button
          key="canselBtn"
          onClick={onClickCanselModal}
          variant="contained"
          sx={{
            my: 2,
            color: "white",
            display: "block",
            backgroundColor: "gray",
            mr: 3,
          }}
        >
          キャンセル
        </Button>
        {(itemName && itemDescription) ? (
          <Button
            key="confirmBtn"
            href="/adminhome"
            variant="contained"
            sx={{
              my: 2,
              color: "black",
              display: "block",
              backgroundColor: "#EA6F00",
            }}
          >
            確定
          </Button>
        ) : (
          <Button
            key="unavailableConfirmBtn"
            variant="contained"
            disabled
            sx={{
              my: 2,
              color: "black",
              display: "block",
              backgroundColor: "#EA6F00",
            }}
          >
            確定
          </Button>
        )}
      </Box>
    </>
  );
});

export default ItemEdit;
