import React, { useEffect, useState } from "react";

import axiosInstance from "../../config/axiosInstance";
import { useQuery } from "react-query";
import Loading from "../../components/loading/Loading";
import NotificationDetail from "./NotificationDetail";

function Notification() {
  const [page, setPage] = useState(1);

  console.log(page, "page");

  const getnotification = async () => {
    try {
      const results = await axiosInstance().get(`driver/notifikasi/get_all`, {
        params: {
          page: page,
        },
      });
      const result = await results.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(
    ["getnotification", page],
    getnotification,
    { refetchOnWindowFocus: false }
  );
console.log(data,'main')
  return (
    <div className="mx-auto">
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <Loading />
        </div>
      ) : (
        //   <h1>re</h1>
        <div className="h-full w-full ">
          <NotificationDetail
            exist_data={data}
            setPage={setPage}
            page={page}
          />
        </div>
      )}
    </div>
  );
}

export default Notification;
