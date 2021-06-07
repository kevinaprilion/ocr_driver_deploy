import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class ProfileRequest {
  static getProfile = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/get_profile");
      const res = data.data;
      // console.log(data)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  static check_old_password = async (history, values) => {
    try {
      axiosInstance()
        .post("driver/request_update_password", {
          previous_password: values.previous_password,
        })
        .then(({ data }) => {
          history.push("/profile/changepassword", data);
        })
        .catch((err) => Handler("error", "Invalid Password!"));
    } catch (error) {
      console.log(error);
    }
  };

  static change_password = async (values, handleOpenModal) => {
    try {
      axiosInstance()
        .patch("driver/update_password", {
          new_password_key: values.new_password_key,
          password: values.password,
          confirmation_password: values.confirmation_password,
        })
        .then(({ data }) => {
          handleOpenModal();
        })
        .catch((err) => Handler("error", "Invalid Password!"));
    } catch (error) {
      console.log(error);
    }
  };
}
