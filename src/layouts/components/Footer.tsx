import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Paper
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 20, fontWeight: "bold" }}>
                  Hỗ trợ khách hàng
                </Typography>
                <Link textAlign="left" sx={{ fontSize: 15, color: "black" }}>
                  Hotline: 1900-6035
                </Link>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  (1000 đ/phút, 8-21h kể cả T7, CN)
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Các câu hỏi thường gặp
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Gửi yêu cầu hỗ trợ
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Hướng dẫn đặt hàng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Phương thức vận chuyển
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Chính sách đổi trả
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Hướng dẫn trả góp
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Chính sách hàng nhập khẩu
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Hỗ trợ khách hàng: hotro@tiki.vn
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 20, fontWeight: "bold" }}>
                  Về Tiki
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Giới thiệu Tiki
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Tuyển dụng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Chính sách bảo mật thanh toán
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Chính sách bảo mật thông tin cá nhân
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Chính sách giải quyết khiếu nại
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Điều khoản sử dụng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Giới thiệu Tiki Xu
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Gói thành viên đặc quyền - Astra Rewards
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 15 }}>
                  Bán hàng doanh nghiệp
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 20, fontWeight: "bold" }}>
                  Phương thức thanh toán
                </Typography>

                <Box sx={{ width: 60, height: 50, m: 1 }} display="flex">
                  <img src="/static/casilogo/img1.jpg"></img>
                  <img src="/static/casilogo/img2.png"></img>
                  <img src="/static/casilogo/img3.png"></img>
                  <img src="/static/casilogo/img4.png"></img>
                  <img src="/static/casilogo/img5.png"></img>
                </Box>

                <Box sx={{ width: 60, height: 50, m: 1 }} display="flex">
                  <img src="/static/casilogo/img6.png"></img>
                  <img src="/static/casilogo/img7.png"></img>
                  <img src="/static/casilogo/img8.png"></img>
                  <img src="/static/casilogo/img9.png"></img>
                  <img src="/static/casilogo/img10.png"></img>
                </Box>
                <Box sx={{ width: 60, height: 50, m: 1 }} display="flex">
                  <img src="/static/casilogo/img11.png"></img>
                </Box>
                <Typography textAlign="left" variant="h6" sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Dịch vụ giao hàng
                </Typography>
                <Box sx={{ width: 50, height: 40 }}>
                  <Link href="https://www.tikinow.biz/?src=footer" underline="none">
                    <img src="/static/casilogo/image1.png"></img>
                  </Link>
                </Box>
              </Item>
            </Grid>
            <Grid display="center" item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 20, fontWeight: "bold" }}>
                  Kết nối với chúng tôi
                </Typography>
                <Box sx={{ ml: 3, width: 150, height: 50 }} display="flex">
                  <Link sx={{ width: 100, height: 100 }} href="https://www.facebook.com/tiki.vn/" underline="none">
                    <img src="/static/casilogo/fb.webp"></img>
                  </Link>
                  <Link href="https://www.youtube.com/user/TikiVBlog" underline="none" sx={{ width: 100, height: 100 }}>
                    <img src="/static/casilogo/youtube.png"></img>
                  </Link>
                  <Link href="https://zalo.me/589673439383195103" underline="none" sx={{ width: 100, height: 100 }}>
                    <img src="/static/casilogo/zalo.png"></img>
                  </Link>
                </Box>
                <Typography textAlign="left" sx={{ p: 1, fontSize: 20, fontWeight: "bold" }}>
                  Tải ứng dụng trên điện thoại
                </Typography>
                <Stack
                  sx={{ width: 400, height: 40 }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Link
                    sx={{ width: 430, height: 30 }}
                    href="https://apps.apple.com/vn/app/id958100553"
                    underline="none"
                  >
                    <img src="/static/casilogo/ios.png"></img>
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid"
                    underline="none"
                    sx={{ width: 450, height: 30 }}
                  >
                    <img src="/static/casilogo/googleplay.png"></img>
                  </Link>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Paper>
  );
};

export default Footer;
