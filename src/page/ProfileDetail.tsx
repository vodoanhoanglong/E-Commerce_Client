import CakeIcon from "@mui/icons-material/Cake";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { User } from "~/models";

export const enum UserInformation {
  BOD = "bod",
  ADDRESS = "address",
  PHONE = "phone",
  GENDER = "gender",
}

export default function ProfileDetail({ currentUser }: { currentUser: User }) {
  const IconInformation = [
    {
      name: UserInformation.BOD,
      value: "Ngày sinh",
      icon: <CakeIcon />,
      data: currentUser?.bod,
    },
    {
      name: UserInformation.GENDER,
      value: "Giới tính",
      icon: <TransgenderIcon />,
      data: currentUser?.gender,
    },
    {
      name: UserInformation.ADDRESS,
      value: "Địa chỉ",
      icon: <HomeIcon />,
      data: currentUser?.address,
    },
    {
      name: UserInformation.PHONE,
      value: "Số điện thoại",
      icon: <LocalPhoneIcon />,
      data: currentUser?.phoneNumber,
    },
  ];

  return (
    <Card style={{ margin: 50 }}>
      <CardHeader
        title={<Typography variant="h4">Thông tin cá nhân</Typography>}
        style={{ backgroundColor: "#344680", height: 50, color: "#FFFFFF", padding: 20 }}
      />
      <CardContent>
        {IconInformation.map((item) => (
          <div
            style={{ display: "flex", justifyContent: "flex-start", gap: 10, verticalAlign: "middle", margin: 10 }}
            key={item.name}
          >
            {item.icon}
            <Typography variant="h6">{item.value + ": " + item.data}</Typography>
          </div>
        ))}
      </CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: 20,
        }}
      >
        <IconButton
          size="small"
          style={{
            alignItems: "center",
            gap: 5,
            borderRadius: 10,
            transitionDuration: "500ms",
            transitionProperty: "border-color",
            backgroundColor: "#103996",
            padding: 10,
          }}
        >
          <ModeEditOutlineIcon style={{ color: "#FFFFFF" }} />
          <Typography variant="body1" color={"#FFFFFF"} fontWeight={"bold"}>
            Chỉnh sửa thông tin
          </Typography>
        </IconButton>
      </div>
    </Card>
  );
}
