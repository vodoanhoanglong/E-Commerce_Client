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
  { display: "Product", align: "left" },
  { display: "Price", align: "left" },
  { display: "Quantity", align: "left" },
  { display: "Total", align: "right" },
  { display: "", align: "left" },
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
