import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { currencyFormat } from "~/utils/formats";

function ProductList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Card sx={{ maxWidth: 345, minWidth: 340, marginRight: 2, marginBottom: 2 }}>
        <CardActionArea>
          <CardMedia component="img" height="160" image="/static/images/cards/contemplative-reptile.jpg" />
          <CardContent>
            <Typography variant="body1">
              Bộ 2 chảo vân đá chống dính Tefal Natura dùng cho bếp ga và hồng ngoại (20cm, 24cm) - Hàng chính hãng
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="#ff1744">
              {currencyFormat(349000)} ₫
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ProductList;
