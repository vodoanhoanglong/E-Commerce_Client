import { Box, Grid, MenuItem, MenuList, Paper, Typography } from "@mui/material";
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

function Product() {
  return (
    <Page title="Sản phẩm">
      <Box
        sx={{
          padding: "0 24px ",
        }}
      >
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
            <ProductList />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

export default Product;
