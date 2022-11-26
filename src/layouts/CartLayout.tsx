import { useLazyQuery } from "@apollo/client";
import { Box, Container, Stack, styled } from "@mui/material";
import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { AccountPopover, LogoLayout, NavBar, NotificationsPopover, PreLoading, SearchBar } from "./components";
import CheckoutHeader from "./components/CheckoutHeader";
import { APP_BAR_HEIGHT } from "./MainLayout";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const ContentStyle = styled(Container)(() => ({
  paddingTop: APP_BAR_HEIGHT + 24,
}));

function CartLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
          console.warn(err.message);
          // navigate(authRoutes.LOGIN.path, {
          //   state: {
          //     prevUrl: pathname,
          //   },
          // });
        },
      });
    }
  }, [dispath, reloadUser, user]);

  if (loading) return <PreLoading />;
  return (
    <RootStyle>
      <NavBar>
        <LogoLayout sx={{ mr: 2 }} />
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </NavBar>
      <ContentStyle>
        <CheckoutHeader />
        <Outlet />
      </ContentStyle>
    </RootStyle>
  );
}

export default CartLayout;
