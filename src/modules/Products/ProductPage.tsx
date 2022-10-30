import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { Page } from "~/components";

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

function ProductPage() {
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
                      Bộ 2 chảo vân đá chống dính Tefal Natura dùng cho bếp ga và hồng ngoại (20cm, 24cm) - Hàng chính
                      hãng
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="#ff1744">
                      {Format(349000)} ₫
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

function Format(n: number) {
  return n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default ProductPage;
