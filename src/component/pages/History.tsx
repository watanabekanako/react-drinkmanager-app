import { FC, memo } from "react";
import DefaultLayout from "../layout/defaultLayout";
import Box from "@mui/material/Box";
import { SecondaryInput } from "../input/Input";
import { PrimaryButton } from "../button/Button";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {};

const History: FC<Props> = memo((props) => {
  const historyData = [
    {
      id: 1,
      itemId: 1,
      quantity: 100,
      day: "2023-04-19",
    },
  ];

  return (
    <Box>
      <Box sx={{ backgroundColor: "pink" }}>
        <Box>
          <h1>在庫履歴確認</h1>
          <label>
            期間
            <SecondaryInput type="date" />
            <SecondaryInput type="date" />
          </label>
        </Box>
        <Box>
          <label>
            商品名
            <SecondaryInput />
          </label>
        </Box>
        <PrimaryButton children="履歴検索" />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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
                    {history.id}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default History;
