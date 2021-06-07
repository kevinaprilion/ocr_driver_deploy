import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";

function Message() {

    return (
        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start overflow-auto">
                            <Link to="/driver/super-pic">
                                <div className="text-white ml-5 mr-28 py-6">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6 ml-10">
                                Pesan
                        </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 px-10 ">
                            <div className="font-sans text-base font-semibold">
                                Dari : Aidil Farhan
                        </div>
                            <div className="font-sans text-sm text-abuabuPrimary">
                                D124P1261611200943  |  09.00 • 10/12/2020
                        </div>
                            <div className="font-sans text-lg font-medium mt-4">
                                Saldo anda <span className="font-bold text-red-600">Rp 500.000</span> dibawah saldo minimum. Permintaan top up kepada Admin dilakukan pada <span className="font-bold">9 Desember 2020, 09.00</span> akan ditanggapi oleh Admin dalam <span className="font-bold">24 jam</span>.
                        </div>

                        </div>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Message