import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { RegisterFormInput } from "./../models/auth";

import { LOGIN, REGISTER } from "~/graphql/mutations";

import { AuthOutput, LoginFormInput } from "~/models";

export default function useAuthentication() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [login] = useMutation<{ login: AuthOutput }>(LOGIN);
  const [register] = useMutation<{ createUser: AuthOutput }>(REGISTER);

  const handleLogin = (value: LoginFormInput) => {
    setLoading(true);
    login({
      variables: {
        ...value,
      },
      onCompleted: ({ login: res }) => {
        localStorage.setItem("access_token", res.token);
        setLoading(false);
        navigate(state?.prevUrl || "/");
      },
      onError: (err) => {
        setErrors(err.message);
        setLoading(false);
      },
    });
  };

  const handleRegister = (value: RegisterFormInput) => {
    setLoading(true);
    register({
      variables: {
        email: value.email,
        password: value.password,
        fullName: `${value.firstName} ${value.lastName}`,
      },
      onCompleted: ({ createUser: res }) => {
        localStorage.setItem("access_token", res.token);
        setLoading(false);
        navigate("/");
      },
      onError: (err) => {
        setErrors(err.message);
        setLoading(false);
      },
    });
  };

  return { loading, errors, handleLogin, handleRegister };
}
