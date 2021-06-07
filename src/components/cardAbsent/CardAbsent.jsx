import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';


import { Link } from "react-router-dom";

function CardAbsent() {
    return (

        <div className="shadow-md h-32 w-full p-4">
            <div className="grid grid-rows-4 grid-cols-3 grid-flow-row">
                <div className="text-xl break-words font-sans text-black font-bold">
                    Senin
                </div>
                <div className="md:-ml-20 sm:-ml-12 mt-1 text-sm break-words font-sans text-abuabuPrimary">
                    24/10/2020
                </div>
                <div className="mt-1 text-sm break-words font-sans text-green-400 font-bold">
                    •  Masuk
                </div>
                <div className="w-20 text-sm break-words font-sans font-medium text-yellow-800 bg-yellow-300">
                    Jam Masuk
                </div>
                <div className="w-20 col-span-2 text-sm break-words font-sans font-medium text-green-800 bg-green-200">
                    Jam Pulang
                </div>
                <div className="w-20 text-sm break-words font-sans font-medium ">
                07.00 WIB
                </div>
                <div className="w-20 col-span-2 text-sm break-words font-sans font-medium ">
                17.00 WIB
                </div>
                <div className=" text-sm break-words font-sans font-medium text-abuabuPrimary">
                Total jam  : 17 Jam
                </div>

                
            </div>

        </div>


    )
}

export default CardAbsent
