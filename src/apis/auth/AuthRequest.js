import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";
import Cookies from 'js-cookie';

export class AuthRequest {
  static login = (values, history, setWithExpiry) => {
    axiosInstance()
      .post("driver/login", {
        username: values.username,
        password: values.password,
      })
      .then(({ data }) => {
        const token = data.data.token;
        setWithExpiry("token", token, 3600000);
        history.push("/driver/dashboard");
      })
      .catch((err) => Handler("error", "Login Unsuccesfully!"));
  };

  static logout = (history) => {
    axiosInstance()
      .post("driver/logout")
      .then(({ data }) => {
        Cookies.remove("token");
        history.push("/login");
      })
      .catch((err) => Handler("error", "logout Unsuccesfully!"));
  };
}
