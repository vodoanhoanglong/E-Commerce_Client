import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const MAIN_LINK = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/product",
  },
];

interface LinkTabProps {
  label?: string;
  to?: string;
}
function LinkTab(props: LinkTabProps) {
  return <Tab LinkComponent={Link} {...props} />;
}

function NavigationLink() {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        {MAIN_LINK.map((link, index) => (
          <LinkTab key={index} label={link.display} to={link.path} />
        ))}
      </Tabs>
    </Box>
  );
}
export default NavigationLink;
