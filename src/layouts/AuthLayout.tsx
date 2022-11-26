import { useLazyQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch } from "~/redux/hooks";
import { PreLoading } from "./components";

const ContentStyle = styled("div")(({ theme }: any) => ({
  maxWidth: 600,
  margin: "0 auto",
  minHeight: "100vh",
  padding: theme.spacing(12, 0),
}));

function AuthLayout() {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (localStorage.getItem("access_token")) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispath(setUser(getCurrentUser));
          navigate("/");
        },
        onError: (err) => {
          console.error(err.message);
        },
      });
    }
  }, [dispath, navigate, reloadUser]);

  return (
    <Container maxWidth="sm">
      {loading ? (
        <PreLoading />
      ) : (
        <ContentStyle>
          <Outlet />
        </ContentStyle>
      )}
    </Container>
  );
}

export default AuthLayout;
