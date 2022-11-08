import { Grid, Pagination, Paper, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ data }: any) {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const DisplayProducts = data
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item: any) => <ProductItem key={item.id} data={item} />);

  const pageCount = Math.ceil(data.length / productsPerPage);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };

  return (
    <Grid container spacing={1} columns={{ xs: 8 }}>
      <Grid item xs={8}>
        <Paper>
          <Typography variant="h6" sx={{ p: 2 }}>
            Đồ điện tử
          </Typography>
        </Paper>
      </Grid>
      {DisplayProducts}
      <Grid item xs={8}>
        <Pagination
          count={pageCount}
          page={pageNumber + 1}
          onChange={handleChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
}

export default ProductList;
