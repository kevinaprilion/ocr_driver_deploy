import axiosInstance from "../../config/axiosInstance";

export class PengeluaranRequest {
  static getPengeluaran = async () => {
    try {
      const { data } = await axiosInstance().get("driver/pengeluaran/get_all");
      const res = data.data;
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}
