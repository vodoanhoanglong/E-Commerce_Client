import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "~/components";
import { AuthSocial, RegisterForm } from "~/modules/auth";
export default function Register() {
  return (
    <Page title="Register">
      <Typography
        variant="h4"
        textTransform="uppercase"
        gutterBottom
        sx={{
          textAlign: "center",
        }}
      >
        Đăng ký
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5, textAlign: "center" }}>
        Đăng ký miễn phí. Không cần thẻ tín dụng.
      </Typography>
      <AuthSocial />
      <RegisterForm />
      <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
        Bạn đã có tài khoản?{" "}
        <Link variant="subtitle2" to="/login" component={RouterLink}>
          Đăng nhập ngay
        </Link>
      </Typography>
    </Page>
  );
}
