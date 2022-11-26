import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Iconify from "~/components/Iconify";
import { currencyFormat } from "~/utils/formats";

const style = {
  width: "100%",
};

function CartProfile() {
  return (
    <Box sx={{ ml: 3, backgroundColor: "#FAE8E5", width: "30%" }}>
      <Box>
        <Typography variant="h5" textAlign="center" sx={{ mb: 2, mt: 2 }}>
          Thông tin giỏ hàng
        </Typography>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton>
              <Iconify icon="mdi:user" width={36} height={36} />
            </IconButton>
            <ListItem button>
              <ListItemText primary="Tên khách hàng: " />
              <ListItemText primary="Hải" />
            </ListItem>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton>
              <Iconify icon="material-symbols:edit-calendar-outline-rounded" width={36} height={36} />
            </IconButton>
            <ListItem button>
              <ListItemText primary="Ngày xuất đơn: " />
              <ListItemText primary="Jan 9, 2014" />
            </ListItem>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton>
              <Iconify icon="ri:bill-fill" width={36} height={36} />
            </IconButton>
            <ListItem button>
              <ListItemText primary="Tổng thanh toán: " />
              <ListItemText primary={currencyFormat(400000)} />đ
            </ListItem>
          </Box>
          <Divider />
        </List>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              color: "#ffffff",
              mt: 2,
              borderRadius: "20px",
              width: "150px",
              pt: 1,
              pb: 1,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            Thanh toán
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Tooltip title="Log out">
          <IconButton>
            <Iconify
              icon="ic:outline-log-out"
              width={36}
              height={36}
              sx={{
                "&:hover": {
                  color: "#000",
                },
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default CartProfile;
