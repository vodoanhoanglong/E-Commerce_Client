import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Dislay } from "~/layouts/components/CustomBox";

import { currencyFormat } from "~/utils/formats";

function CartProductDetail() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", width: "85%" }}>
      <Dislay>
        <Box>
          <Typography variant="h3" textAlign="center" sx={{ mb: 2, mt: 2 }}>
            Giỏ hàng
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="right">Giá</TableCell>
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Thành tiền</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Áo hoodie tay dài
                  </TableCell>
                  <TableCell align="right">{currencyFormat(400000)}đ</TableCell>
                  <TableCell align="right">
                    <Button>-</Button>1<Button>+</Button>
                  </TableCell>
                  <TableCell align="right">{currencyFormat(400000)}đ</TableCell>
                  <TableCell align="right">
                    <Button>Hủy chọn</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Dislay>
    </Box>
  );
}

export default CartProductDetail;
