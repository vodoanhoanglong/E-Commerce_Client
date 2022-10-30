import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MAIN_LINK = [
  {
    display: "Trang chủ",
    path: "/home",
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
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    const index = MAIN_LINK.findIndex((link) => link.path === pathname);
    setValue(index);
  }, [pathname]);

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
