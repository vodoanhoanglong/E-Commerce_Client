import { Box, Container, IconButton, styled, Typography } from "@mui/material";
import Iconify from "~/components/Iconify";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

const HomeInteractive = () => {
  return (
    <Box sx={{ p: 10, backgroundColor: "#fff" }}>
      <CustomContainer>
        <CustomBox>
          <img
            src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/logo.png?raw=true"
            alt="logo"
            style={{ maxWidth: "100%" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Hơn 45 triệu đánh giá tích cực cho shop
            <IconButton>
              <Iconify icon="ant-design:like-outlined" width={20} height={20} />
            </IconButton>
          </Typography>
        </CustomBox>

        <Box>
          <img
            src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/Star.png?raw=true"
            alt="stars"
            style={{ maxWidth: "100%" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Sao đánh giá (2k+ Lượt phản hồi)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img
          src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/logos.png?raw=true"
          alt="logos"
        />
      </Container>
    </Box>
  );
};

export default HomeInteractive;
