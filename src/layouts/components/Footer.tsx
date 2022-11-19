import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
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
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 10, fontWeight: "bold" }}>
                  Hỗ trợ khách hàng
                </Typography>
                <Link textAlign="left" sx={{ fontSize: 10, color: "black" }}>
                  Hotline: 1900-6035
                </Link>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  (1000 đ/phút, 8-21h kể cả T7, CN)
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Các câu hỏi thường gặp
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Gửi yêu cầu hỗ trợ
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Hướng dẫn đặt hàng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Phương thức vận chuyển
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Chính sách đổi trả
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Hướng dẫn trả góp
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Chính sách hàng nhập khẩu
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Hỗ trợ khách hàng: hotro@tiki.vn
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 10, fontWeight: "bold" }}>
                  Về Tiki
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Giới thiệu Tiki
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Tuyển dụng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Chính sách bảo mật thanh toán
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Chính sách bảo mật thông tin cá nhân
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Chính sách giải quyết khiếu nại
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Điều khoản sử dụng
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Giới thiệu Tiki Xu
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Gói thành viên đặc quyền - Astra Rewards
                </Typography>
                <Typography textAlign="left" sx={{ fontSize: 10 }}>
                  Bán hàng doanh nghiệp
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 10, fontWeight: "bold" }}>
                  Phương thức thanh toán
                </Typography>
                <Box sx={{ width: 50, height: 40 }} display="flex">
                  <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkNGRFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c55fc0c59b53bc51edfd5c00e54755aa2d85a48a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/tiki-corporation-logo.png"></img>
                  <img src="https://luatvietan.vn/wp-content/uploads/2014/07/dich-vu-visa.jpg"></img>
                  <img src="data:image/png;base64,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"></img>
                  <img src="data:image/png;base64,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"></img>
                  <img src="data:image/png;base64,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"></img>
                </Box>
                <Box sx={{ width: 50, height: 40 }} display="flex">
                  <img src="https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png"></img>
                  <img src="data:image/png;base64,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"></img>
                  <img src="https://play-lh.googleusercontent.com/yHmIm7FYKe_dW2WHTwWizp2p_gt7_ctdpCUevX654E1dsj5c9McWO03k_S6PPLG_DNz7"></img>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoOyfrBiKU8A5BCX5gDOOxmoSyFXsJ_QnSg&usqp=CAU"></img>
                  <img src="data:image/png;base64,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"></img>
                </Box>
                <Typography textAlign="left" variant="h6" sx={{ fontSize: 10, fontWeight: "bold" }}>
                  Dịch vụ giao hàng
                </Typography>
                <Box sx={{ width: 50, height: 40 }}>
                  <Link href="https://www.tikinow.biz/?src=footer" underline="none">
                    <img src="https://product.hstatic.net/1000405368/product/cf998f5b884944edbf8dd73f3ff038b7_2048x2048_27639535558e4da3b04bb2381392e83f_grande.png"></img>
                  </Link>
                </Box>
              </Item>
            </Grid>
            <Grid display="center" item xs={3}>
              <Item>
                <Typography textAlign="left" variant="h6" sx={{ p: 1, fontSize: 10, fontWeight: "bold" }}>
                  Kết nối với chúng tôi
                </Typography>
                <Box sx={{ width: 150, height: 50 }} display="flex">
                  <Link sx={{ width: 100, height: 100 }} href="https://www.facebook.com/tiki.vn/" underline="none">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"></img>
                  </Link>
                  <Link href="https://www.youtube.com/user/TikiVBlog" underline="none" sx={{ width: 100, height: 100 }}>
                    <img src="https://dovu.vn/wp-content/uploads/2021/07/icon-youtube.png"></img>
                  </Link>
                  <Link href="https://zalo.me/589673439383195103" underline="none" sx={{ width: 100, height: 100 }}>
                    <img src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"></img>
                  </Link>
                </Box>
                <Typography textAlign="left" sx={{ p: 1, fontSize: 15, fontWeight: "bold" }}>
                  Tải ứng dụng trên điện thoại
                </Typography>
                <Box sx={{ width: 150, height: 100 }}>
                  <Link sx={{ width: 40, height: 30 }} href="https://www.facebook.com/tiki.vn/" underline="none">
                    <img src="https://i-invdn-com.investing.com/landingPages/mobile_2018/vn/vn-badge-ios.png"></img>
                  </Link>
                  <Link href="https://www.youtube.com/user/TikiVBlog" underline="none" sx={{ width: 40, height: 30 }}>
                    <img src="https://families.google/familylink/static/img/google-play/googleplay.vi_ALL.png?cache=ec4fefa"></img>
                  </Link>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper>
        <Typography textAlign="left" sx={{ p: 1, fontSize: 10 }}>
          Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh
        </Typography>
        <Typography textAlign="left" sx={{ marginLeft: 1, fontSize: 10 }}>
          Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc
          trung tâm xử lý đơn hàng
        </Typography>
        <Typography textAlign="left" sx={{ p: 1, fontSize: 10 }}>
          Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu
          ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022
        </Typography>
        <Typography textAlign="left" sx={{ marginLeft: 1, fontSize: 10 }}>
          © 2022 - Bản quyền của Công ty TNHH Ti Ki
        </Typography>
      </Paper>
    </Paper>
  );
};

export default Footer;
