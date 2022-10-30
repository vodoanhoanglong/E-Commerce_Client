import { Box, Typography } from "@mui/material";
import { Page } from "~/components";
// import Button from "~/theme/overrides/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Banner() {
  return (
    <Page title="products">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "left",
        }}
      >
        Danh mục
      </Typography>

      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>1</Item>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

export default Banner;
