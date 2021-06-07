import Handler from "../../components/handler/Handler";
import axiosInstance from "../../config/axiosInstance";

export class InformationRequest {

  static getTnC = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/informasi/sk/get");
      const res = data.data;
      // console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  static getAbout = async () => {
    console.log("data")
    try {
      const { data } = await axiosInstance().get("driver/informasi/tentang/get");
      const res = data.data;
      // console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  static sendContact = async (values, handleOpenModal) => {
    console.log(values)
    try {
        axiosInstance()
            .post("driver/informasi/kontak/send", {
                name: values.nama,
                email: values.email,
                content: values.content,
            })
            .then(({ data }) => {
                console.log(data)
                handleOpenModal();
            })
            .catch((err) => Handler("error", "Invalid Password!"));
    } catch (error) {
        console.log(error);
    }
};

  
}
