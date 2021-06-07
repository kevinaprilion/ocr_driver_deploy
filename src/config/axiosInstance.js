import axios from "axios";
import Cookies from 'js-cookie';

function getWithExpiry(key) {
  const itemStr = Cookies.get(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);

  return item.value;
}

const axiosInstance = () => {
  const value = getWithExpiry("token");
  return axios.create({
    baseURL: "http://ocrindonesia.com/api/",
    headers: {
      authorization: `Bearer ${value}`,
    },
  });
};

export default axiosInstance;
