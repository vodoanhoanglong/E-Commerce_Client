import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
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
      <Typography
        variant="h3"
        component="h2"
        color="text.secondary"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 0 }}
      >
        Khuyến mãi hấp dẫn
      </Typography>
      <ContentStyle>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            p={8}
            spacing={12}
            justifyContent="space-around"
            alignItems="baseline"
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item sm={3}>
              <StyleImage>
                <Card sx={{ maxWidth: 345, minWidth: 250, borderRadius: "none" }}>
                  <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai7[1]-1591255489.jpeg"></img>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Áo họa tiết đẹp
                    </Typography>
                    <Typography variant="body2" color="body2">
                      200000đ
                    </Typography>
                  </CardContent>
                </Card>
              </StyleImage>
            </Grid>
            <Grid item sm={3}>
              <StyleImage>
                <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                  <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai3[1]-1591255335.jpeg"></img>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Áo họa tiết đẹp
                    </Typography>
                    <Typography variant="body2" color="body2">
                      200000đ
                    </Typography>
                  </CardContent>
                </Card>
              </StyleImage>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai10[1]-1591255203.jpeg"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000084//begai4[1]-1591255261.jpeg"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3} spacing={6}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000097//1aeccbab979c6d695c3221cda5219094f2db3b3c[1]-1589967648.png"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3} spacing={6}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000192/images/ten-san-pham_300x300[1]-1599469207.jpeg"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3} spacing={6}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000122//8-xoai-cat-chu600x600[1]-1590813215.jpeg"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3} spacing={6}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <img src="https://img.srv1.hodine.com/themes/GRP.000001/PID.000000122//image-pineapple-5[1]-1590813348.jpeg"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Áo họa tiết đẹp
                  </Typography>
                  <Typography variant="body2" color="body2">
                    200000đ
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ContentStyle>
    </Container>
  );
}

export default HomeSale;
