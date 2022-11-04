import { Box, Grid, MenuItem, MenuList, Pagination, Paper, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
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
const product = [
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

function ProductFilter() {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;

  const DisplayProducts = product
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item) => <ProductList key={item.id} data={item} />);

  const pageCount = Math.ceil(product.length / productsPerPage);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper>
          <MenuList>
            <Typography variant="body1" sx={{ fontWeight: "bold", p: 2 }}>
              Danh mục sản phẩm
            </Typography>

            {MENU.map((item) => (
              <MenuItem key={item.id}>{item.name}</MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Grid>

      <Grid item xs={9}>
        <Paper>
          <Typography variant="h6" sx={{ p: 2 }}>
            Đồ điện tử
          </Typography>
        </Paper>
        <Stack spacing={1} alignItems="center">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 1,
            }}
          >
            {DisplayProducts}
          </Box>
          <Pagination count={pageCount} page={pageNumber + 1} onChange={handleChange} color="primary" />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
