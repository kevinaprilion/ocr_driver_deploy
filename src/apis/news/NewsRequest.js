import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class NewsRequest {
  static getNews = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/berita/get_all");
      const res = data.data;
      // console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  
}
