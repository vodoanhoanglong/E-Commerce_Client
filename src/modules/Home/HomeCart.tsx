import { Box, Container, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const HomeCart = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BackRoundImage = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    backgroundImage: "https://www.datocms-assets.com/6783/1643324716-bhi-fashion-designer-female.png",
  }));
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          p: 5,
        }}
      >
        Thương hiệu độc quyền
      </Typography>
      <CustomBox sx={{ p: 5 }}>
        <Box>
          <Container>
            <Card sx={{ maxWidth: 445, mb: 2 }}>
              <CardMedia
                component="img"
                height="440"
                image="https://www.datocms-assets.com/6783/1643324716-bhi-fashion-designer-female.png "
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Container>
        </Box>

        <Box>
          <Container>
            <Card sx={{ maxWidth: 445, mb: 2 }}>
              <CardMedia
                component="img"
                height="440"
                image="https://daotaodalieu.vn/wp-content/uploads/2021/09/g-mypham.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Container>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default HomeCart;
