import { Box, styled, Typography } from "@mui/material";
import { useRef } from "react";
import { Iconify, PaperWrapper } from "~/components";

const ImgWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "144px",
  height: "144px",
  margin: "auto",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
  border: "1px dashed rgb(145 158 171 / 32%)",
}));

const UploadStyle = styled("div")(({ theme }) => ({
  zIndex: 7,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  backgroundColor: theme.palette.grey[100],
  transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "50%",
  cursor: "pointer",
  width: "calc(100% - 16px)",
  height: "calc(100% - 16px)",
  color: theme.palette.grey[500],
}));

function AvatarFrame() {
  const inputImageRef = useRef<HTMLInputElement>(null);
  return (
    <PaperWrapper
      sx={{
        padding: 10,
      }}
    >
      <Box>
        <ImgWrapper>
          {/* TODO: Tách phần uploader riêng, Img riêng */}
          <input accept="image/*" type="file" tabIndex={-1} style={{ display: "none" }} ref={inputImageRef} />
          <UploadStyle onClick={() => inputImageRef.current?.click()}>
            <Iconify
              icon="mdi:camera-plus"
              color="inherit"
              sx={{
                fontSize: 24,
              }}
            />
            <Typography variant="caption" color="inherit">
              Upload photo
            </Typography>
          </UploadStyle>
        </ImgWrapper>
        <Typography
          variant="caption"
          textAlign="center"
          sx={{ display: "block", color: "text.secondary", margin: "16px auto 0px" }}
        >
          {"Allowed *.jpeg, *.jpg, *.png, *.gif"}
          <br />
          {"  max size of 3.1 MB"}
        </Typography>
      </Box>
    </PaperWrapper>
  );
}

export default AvatarFrame;
