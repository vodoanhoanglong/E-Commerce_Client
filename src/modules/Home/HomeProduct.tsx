import { Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

const imgSale = [
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai7[1]-1591255489.jpeg",
    title: "Áo họa tiết đẹp",
    priceSale: "200000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai3[1]-1591255335.jpeg",
    title: "Áo hoodies ",
    priceSale: "210000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai4[1]-1591255261.jpeg",
    title: "Váy vàng óng ả",
    priceSale: "220000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000097//367-giay-moi-nu-nu-310-1[1]-1589969164.jpeg",
    title: "Váy hồng thắt nơ ",
    priceSale: "204000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000097//1aeccbab979c6d695c3221cda5219094f2db3b3c[1]-1589967648.png",
    title: "Giày Bitis'hunter",
    priceSale: "260000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000097//li-ning-2016-ph-n-running-shoes-breathable-l-i-thu-ch-y-b-sneakers-sport[1]-1589967743.jpeg",
    title: "Giày",
    priceSale: "290000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000122//image-pineapple-5[1]-1590813348.jpeg",
    title: "Trái cây",
    priceSale: "290000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000122//8-xoai-cat-chu600x600[1]-1590813215.jpeg",
    title: "Nước ép",
    priceSale: "290000đ",
  },
  {
    img: "https://img.srv1.hodine.com/themes/GRP.000001/PID.000000122//cong-dung-cua-qua-cherry-3-jpeg[1]-1590813301.jpeg",
    title: "Nước ép",
    priceSale: "290000đ",
  },
];

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0, 0),
}));

const StyleImage = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "block",
}));

function HomeSale() {
  return (
    <Container>
      <Typography variant="h2" component="h2" color="text.secondary" sx={{ marginBottom: 0 }}>
        Sản phẩm bán chạy
      </Typography>
      <ContentStyle>
        <Grid container p={8} columnSpacing={6} spacing={6} sx={{ display: "flex", mt: 1 }}>
          <Container>
            <Grid item sm={6} sx={{ dislay: "flex" }}>
              <StyleImage>
                <Card sx={{ maxWidth: 550 }}>
                  <CardMedia>
                    <img
                      src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000121/images/coffe-huong-vi-moi-1592562564.png"
                      alt=""
                    ></img>
                  </CardMedia>
                </Card>
              </StyleImage>
            </Grid>
            <Grid item sm={6} sx={{ dislay: "flex" }}>
              <Typography variant="h6" component="h2" color="text.secondary" sx={{ marginBottom: 0 }}>
                Tưng bừng khai trương
              </Typography>
            </Grid>
          </Container>

          <Grid item sm={6}>
            <Typography variant="h6" component="h2" color="text.secondary" sx={{ marginBottom: 0 }}>
              Tưng bừng khai trương
            </Typography>
            <StyleImage>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia>
                  <img
                    src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000121/images/2-1592562818.png"
                    alt=""
                  ></img>
                </CardMedia>
              </Card>
            </StyleImage>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h6" component="h2" color="text.secondary" sx={{ marginBottom: 0 }}>
              Chương trình đặc biệt nhằm tri ân khách hàng
            </Typography>
            <StyleImage>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia>
                  <img
                    src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000121/images/1-1592562837.png"
                    alt=""
                  ></img>
                </CardMedia>
              </Card>
            </StyleImage>
          </Grid>
        </Grid>
      </ContentStyle>
    </Container>
  );
}

export default HomeSale;
