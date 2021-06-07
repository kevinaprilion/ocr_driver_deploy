import React from "react";
import { Link } from "react-router-dom";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import CommuteOutlinedIcon from "@material-ui/icons/CommuteOutlined";
import LocalGasStationOutlinedIcon from "@material-ui/icons/LocalGasStationOutlined";
import LocalParkingOutlinedIcon from "@material-ui/icons/LocalParkingOutlined";
import { PengeluaranRequest } from "../../apis/pengeluaran/PengeluaranRequest";
import { useQuery } from "react-query";
import Loading from "../../components/loading/Loading";
import moment from 'moment'

function ExpensePage() {
  const { data, isLoading } = useQuery(
    "pengeluaran",
    PengeluaranRequest.getPengeluaran,
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(data, '<')
  return isLoading ? (
    <div className="flex justify-center mt-20">
      <Loading />
    </div>
  ) : (
    <div className="h-full w-full">
      <div className="h-36  rounded-t-none bg-biru">
        <div className="flex flex-col items-center">
          <div className="font-sans text-white font-medium text-xl mt-3">
            Saldo saat ini
          </div>
          <div className="font-sans text-white font-bold text-2xl">
           {data?.balance?.balance}
          </div>
        </div>
      </div>

      <div className="-mt-8 bg-white rounded-t-3xl items-center flex flex-col">
        <div className="flex justify-center -mt-6 bg-white md:w-96 sm:w-80 shadow-md rounded-t-3xl rounded-b-3xl p-2">
          <Link to="/pengeluaran/bensin">
            <div className="flex flex-col items-center w-20">
              <div className="">
                {/* <img src="../asset/icons/top_up-icon.png" alt="coin" width="40px" /> */}
                <LocalGasStationOutlinedIcon fontSize="large" color="primary" />
              </div>
              <div className="font-sans text-biru font-semibold text-base">
                Bensin
              </div>
            </div>
          </Link>
          <Link to="/pengeluaran/tol">
            <div className="flex flex-col items-center w-20">
              <div className="">
                {/* <img src="../asset/icons/top_up-icon.png" alt="coin" width="40px" /> */}
                <CommuteOutlinedIcon fontSize="large" color="primary" />
              </div>
              <div className="font-sans text-biru font-semibold text-base">
                Tol
              </div>
            </div>
          </Link>
          <Link to="/pengeluaran/parkir">
            <div className="flex flex-col items-center w-20">
              <div className="">
                {/* <img src="../asset/icons/top_up-icon.png" alt="coin" width="40px" /> */}
                <LocalParkingOutlinedIcon fontSize="large" color="primary" />
              </div>
              <div className="font-sans text-biru font-semibold text-base">
                Parkir
              </div>
            </div>
          </Link>
          <Link to="/pengeluaran/manual">
            <div className="flex flex-col items-center w-20">
              <div className="">
                {/* <img src="../asset/icons/top_up-icon.png" alt="coin" width="40px" /> */}
                <PostAddOutlinedIcon fontSize="large" color="primary" />
              </div>
              <div className="font-sans text-biru font-semibold text-base">
                Manual
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start ml-5 ">
        <div className="flex flex-col justify-start bg-white md:w-96 sm:w-80 shadow-md p-2 mt-2">
          <div className="font-sans text-abuabuPrimary font-semibold text-base ml-3">
            Limit Perbulan
          </div>
          <div className="flex flex-row justify-start ml-3">
            {/* <div className="font-sans text-abuabuPrimary font-medium text-base mr-5 mt-2 ml-3">
              RP
            </div> */}
            <div className="font-sans text-red-300 font-bold text-3xl">
            {data?.expense_rules?.limit}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start bg-white md:w-96 sm:w-80 shadow-md p-2 mt-2">
          <div className="font-sans text-abuabuPrimary font-semibold text-base ml-3">
            Saldo Minimum
          </div>
          <div className="flex flex-row justify-start">
            {/* <div className="font-sans text-abuabuPrimary font-medium text-base mr-5 mt-2 ml-3">
              RP
            </div> */}
            <div className="font-sans text-yellow-300 font-bold text-3xl ml-3">
            {data?.expense_rules?.min_balance}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start bg-white md:w-96 sm:w-80 shadow-md p-2 mt-2">
          <div className="font-sans text-abuabuPrimary font-semibold text-base ml-3">
            Top Up
          </div>
          <div className="flex flex-row justify-start">
            {/* <div className="font-sans text-abuabuPrimary font-medium text-base mr-5 mt-2 ml-3">
              RP
            </div> */}
            <div className="font-sans text-blue-300 font-bold text-3xl ml-3">
            {data?.expense_rules?.top_up}
            </div>
            <div className="font-sans text-blue-600 font-bold text-base md:ml-16 sm:ml-5 mt-2">
              Oleh Admin
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start ">
          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
            {data?.balance?.early_balance}
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Saldo Awal Periode
            </div>
          </div>

          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
            {moment(data?.validity_period?.start_period).format('ll')}
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Awal Periode
            </div>
          </div>

          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
            {moment(data?.validity_period?.end_period).format('ll')}
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Akhir Periode
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start">
          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
            {data.expense_rules.max_response_time} jam
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Max. Waktu Respon
            </div>
          </div>

          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
              {data.expense_rules.max_transfer_time} jam
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Max. Waktu Transfer
            </div>
          </div>

          <div className="flex flex-col justify-start bg-white md:w-32 sm:w-80 shadow-md p-2 mt-2">
            <div className="font-sans text-black font-bold text-base">
            {data.expense_rules.max_scan_time} jam
            </div>
            <div className="font-sans text-black font-medium text-xs mt-2">
              Max. Waktu Scan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensePage;
