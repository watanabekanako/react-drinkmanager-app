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
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type Props = {};

const AddItem: FC<Props> = memo((props) => {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState(0);
  const [itemImages, setItemImages] = useState<{ id: number; value: string }[]>(
    []
  );
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

  // プレビュー機能
  const addItemImage = (event: any) => {
    const file = event.target.files?.[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const newImage = { id: itemImages.length + 1, value: reader.result as string };
    setItemImages([...itemImages, newImage]);
  };
  };

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ mb: 8 }}
      >
        商品追加
      </Typography>
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

      <Typography variant="body1" component="p" sx={{ mb: 1 }}>
        商品画像 * 最大3枚まで
      </Typography>

      {/* ファイル選択 */}
      <Box sx={{ display: "flex", mb: 5, width: 900 }}>
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
                <div style={{ display: "flex" }}>
                  <label htmlFor={item.id.toString()}>
                    <Button
                      key="item_edit_btn"
                      variant="contained"
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        backgroundColor: "#EA6F00",
                        fontWeight: 500,
                        mr: 1,
                      }}
                    >
                      変更
                    </Button>
                  </label>
                  <Button
                    key={item.id.toString()}
                    variant="contained"
                    onClick={() => onClickDeleteItemImage(item.id)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      backgroundColor: "gray",
                      fontWeight: 500,
                    }}
                  >
                    削除
                  </Button>
                </div>
              </Box>
            </>
          );
        })}
        {itemImages.length < 3 && (
          <Box sx={{ width: 300 }}>
            <button style={{ background: "none", border: "none" }}>
              <label htmlFor="itemImageFeild">
                <Typography variant="body2" component="p" sx={{ mb: 1, mt: 5 }}>
                  追加
                </Typography>
                <AddCircleOutlineIcon sx={{ fontSize: 30, mb: 5 }} />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="itemImageFeild"
                onChange={addItemImage}
              />
            </button>
          </Box>
        )}
      </Box>

      <TextField
        multiline
        aria-label="itemDescription"
        label="商品説明"
        sx={{ width: 900, mb: 5 }}
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
        placeholder="商品カテゴリーを選択して下さい"
        onChange={(e) => {
          setItemCategory(Number(e.target.value));
        }}
        sx={{ mb: 5 }}
      >
        <MenuItem value={0}>商品カテゴリーを選択して下さい</MenuItem>
        <MenuItem value={1}>コーヒー/ダーク(深煎り)</MenuItem>
        <MenuItem value={2}>コーヒー/ダーク(中煎り)</MenuItem>
        <MenuItem value={3}>コーヒー/ライト(浅煎り)</MenuItem>
        <MenuItem value={4}>コーヒー/カフェインレス</MenuItem>
        <MenuItem value={5}>ティー、ココア/ティー</MenuItem>
        <MenuItem value={6}>ティー、ココア/その他</MenuItem>
      </Select>

      {itemName && itemDescription && itemCategory !== 0 ? (
        <></>
      ) : (
        <>
          <Typography
            variant="body1"
            component="div"
            sx={{ mb: 1, mt: 3, color: "red" }}
          >
            全ての項目を入力、または選択して下さい
          </Typography>
        </>
      )}

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
        {itemName && itemDescription && itemCategory !== 0 ? (
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
          <>
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
          </>
        )}
      </Box>
    </>
  );
});

export default AddItem;
