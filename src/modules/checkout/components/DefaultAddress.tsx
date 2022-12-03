import { Box, Button, DialogActions, Stack, styled, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Iconify, PaperWrapper, Tag } from "~/components";
import DialogWrapper from "~/components/DialogWrapper";
import { BillAddress } from "~/models";
import { createBilling } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import EditAddressForm from "./EditAddressForm";

const Headline = styled("div")(({ theme }) => ({
  width: "100%",
  height: "3px",
  borderRadius: theme.shape.borderRadius,
  backgroundSize: "116px 3px",
  backgroundPositionX: "-20px",
  backgroundImage:
    "repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6 33px,rgb(0 0 0 / 0%) 0,rgb(0 0 0 / 0%) 41px,#f18d9b 0,#f18d9b 74px,rgb(0 0 0 / 0%) 0,rgb(0 0 0 / 0%) 82px)",
}));
// * Tách địa chỉ default với địa chỉ khác => 2 paper riêng
function DefaultAddress() {
  const dispath = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.data);
  const [currentAddress, setCurrentAddress] = useState<BillAddress>();
  const [isEditting, setIsEditting] = useState(false);

  useEffect(() => {
    const defaultAddress: BillAddress = {
      fullName: currentUser?.fullName,
      phoneNumber: currentUser?.phoneNumber,
      address: currentUser?.address,
      isDefault: true,
    };
    setCurrentAddress(defaultAddress);
    dispath(createBilling(defaultAddress));
  }, []);

  return (
    <Fragment>
      <PaperWrapper>
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
                  {`${currentAddress?.fullName} (${currentAddress?.phoneNumber})`}
                </Typography>
                {currentAddress?.isDefault && <Tag title="Mặc định" />}
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
                onClick={() => setIsEditting(true)}
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
              {currentAddress?.address}
            </Typography>
          </Box>
        </Box>
      </PaperWrapper>

      <DialogWrapper title="Thêm Mới Địa Chỉ " open={isEditting} onClose={() => setIsEditting(false)}>
        <EditAddressForm />
        <DialogActions>
          <Button size="medium" variant="contained">
            Giao Hàng Đến Địa Chỉ Này
          </Button>
          <Button size="medium" variant="outlined" color="inherit" onClick={() => setIsEditting(false)}>
            Hủy Bỏ
          </Button>
        </DialogActions>
      </DialogWrapper>
    </Fragment>
  );
}

export default DefaultAddress;
