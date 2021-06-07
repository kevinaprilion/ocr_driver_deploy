import React from 'react'
import { useQuery } from "react-query";
import { DashboardRequest } from "../../apis/dashboard/DashboardRequest";
import Loading from "../../components/loading/Loading";
import NumberFormat from 'react-number-format';
import AdsComponents from '../../components/ads/Ads'

function Dashboard() {

    const { data, isLoading } = useQuery("dasboard", DashboardRequest.getInfo, {
        refetchOnWindowFocus: false,
    });
    console.log(data)
    return isLoading ? (
        <div className="flex justify-center mt-20">
            <Loading />
        </div>
    ) : (
        <div className="h-full w-full">
            <div className="bg-biru h-40 rounded-t-none flex justify-center">
                <div className="h-40" >
                    <AdsComponents />
                    {/* <img src="../asset/banners/banner-test.png" alt="coin" /> */}
                </div>
            </div>
            <div className="-mt-8 bg-white rounded-t-3xl justify-center flex flex-col">
                <div className=" ml-5">

                    <div className="font-sans py-3 text-biru text-base font-medium ml-5">
                        {data.driver_name}
                    </div>

                    <div className="grid grid-cols-2 gap-2 flex-col">

                        <div className="shadow-md h-28 md:w-50 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/coin_icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Pengeluaran Bulan Ini
                                </div>
                            </div>
                            <div className="col-span-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    RP <NumberFormat value={data.total_expense.toFixed(0)} decimalSeparator="," displayType={'text'} thousandSeparator="." />
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md h-28 md:w-48 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/top_up-icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Top Up
                                 </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    {data.total_top_up}
                                </div>
                                <div className="font-sans font-medium text-base">
                                    Kali
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md h-28 md:w-48 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/struck-icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Scan Struck
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    {data.total_scan}
                                </div>
                                <div className="font-sans font-medium text-base">
                                    Kali
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md h-28 md:w-48 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/petrol-icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Scan Bensin
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    {data.total_fuel_scan}
                                </div>
                                <div className="font-sans font-medium text-base">
                                    Kali
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md h-28 md:w-48 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/tol_icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Scan Tol
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    {data.total_toll_scan}
                                </div>
                                <div className="font-sans font-medium text-base">
                                    Kali
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md h-28 md:w-48 sm:w-44 p-4 bg-white grid grid-rows-3 grid-flow-col gap-4">
                            <div className="col-span-2 grid grid-cols-2">
                                <div className='col-start-1'>
                                    <img src="../asset/icons/parkir_icon.png" alt="coin" width="40px" />
                                </div>
                                <div className="text-xs break-words">
                                    Total Scan Parkir
                                </div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 mt-5">
                                <div className="font-sans font-semibold text-xl">
                                    {data.total_parking_scan}
                                </div>
                                <div className="font-sans font-medium text-base">
                                    Kali
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard
