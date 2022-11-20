import { Box, Card, CardContent, CardMedia, Collapse, Container, Stack, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";

const Carts = [
  {
    id: "1",
    img: "/static/imgHome/thoitrang.png",
    title: "Thời trang",
    desc: "Hãy đến shop của chúng tôi, các bạn sẽ được trải nghiệm về chất lượng phục vụ của nhân viên một cách tốt nhất.",
  },
  {
    id: "2",
    img: "/static/imgHome/mypham.png",
    title: "Mỹ phẫm",
    desc: "Mỹ phẩm đa dạng và được nhập từ Mỹ với chất lượng được đảm bảo một cách an toàn và hiệu quả nhất dành cho khách hàng.",
  },
  {
    id: "3",
    img: "/static/imgHome/sachbao.png",
    title: "Sách báo",
    desc: "Mang đến nhiều hiểu biết, truyền cảm hứng và tri thức cho mọi người với những cuốn sách hay ",
  },
];

const CardItem = styled(Card)(({ theme }) => ({
  maxWidth: "500px",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  minHeight: "600px",
}));

const HomeCart = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedSize={15}>
      <Box
        sx={{
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Typography variant="h3" textAlign="center" sx={{ mt: 2 }}>
          Thương hiệu độc quyền
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={5} sx={{ mt: 5 }}>
          {Carts.map((item) => (
            <Fragment key={item.id}>
              <Box>
                <Container>
                  <CardItem>
                    <CardMedia component="img" height="370" image={item.img} alt={item.title} />
                    <CardContent sx={{ mt: 5 }}>
                      <Typography gutterBottom variant="h4" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px" }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardItem>
                </Container>
              </Box>
            </Fragment>
          ))}
        </Stack>
      </Box>
    </Collapse>
  );
};

export default HomeCart;
