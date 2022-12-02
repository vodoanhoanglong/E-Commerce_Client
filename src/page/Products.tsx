import { useQuery } from "@apollo/client";
import { Box, CircularProgress, styled } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Page } from "~/components";
import { GET_PRODUCT_CATEGORY } from "~/graphql/queries";
import ProductFilter from "~/modules/Products/ProductFilter";
import ProductList from "~/modules/Products/ProductList";

const LoadingWrapperStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function Products() {
  const [pageNumber, setPageNumber] = useState(0);
  const [filterId, setFilterId] = useState("watch");
  const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORY, {
    variables: {
      categoryAliases: filterId,
      page: pageNumber,
      size: 10,
    },
  });

  const [filterName, setFilterName] = useState(data?.getCategory[0].name);
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
        <Box sx={{ marginInline: 10, marginBlock: 3 }}>
          <Stack direction="row">
            <ProductFilter
              data={data?.getCategory}
              setFilterName={setFilterName}
              setFilterId={setFilterId}
              setPageNumber={setPageNumber}
            />
            <ProductList
              data={data?.getProducts.data}
              pagination={data?.getProducts.pagination}
              filterName={filterName}
              setPageNumber={setPageNumber}
            />
          </Stack>
        </Box>
      )}
    </Page>
  );
}

export default Products;
