import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "~/models";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";

interface ProductItemProps {
  data: Product;
}

function ProductItem({ data }: ProductItemProps) {
  return (
    <Card sx={{ maxWidth: 350, minWidth: 345, marginBottom: 2, marginRight: 2 }}>
      <CardActionArea component={Link} to={publicRoutes.PRODUCT.path + `/${data.id}`} state={data}>
        <CardMedia component="img" height="160" image={data.image} />
        <CardContent>
          <Typography variant="body1">{data.name}</Typography>
          <Typography gutterBottom variant="h6" component="div" color="#ff1744">
            {currencyFormat(data.price)} ₫
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductItem;
