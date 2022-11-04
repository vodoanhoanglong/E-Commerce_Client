import { Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
  maxWidth: "100%",
  maxHeight: "100%",
  border: "none",
}));

function HomeSale() {
  return (
    <Container>
      <Typography variant="h3" component="h2" color="text.secondary" sx={{ marginBottom: 0 }}>
        Khuyến mãi hấp dẫn
      </Typography>
      <ContentStyle>
        <Grid
          container
          p={8}
          columnSpacing={6}
          spacing={12}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {imgSale.map((item, index) => (
            <Grid item sm={4} key={index}>
              <StyleImage>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia>
                    <img src={item.img}></img>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" color="body2">
                      {item.priceSale}
                    </Typography>
                  </CardContent>
                </Card>
              </StyleImage>
            </Grid>
          ))}
        </Grid>
      </ContentStyle>
    </Container>
  );
}

export default HomeSale;
