import { useLazyQuery } from "@apollo/client";
import { Container, styled } from "@mui/material";
import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { authRoutes } from "~/routes";
import { PreLoading } from "./components";
import { APP_BAR_HEIGHT } from "./MainLayout";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const ContentStyle = styled(Container)(() => ({
  paddingTop: APP_BAR_HEIGHT + 50,
  paddingBottom: 50,
}));

function ProfileLayout() {
  const { pathname } = useLocation();
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
          navigate(authRoutes.LOGIN.path, {
            state: {
              prevUrl: pathname,
            },
          });
        },
      });
    }
  }, [dispatch, reloadUser, user]);

  if (loading) return <PreLoading />;
  return (
    <RootStyle>
      <ContentStyle>
        <Outlet />
      </ContentStyle>
    </RootStyle>
  );
}

export default ProfileLayout;
