import { FC, memo } from "react";
import Box from "@mui/material/Box";
import { SecondaryInput } from "../input/Input";
import { PrimaryButton } from "../button/Button";
import {
  Card,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";

type Props = {};

const History: FC<Props> = memo((props) => {
  const historyData = [
    {
      id: 1,
      itemName: "コーヒー",
      consumption: 100,
      replenishment: 0,
      date: "2023-04-19",
    },
    {
      id: 2,
      itemName: "ココア",
      consumption: 0,
      replenishment: 200,
      date: "2023-04-19",
    },
    {
      id: 3,
      itemName: "紅茶",
      consumption: 0,
      replenishment: 200,
      date: "2023-04-19",
    },
  ];

  return (
    <Box>
      <Card>
        <Box sx={{ m: "30px" }}>
          <h1>在庫履歴確認</h1>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <label
              style={{ marginRight: "20px", width: "50px" }}
              htmlFor="period"
            >
              期間
            </label>
            <SecondaryInput
              type="date"
              style={{ marginRight: "5px" }}
              id="period"
            />
            <span
              style={{
                fontSize: "1.5rem",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              〜
            </span>
            <SecondaryInput type="date" style={{ marginLeft: "5px" }} />
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "space-around",
            m: "30px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "flex-end", justifyContent: "space-between" }}
            spacing={2}
          >
            <Box>
              <label style={{ marginRight: "20px" }} htmlFor="itemName">
                商品名
              </label>
              <Select placeholder="商品名" sx={{ width: "200px" }}>
                <MenuItem value="coffee">コーヒー</MenuItem>
                <MenuItem value="cocoa">ココア</MenuItem>
                <MenuItem value="tea">紅茶</MenuItem>
              </Select>
            </Box>
            <Box>
              <PrimaryButton
                children="履歴検索"
                sx={{ mr: "40px", mb: "10px" }}
              />
            </Box>
          </Stack>
        </Box>
      </Card>
      <TableContainer component={Paper} sx={{ mt: "50px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#C0C0C0", fontWeight: "bold" }}>
              <TableCell>商品名</TableCell>
              <TableCell align="right">登録日</TableCell>
              <TableCell align="right">消費数</TableCell>
              <TableCell align="right">補充数</TableCell>
              <TableCell align="right">在庫合計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData.map((history) => {
              return (
                <TableRow
                  key={history.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {history.itemName}
                  </TableCell>
                  <TableCell align="right">{history.date}</TableCell>
                  <TableCell align="right">{history.consumption}</TableCell>
                  <TableCell align="right">{history.replenishment}</TableCell>
                  <TableCell align="right">100</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", m: "20px" }}>
        <Pagination count={3} />
      </Box>
    </Box>
  );
});

export default History;
