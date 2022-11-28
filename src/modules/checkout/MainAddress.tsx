import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Iconify, Tag } from "~/components";

const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius - 2,
  boxShadow: theme.customShadows.z8,
}));

const Headline = styled("div")(({ theme }) => ({
  width: "100%",
  height: "3px",
  borderRadius: theme.shape.borderRadius,
  backgroundSize: "116px 3px",
  backgroundPositionX: "-20px",
  backgroundImage:
    "repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,rgb(0 0 0 / 0%) 0,rgb(0 0 0 / 0%) 41px,#f18d9b 0,#f18d9b 74px,rgb(0 0 0 / 0%) 0,rgb(0 0 0 / 0%) 82px)",
}));

function MainAddress() {
  return (
    <RootStyle>
      <Headline />
      <Box
        sx={{
          padding: "20px 30px 20px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            mb: 1,
            color: "primary.main",
          }}
        >
          <Iconify icon="ic:round-location-on" />
          <Typography variant="subtitle1" textTransform="capitalize" fontWeight="bold">
            Địa chỉ nhận hàng
          </Typography>
        </Stack>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="subtitle1" textTransform="capitalize" fontWeight="bold">
                {"Nguyễn Thanh Hòa (0123456789)"}
              </Typography>
              <Tag title="Mặc định" />
            </Stack>
            <Button
              variant="text"
              size="small"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                padding: "4px 8px",
              }}
            >
              <Iconify
                icon="ph:pencil-simple-fill"
                sx={{
                  fontSize: "1rem",
                }}
              />
              <Typography fontSize={14} textTransform="capitalize" fontWeight="bold">
                Thay đổi
              </Typography>
            </Button>
          </Stack>
          <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500}>
            {"450 Lê Văn Việt, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh"}
          </Typography>
        </Box>
      </Box>
    </RootStyle>
  );
}

export default MainAddress;
