import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";

function ProductItem({ data }: any) {
  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: "100%", minWidth: 250 }}>
        <CardActionArea
          component={Link}
          to={publicRoutes.PRODUCT.path + `/${slugify(data.name, { lower: true })}`}
          state={data}
        >
          {data.image.slice(0, 1).map((item: any) => (
            <CardMedia component="img" height="100%" image={item.smallImage} key={item.id} />
          ))}

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
