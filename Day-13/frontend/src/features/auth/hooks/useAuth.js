import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { register, login, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password, rememberMe) => {
    setLoading(true);

    const response = await login(username, password);
    setUser(response.user);
    setLoading(false);

    const token = response.token;
    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);

    const response = await register(username, email, password);
    setUser(response.user);

    setLoading(false);
  };

  return { user, loading, handleRegister, handleLogin };
};
