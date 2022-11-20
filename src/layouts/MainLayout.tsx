import { useLazyQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { NavBar } from "./components";

const APP_BAR_HEIGHT = 64;

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(() => ({
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_HEIGHT,
}));

const LoadingWrapperStyle = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

function MainLayout() {
  const dispath = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (!user) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispath(setUser(getCurrentUser));
        },
        onError: (err) => {
          console.error(err.message);
        },
      });
    }
  }, [dispath, reloadUser, user]);

  if (loading)
    return (
      <LoadingWrapperStyle>
        <CircularProgress />
      </LoadingWrapperStyle>
    );
  return (
    <RootStyle>
      <NavBar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default MainLayout;
