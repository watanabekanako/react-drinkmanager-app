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
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  InactiveButton,
  ActiveBlueButton,
  ActiveOrangeButton,
  ActiveDarkBlueButton,
  ActiveRedButton,
} from "../button/Button";

type Props = {};

const ItemEdit: FC<Props> = memo((props) => {
  const id = useParams();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState(`既存の商品${id.id}`);
  const [itemDescription, setItemDescription] = useState(
    `既存の商品${id.id}の説明`
  );
  const [itemCategory, setItemCategory] = useState(3);
  const [itemImages, setItemImages] = useState([
    { id: 1, value: "/item.png" },
    { id: 2, value: "/item.png" },
  ]);
  const onClickCanselModal = () => {
    const canselOrNotModal = window.confirm(
      "キャンセルすると内容は破棄されますがよろしいですか？"
    );
    if (canselOrNotModal) {
      navigate(-1);
      console.log("前ページに戻る");
    }
  };

  // 画像の削除機能
  const onClickDeleteItemImage = (imageId: number) => {
    const updatedItemImages = [...itemImages];
    updatedItemImages.splice(imageId - 1, 1);
    setItemImages(updatedItemImages);
  };

  const testFunc = () => {
    console.log("テスト");
  };

  const onClickChangeItemData = () => {
    navigate("/adominhome")
  }

  return (
    <>
      <Paper sx={{ p: 5, width: "80%", m: "auto" }}>
        <Typography
          variant="h5"
          component="div"
          textAlign="center"
          sx={{ mb: 8 }}
        >
          商品編集
        </Typography>
        <TextField
          id="itemName"
          label="商品名"
          variant="outlined"
          defaultValue={itemName}
          required
          onChange={(e) => setItemName(e.target.value)}
          sx={{ width: 400, mb: 5 }}
          inputProps={{ maxLength: 20 }}
          placeholder="字数制限は全角20文字です。"
        />

        <Typography variant="body1" component="p" sx={{ mb: 1 }}>
          商品画像 * 最大3枚まで
        </Typography>

        {/* ファイル選択 */}
        <Box sx={{ display: "flex", mb: 5, alignItems: "center" }}>
          {itemImages.map((item, index) => {
            return (
              <>
                <Box sx={{ width: 300 }} key={index}>
                  <CardMedia
                    component="img"
                    image={item.value}
                    alt="商品画像"
                    sx={{ m: "auto", width: 200 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <label htmlFor={item.id.toString()}>
                    <Button
                        style={{
                          background: "none",
                          border: "none",
                          margin: "15px 1px",
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#000",
                          fontFamily: "'M PLUS 1p', sans-serif",
                        }}
                        onClick={testFunc}
                      >
                        変更
                      </Button>
                    </label>
                    <Button
                    key={item.id.toString()}
                      onClick={() => onClickDeleteItemImage(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        margin: "15px 1px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#ff0000",
                        fontFamily: "'M PLUS 1p', sans-serif",
                      }}
                    >
                      削除
                    </Button>
                  </div>
                </Box>
              </>
            );
          })}
          {itemImages.length <= 3 && (
            <Box sx={{ width: 300,textAlign:"center"}}>
              <button style={{ background: "none", border: "none", margin: "100px 0" }}>
                <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
              </button>
            </Box>
          )}
        </Box>

        <TextField
          multiline
          aria-label="itemDescription"
          label="商品説明"
          sx={{ width: "100%", mb: 5 }}
          inputProps={{ maxLength: 200 }}
          defaultValue={itemDescription}
          required
          onChange={(e) => setItemDescription(e.target.value)}
          rows={5}
          placeholder="字数制限は全角255文字です。"
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

        {itemName && itemDescription && itemImages.length > 0 ? (
          <></>
        ) : (
          <>
            <Typography
              variant="body1"
              component="div"
              textAlign="center"
              sx={{ mb: 1, mt: 3, color: "red" }}
            >
              全ての項目を入力、または選択して下さい
            </Typography>
          </>
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ActiveBlueButton
            event={onClickCanselModal}
            sxStyle={{
              my: 2,
              mr: 3,
              py: "5px",
              fontSize: "16px",
            }}
          >
            キャンセル
          </ActiveBlueButton>
          {itemName && itemDescription && itemImages.length > 0 ? (
            <ActiveOrangeButton
              event={onClickChangeItemData}
              sxStyle={{
                my: 2,
                mr: 3,
                py: "5px",
                fontSize: "16px",
              }}
            >
              確定
            </ActiveOrangeButton>
          ) : (
            <InactiveButton
            sxStyle={{
              my: 2,
              mr: 3,
              py: "5px",
              fontSize: "16px",
            }}
            >
              確定
            </InactiveButton>
          )}
        </Box>
      </Paper>
    </>
  );
});

export default ItemEdit;
