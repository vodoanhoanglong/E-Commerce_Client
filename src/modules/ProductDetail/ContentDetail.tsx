import { Button, Grid, Stack, Typography } from "@mui/material";
import { Iconify } from "~/components";
import { currencyFormat } from "~/utils/formats";

function ContentDetail(props: any) {
  const { data } = props;
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography gutterBottom variant="body1" fontSize={25}>
          {data.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="#ff1744" gutterBottom sx={{ backgroundColor: "#fafafa", p: 2 }}>
          {currencyFormat(data.price)} ₫
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Mã giảm giá của Shop
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ backgroundColor: "#fbebed", p: 1 }}>
          <Iconify icon="ic:baseline-discount" width={18} height={18} color="#d51d35" />
          <Typography gutterBottom variant="body1" fontSize={15} color="#d51d35">
            Giảm 100k
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Vận chuyển
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="ph:truck" width={18} height={18} color="text.secondary" />
          <Typography gutterBottom variant="body1" fontSize={15} color="text.secondary">
            Miễn phí vận chuyển
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Số lượng
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="outlined">–</Button>
          <Typography gutterBottom variant="body1" fontSize={17}>
            1
          </Typography>
          <Button variant="outlined">+</Button>
          <Typography gutterBottom variant="body1" fontSize={15} color="text.secondary">
            18 sản phẩm có sẵn
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={8}>
        <Typography gutterBottom variant="body1" fontSize={15} color="#ff424f">
          Giá ưu đãi chỉ áp dụng với số lượng sản phẩm nhất định. Giá sản phẩm sẽ thay đổi nếu bạn mua nhiều hơn số
          lượng quy định
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContentDetail;
