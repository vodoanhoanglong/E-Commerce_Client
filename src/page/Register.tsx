import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Page, PaperWrapper } from "~/components";
import { AvatarFrame, SignUpForm } from "~/modules/auth";
export default function Register() {
  return (
    <Page title="Register">
      <Container maxWidth="lg">
        <Typography variant="h4" textTransform="uppercase" gutterBottom>
          Đăng ký
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 2 }}>Đăng ký miễn phí. Không cần thẻ tín dụng.</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <AvatarFrame />
          </Grid>
          <Grid item xs={12} md={8}>
            <PaperWrapper
              sx={{
                padding: 4,
              }}
            >
              <SignUpForm />
              <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                Bạn đã có tài khoản?{" "}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  Đăng nhập ngay
                </Link>
              </Typography>
            </PaperWrapper>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
