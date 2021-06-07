import React from 'react'



import { Link } from "react-router-dom";

function CardExpense() {
    return (
        <Link to="/history/slug">
            <div className="shadow-md h-28 w-full p-4">
                <div className="grid grid-rows-4 grid-cols-3 grid-flow-row">
                    <div className="text-xl break-words font-sans text-black font-semibold">
                        Bensin
                </div>
                    <div className="md:-ml-16 sm:-ml-10 mt-1 text-sm break-words font-sans text-black">
                        24/10/2020
                </div>
                    <div className="md:-ml-32 sm:-ml-20 mt-1 text-sm break-words font-sans text-black">
                        • 07.00 WIB
                </div>
                    <div className="col-span-3 text-xl break-words font-sans font-bold text-red-400">
                        Rp 200.000
                </div>
                    <div className="col-span-3 mt-1 text-sm break-words font-sans font-medium text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                </div>

            </div>
        </Link>

    )
}

export default CardExpense
