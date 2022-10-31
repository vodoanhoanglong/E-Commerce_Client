import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Iconify } from "~/components";

const RootStyle = styled("div")(() => ({
  display: "flex",
  borderRadius: 4,
  border: "1px solid #d6e0ed",
  backgroundColor: "#f5f8fd",
  height: 30,
}));
const CounterValue = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
  fontSize: "1rem",
  lineHeight: 1.1,
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: "none",
  textAlign: "center",
  padding: 5,
}));
const CounterButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  backgroundColor: theme.palette.action.hover,
  padding: "0 8px",
  height: "100%",
  border: "none",
  transition: theme.transitions.create("all"),
  cursor: "pointer",
}));
function Counter() {
  const [value, setValue] = useState(1);
  return (
    <Box maxWidth="100px">
      <RootStyle>
        <CounterButton disabled>
          <Iconify icon="eva:minus-fill" />
        </CounterButton>
        <CounterValue type="number" value={value} required />
        <CounterButton onClick={() => setValue((prev) => prev + 1)}>
          <Iconify icon="eva:plus-fill" />
        </CounterButton>
      </RootStyle>
    </Box>
  );
}

export default Counter;
