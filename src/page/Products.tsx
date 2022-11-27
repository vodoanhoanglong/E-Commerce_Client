import { useQuery } from "@apollo/client";
import { Box, CircularProgress, MenuItem, MenuList, Paper, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Page } from "~/components";
import { GET_PRODUCT } from "~/graphql/queries";
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

const LoadingWrapperStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCT);
  const [filter, setFilter] = useState("Đồ điện tử");
  const handleFilter = (item: string) => {
    setFilter(item);
  };
  if (error) {
    console.error(error.message);
  }

  return (
    <Page title="Sản phẩm">
      {loading ? (
        <LoadingWrapperStyle>
          <CircularProgress />
        </LoadingWrapperStyle>
      ) : (
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
            <ProductList data={data?.getProducts.data} filter={filter} />
          </Stack>
        </Box>
      )}
    </Page>
  );
}

export default Products;
