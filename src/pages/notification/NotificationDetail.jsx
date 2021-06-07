import React, { useEffect, useState } from "react";
import CardNotification from "../../components/cardNotification/CardNotification";
import InfiniteScroll from "react-infinite-scroller";
import ContactSkeletonLoading from "../../components/loading/SkeletonLoading";
import axiosInstance from "../../config/axiosInstance";

const NotificationDetail = ({ page, setPage, exist_data }) => {
  const total = exist_data?.total;
  const data = exist_data?.data;
  console.log(total, "total");
  console.log(exist_data, "exist_data");

  const [notif, setNotif] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setNotif(data);
  }, [data]);

  const fetchMoredata = async () => {
    setFetching(true);
    const new_data = [...notif, ...(await getnotificationDtl())];
    setNotif(new_data);
    setFetching(false);
  };

  const getnotificationDtl = async () => {
    try {
      const results = await axiosInstance().get(`driver/notifikasi/get_all`, {
        params: {
          page: page + 1,
        },
      });
      const result = await results.data.data.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <InfiniteScroll
        initialLoad={false}
        loadMore={fetchMoredata}
        hasMore={more}
        loader={<ContactSkeletonLoading />}
      > */}
      {notif.map((el) => (
        <div className="flex flex-col justify-center">
          <CardNotification el={el} />
        </div>
      ))}
      {notif.length < total ? (
        <div className="flex justify-center my-6">
          {fetching ? (
            <ContactSkeletonLoading />
          ) : (
            <h1
              onClick={fetchMoredata}
              className="cursor-pointer hover:text-gray-700 font-semibold"
            >
              Load More
            </h1>
          )}
        </div>
      ) : (
        ""
      )}
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default NotificationDetail;
