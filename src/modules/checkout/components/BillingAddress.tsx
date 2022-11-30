import { Button, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { Iconify } from "~/components";
import PaperWrapper from "../../../components/PaperWrapper";

function BillingAddress() {
  return (
    <PaperWrapper>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" textTransform="capitalize" fontWeight="bold">
              Địa chỉ nhận hàng
            </Typography>
            <Button
              variant="text"
              size="small"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Iconify
                icon="ph:pencil-simple-fill"
                sx={{
                  fontSize: "12px",
                }}
              />
              <Typography fontSize={12} textTransform="capitalize" fontWeight="bold">
                Thay đổi
              </Typography>
            </Button>
          </Stack>
        }
      />
      <CardContent>
        <Typography variant="subtitle2" textTransform="capitalize" fontWeight="bold">
          {"Nguyễn Thanh Hòa (0123456789)"}
        </Typography>
        <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500}>
          {"450 Lê Văn Việt, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh"}
        </Typography>
      </CardContent>
    </PaperWrapper>
  );
}

export default BillingAddress;
