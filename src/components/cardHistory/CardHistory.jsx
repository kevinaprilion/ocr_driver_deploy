import React from 'react'



import { Link } from "react-router-dom";

function CardHistory() {
    return (

        <div className="shadow-md h-28 w-full p-4">
            <div className="grid grid-rows-4 grid-cols-3 grid-flow-row">
                <div className="text-xl break-words font-sans text-black font-medium">
                TOP UP
                </div>
                <div className="md:-ml-16 sm:-ml-10 mt-1 text-sm break-words font-sans text-black">
                    24/10/2020
                </div>
                <div className="md:-ml-32 sm:-ml-20 mt-1 text-sm break-words font-sans text-black">
                    • 07.00 WIB
                </div>
                <div className="mt-1 col-span-2 text-xl break-words font-sans font-bold text-green-400">
                + Rp 1.000.000 
                </div>
                <div className="mt-1 ml-8 text-base break-words font-sans font-semibold text-biru">
                Oleh Admin
                </div>
                <div className="col-span-3 mt-1 text-sm break-words font-sans font-medium text-abuabuPrimary">
                Saldo sekarang :  Rp 2.000.000
                </div>


            </div>

        </div>


    )
}

export default CardHistory
