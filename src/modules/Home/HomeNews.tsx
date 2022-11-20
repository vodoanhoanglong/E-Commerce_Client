import { Box, Collapse, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CustomBox } from "~/layouts/components/CustomBox";
export default function HomeNews() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const [checked1, setChecked1] = useState(false);

  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  const [checked2, setChecked2] = useState(false);

  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  return (
    <Box minHeight="100vh" sx={{ p: 2, backgroundColor: "#000" }}>
      <div style={{ width: "50%", height: "5px", backgroundColor: "#ffffff", margin: "0 auto" }}></div>
      <CustomBox sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ maxHeight: "600" }}>
          <Container>
            <Card
              sx={{
                width: 270,
                maxWidth: 345,
                mt: 15,
                backgroundColor: "#008ac1",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="/static/imgHome/top1.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                  Top 1
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Dẫn đầu xu thế về lĩnh vực kinh doanh online, bán hàng trực tuyến qua internet
                </Typography>
              </CardContent>
              {checked ? (
                <Button onClick={handleChange}>Hide</Button>
              ) : (
                <Button onClick={handleChange} sx={{ color: " #beff1b" }}>
                  More
                </Button>
              )}
              <Box sx={{ display: "flex" }}>
                <Collapse in={checked}>
                  <CardContent>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      Dẫn đầu nhiều năm liền với những sản phẩm top 1, đoạt nhiều giải thưởng danh giá khác.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Box>
            </Card>
          </Container>
        </Box>
        <Box>
          <Typography variant="h1" sx={{ color: "#ffffff" }}>
            Luôn
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
            }}
          >
            luôn mang lại niềm tin và sự hài lòng cho khách hàng
          </Typography>
        </Box>
        <Box>
          <Container>
            <Card
              sx={{
                mt: 7,
                width: 400,
                p: 1,
                backgroundColor: "#008ac1",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="/static/imgHome/cohoi.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                  Cơ hội
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Biết nắm bắt cơ hội, tìm ra xu thế mới trong lĩnh vực kinh doanh với mô hình cao cấp hiện đại mang lại
                  lợi nhuận cao
                </Typography>
              </CardContent>
              {checked1 ? (
                <Button onClick={handleChange1}>Hide</Button>
              ) : (
                <Button onClick={handleChange1} sx={{ color: " #beff1b" }}>
                  More
                </Button>
              )}
              <Box sx={{ display: "flex" }}>
                <Collapse in={checked1}>
                  <CardContent>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      Tạo ra hàng ngàn công việc làm ăn cho giới trẻ, tiếp thu và cải tạo nhiều nguồn lực mới cho quốc
                      gia.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Box>
            </Card>
          </Container>
        </Box>
        <Box>
          <Container>
            <Card sx={{ maxWidth: 345, width: 300, mt: 12, backgroundColor: "#008ac1" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100%"
                width="100%"
                image="/static/imgHome/ketnoi.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                  Kết nối
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Mở rộng mô hình kinh doanh trực tuyến trên nhiều trang mạng xã hội, kết nối shop với khách hàng cực
                  đơn giản và tiện lợi
                </Typography>
              </CardContent>
              {checked2 ? (
                <Button onClick={handleChange2}>Hide</Button>
              ) : (
                <Button onClick={handleChange2} sx={{ color: " #beff1b" }}>
                  More
                </Button>
              )}
              <Box sx={{ display: "flex" }}>
                <Collapse in={checked2}>
                  <CardContent>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      Không chỉ trong nước mà còn lan rộng ra khắp các quốc gia, đặc biệt ảnh hưởng mạnh nhất là khu vực
                      Đông Nam Á.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Box>
            </Card>
          </Container>
        </Box>
      </CustomBox>
    </Box>
  );
}
