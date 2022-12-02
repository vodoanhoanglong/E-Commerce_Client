import { Box, CardMedia, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Product, ProductImage } from "~/models";
interface ProductProps {
  data: Product;
}

function ImageDetail({ data }: ProductProps) {
  const [value, setValue] = useState(0);
  const [image, setImage] = useState(data.images[0].url);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeImage = (item: string) => {
    setImage(item);
  };
  return (
    <Stack spacing={1} alignItems="center" sx={{ m: 2 }}>
      <CardMedia component="img" height="100%" image={image} />

      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {data.images.map((item: ProductImage) => (
            <Tab
              key={item.id}
              icon={<img src={item.url} style={{ width: 100 }} />}
              onClick={() => handleChangeImage(item.url)}
            />
          ))}
        </Tabs>
      </Box>
    </Stack>
  );
}

export default ImageDetail;
