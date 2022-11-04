import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "~/models";
import { currencyFormat } from "~/utils/formats";

interface ProductItemProps {
  data: Product;
}

function ProductList({ data }: ProductItemProps) {
  return (
    <Card sx={{ maxWidth: 350, minWidth: 345, marginBottom: 2 }}>
      <CardActionArea>
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

export default ProductList;
