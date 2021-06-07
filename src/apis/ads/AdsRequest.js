import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class AdsRequest {
  static getBanner = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/dashboard_banner");
      const res = data.data;
      // console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  
}
