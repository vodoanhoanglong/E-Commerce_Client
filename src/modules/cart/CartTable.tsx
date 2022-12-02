import { Table, TableBody } from "@mui/material";
import { CartProduct } from "~/models";
import { CartTableItem } from "./components";
import CartTableHeader from "./components/CartTableHeader";

interface ICartTable {
  cart: CartProduct[];
}

export interface ITableHeadCell {
  display: string | "";
  align?: "left" | "center" | "right" | "justify" | "inherit";
}

const tableHeadCols: ITableHeadCell[] = [
  { display: "Sản phẩm", align: "left" },
  { display: "Đơn giá", align: "left" },
  { display: "Số lượng", align: "left" },
  { display: "Thành tiền", align: "right" },
  { display: "", align: "right" },
];

function CartTable({ cart }: ICartTable) {
  return (
    <Table
      sx={{
        minWidth: 720,
      }}
    >
      <CartTableHeader titles={tableHeadCols} />
      <TableBody>
        {cart.map((item) => (
          <CartTableItem key={item.product.id} item={item} />
        ))}
      </TableBody>
    </Table>
  );
}

export default CartTable;
