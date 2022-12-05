import { useLazyQuery } from "@apollo/client";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Avatar, CardContent, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Page } from "~/components";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { PreLoading } from "~/layouts/components";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { authRoutes } from "~/routes";
import ProfileDetail from "./ProfileDetail";

const enum TabName {
  PROFILE = "profile",
  SHOP = "shop",
  ORDER = "order",
}

const IconsButton = [
  {
    name: TabName.PROFILE,
    icon: <AccountBoxIcon />,
    value: "Hồ sơ",
  },
  {
    name: TabName.SHOP,
    icon: <AddBusinessIcon />,
    value: "Cửa hàng",
  },
  {
    name: TabName.ORDER,
    icon: <AddBusinessIcon />,
    value: "Đơn hàng",
  },
];

const IconButtonCustom = (
  value: string,
  icon: JSX.Element,
  tabName: TabName,
  tabClick: TabName,
  handleClick: () => void,
) => (
  <IconButton
    size="small"
    onClick={handleClick}
    style={{
      backgroundColor: "transparent",
      gap: 5,
      marginRight: 20,
      borderBottom: "2px solid",
      borderColor: tabName === tabClick ? "#344680" : "transparent",
      borderRadius: 0,
      transitionDuration: "500ms",
      transitionProperty: "border-color",
    }}
  >
    {icon}
    <Typography variant="body1" color={"#898e94"} fontWeight={"bold"}>
      {value}
    </Typography>
  </IconButton>
);

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (!user) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispatch(setUser(getCurrentUser));
        },
        onError: (err) => {
          console.warn(err.message);
          navigate(authRoutes.LOGIN.path);
        },
      });
    }
  }, [dispatch, reloadUser, user]);

  if (loading) return <PreLoading />;

  const [tabClick, setTabClick] = useState(TabName.PROFILE);
  return (
    <Page title="Hồ sơ">
      <Card sx={{ maxWidth: 1500 }} style={{ position: "relative" }}>
        <CardContent
          style={{
            backgroundColor: "#344680",
            height: 200,
          }}
        >
          <div style={{ position: "absolute", bottom: 30, left: 20 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src={user?.avatar} />
              <div
                style={{
                  marginLeft: 25,
                  textAlign: "left",
                }}
              >
                <Typography variant="h4" color={"#FFFFFF"}>
                  {user?.fullName}
                </Typography>
                <Typography variant="body1" color={"#FFFFFF"}>
                  {user?.email}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end", height: 55 }}>
          {IconsButton.map((item) =>
            IconButtonCustom(item.value, item.icon, item.name, tabClick, () => setTabClick(item.name)),
          )}
        </CardActions>
      </Card>

      <ProfileDetail currentUser={user as User} />
    </Page>
  );
}
