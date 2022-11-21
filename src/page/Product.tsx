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
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "1",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "2",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "3",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "4",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "5",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "6",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "7",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "8",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "9",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "10",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "11",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "12",
    name: "Tủ lạnh Samsung Inverter 208 lít RT19M300BGS/SV - Chỉ giao HCM",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/3a/7a/74/248fc945469dac7ad47b94fc36319cc0.jpg.webp",
    price: 349000,
    qtyStock: 1,
  },
  {
    id: "13",
    name: "Google Tivi Coocaa 4K 65 Inch - Model 65Y72 - Hàng Chính Hãng",
    description: "20cm, 24cm",
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/05/60/a7/994d9723dbd05f5736f1632dd1c96e64.jpg.webp",
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
