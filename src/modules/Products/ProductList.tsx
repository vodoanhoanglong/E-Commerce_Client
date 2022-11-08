import { Box, Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ data }: any) {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;

  const DisplayProducts = data
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item: any) => <ProductItem key={item.id} data={item} />);

  const pageCount = Math.ceil(data.length / productsPerPage);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };

  return (
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
            marginTop: 1,
          }}
        >
          {DisplayProducts}
        </Box>
        <Pagination count={pageCount} page={pageNumber + 1} onChange={handleChange} color="primary" />
      </Stack>
    </Grid>
  );
}

export default ProductList;
