import { useMutation } from "@apollo/client";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { LOGIN, REGISTER } from "~/graphql/mutations";
import { AuthToken, LoginForm, RegisterForm } from "~/models";

export default function useAuthentication() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [login] = useMutation<{ login: AuthToken }>(LOGIN);
  const [register] = useMutation<{ createUser: AuthToken }>(REGISTER);

  const handleLogin = (value: LoginForm) => {
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

  const handleRegister = (value: RegisterForm) => {
    const form = {
      email: value.email,
      password: value.password,
      fullName: value.fullName,
      address: value.address,
      dob: moment(value.dob).format("YYYY-MM-DD"),
      phoneNumber: value.phone,
    };
    setLoading(true);
    register({
      variables: { form },
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
