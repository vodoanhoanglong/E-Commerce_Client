import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "~/components";
import { AuthSocial, LoginForm } from "~/modules/auth";

function Login() {
  return (
    <Page title="Đăng nhập">
      <Typography
        variant="h4"
        textTransform="uppercase"
        gutterBottom
        sx={{
          textAlign: "center",
        }}
      >
        Đăng nhập
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5, textAlign: "center" }}>
        Nhập thông tin chi tiết của bạn dưới đây.
      </Typography>
      <AuthSocial />
      <LoginForm />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Bạn chưa có tài khoản?{" "}
        <Link variant="subtitle2" component={RouterLink} to="/register">
          Đăng ký ngay
        </Link>
      </Typography>
    </Page>
  );
}

export default Login;
