import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class DashboardRequest {
  static getInfo = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/dashboard_information");
      const res = data.data;
      // console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  
}
