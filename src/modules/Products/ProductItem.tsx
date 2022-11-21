import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Product } from "~/models";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";

interface ProductItemProps {
  data: Product;
}

function ProductItem({ data }: ProductItemProps) {
  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: "100%", minWidth: 250 }}>
        <CardActionArea
          component={Link}
          to={publicRoutes.PRODUCT.path + `/${slugify(data.name, { lower: true })}`}
          state={data}
        >
          <CardMedia component="img" height="100%" image={data.image} />
          <CardContent>
            <Typography gutterBottom variant="body1" height={150}>
              {data.name}
            </Typography>
            <Typography variant="h6" color="#ff1744">
              {currencyFormat(data.price)} ₫
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProductItem;
