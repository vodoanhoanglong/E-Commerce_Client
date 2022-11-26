import { Box, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Page } from "~/components";
import ProductList from "~/modules/Products/ProductList";

const MENU = [
  {
    id: 0,
    name: "Đồ điện tử",
  },
  {
    id: 1,
    name: "Thời trang",
  },
  {
    id: 2,
    name: "Thực phẩm",
  },
  {
    id: 3,
    name: "Sách",
  },
];

// data test
const products = [
  {
    id: "0",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: [
      {
        id: 0,
        smallImage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/f6/36/2b/ba93fabe1f231c2d06217a3ad6df6009.jpg.webp",
      },
      {
        id: 1,
        smallImage: "https://th.bing.com/th/id/OIP.20quCuemboLsLE-i_VYbUgHaHa?w=188&h=189&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      },
      {
        id: 2,
        smallImage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/f6/36/2b/ba93fabe1f231c2d06217a3ad6df6009.jpg.webp",
      },
      {
        id: 3,
        smallImage: "https://th.bing.com/th/id/OIP.iayH4j6-HyC3qQNRNVwXzgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      },
    ],
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "1",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: [
      {
        id: 0,
        smallImage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
      },
      {
        id: 1,
        smallImage: "https://th.bing.com/th/id/OIP.vNvw6_kWoLBuaBgZE8ycMwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      },
      {
        id: 2,
        smallImage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/f6/36/2b/ba93fabe1f231c2d06217a3ad6df6009.jpg.webp",
      },
      {
        id: 3,
        smallImage: "https://th.bing.com/th/id/OIP.iayH4j6-HyC3qQNRNVwXzgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      },
    ],
    price: 349000,
    qtyStock: 1,
  },
];

function Product() {
  const [filter, setFilter] = useState("Đồ điện tử");
  const handleFilter = (item: string) => {
    setFilter(item);
  };
  return (
    <Page title="Sản phẩm">
      <Box sx={{ marginInline: 10, mt: 3 }}>
        <Stack direction="row">
          <Paper sx={{ minWidth: 270, maxWidth: 275, height: "20%", mr: 1 }}>
            <MenuList>
              <Typography variant="body1" sx={{ fontWeight: "bold", p: 2 }}>
                Danh mục sản phẩm
              </Typography>

              {MENU.map((item) => (
                <MenuItem key={item.id} onClick={() => handleFilter(item.name)}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>

          <ProductList data={products} filter={filter} />
        </Stack>
      </Box>
    </Page>
  );
}

export default Product;
