import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardHistory from '../../components/cardHistory/CardHistory'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const d = new Date();
let month = ("0" + (d.getMonth() + 1)).slice(-2);
let date = ("0" + d.getDate()).slice(-2);
let datestringNow = d.getFullYear() + "-" + month + "-" + date;
let datebefore = ("0" + (d.getDate() - 7 < 0 ? 1 : d.getDate() - 7)).slice(-2);
let datestringFrom = d.getFullYear() + "-" + month + "-" + datebefore;
let monthBefore = ("0" + (d.getMonth())).slice(-2);
let dateMax = datestringNow

function History() {
    const [dateFrom, setDateFrom] = useState(datestringFrom)
    const [dateTo, setDateTo] = useState(datestringNow)
    return (
        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full ">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-center ">
                            <Link to="/driver/report">
                                <div className="text-white py-6 float-left">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-24 sm:px-16">
                            History Top Up
                            </div>
                            <div className="text-white py-6 float-right">
                                <SystemUpdateAltIcon />
                            </div>
                        </div>
                        <div className="flex flex-row justify-start p-3 shadow-md h-20">
                            <div className="flex flex-col justify-center">
                                <div className="font-sans text-base font-medium text-abuabuPrimary">
                                    Dari tanggal
                                </div>
                                <div className="font-sans font-bold">
                                    <input type='date' style={{fontWeight:"bold"}} className="form-control" value={dateFrom} max={dateTo}></input>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center ml-3">
                                <div className="font-sans text-base font-medium text-abuabuPrimary">
                                Sampai Tanggal
                                </div>
                                <div className="font-sans font-bold">
                                    <input type='date' style={{fontWeight:"bold"}} className="form-control" value={dateTo} min={dateFrom} max={dateMax}></input>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <CardHistory />
                        </div>
                        <div className="flex flex-col justify-center">
                            <CardHistory />
                        </div>
                        <div className="flex flex-col justify-center">
                            <CardHistory />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default History
