import { Box, CardMedia, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function ImageDetail({ data }: any) {
  const [value, setValue] = useState(0);
  const [image, setImage] = useState();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeImage = (item: any) => {
    setImage(item);
  };
  return (
    <Stack spacing={1} alignItems="center" sx={{ m: 2 }}>
      {data.image.slice(0, 1).map((item: any) => (
        <CardMedia component="img" height="100%" image={image || item.smallImage} key={item.id} />
      ))}

      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {data.image.map((item: any) => (
            <Tab
              key={item.id}
              icon={<img src={item.smallImage} alt="homemainImg" style={{ width: 100 }} />}
              onClick={() => handleChangeImage(item.smallImage)}
            />
          ))}
        </Tabs>
      </Box>
    </Stack>
  );
}

export default ImageDetail;
