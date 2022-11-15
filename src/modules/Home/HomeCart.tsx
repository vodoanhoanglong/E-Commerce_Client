import { Box, Collapse, Container, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

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

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedSize={15}>
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
              <Card sx={{ maxWidth: 545, minHeight: 680, boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://www.datocms-assets.com/6783/1643324716-bhi-fashion-designer-female.png "
                  alt="green iguana"
                />
                <CardContent sx={{ mt: 5 }}>
                  <Typography gutterBottom variant="h4" component="div">
                    Thời trang
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px" }}>
                    Hãy đến shop của chúng tôi, các bạn sẽ được trải nghiệm về chất lượng phục vụ của nhân viên một cách
                    tốt nhất.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Box>
          <Box>
            <div style={{ backgroundColor: "#d6d6d6", height: 700, width: "1px" }}></div>
          </Box>
          <Box>
            <Container>
              <Card sx={{ maxWidth: 545, minHeight: 600, boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="https://www.rilastil.com.vn/data/upload/duoc%20pham%20va%20my%20pham.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Mỹ phẩm
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px" }}>
                    Mỹ phẩm đa dạng và được nhập từ Mỹ với chất lượng được đảm bảo một cách an toàn và hiệu quả nhất
                    dành cho khách hàng.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Box>
        </CustomBox>
      </Box>
      `
    </Collapse>
  );
};

export default HomeCart;
