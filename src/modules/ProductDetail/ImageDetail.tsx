import { Avatar, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function ImageDetail() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
        <Tab icon={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} />
      </Tabs>
    </Box>
  );
}

export default ImageDetail;
