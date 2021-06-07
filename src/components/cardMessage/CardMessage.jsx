import React from 'react'
import { Link } from "react-router-dom";

function CardMessage() {
    return (
        <Link to="/message/content">
            <div className="shadow-sm h-26 w-full p-4">
                <div className="grid grid-cols-3 grid-flow-col">
                    <div className='row-span-3 ml-3 mt-2'>
                        <img src="../asset/icons/mail_icon.png" alt="icon message" width="50px" />
                    </div>
                    <div className="-ml-10 row-span-2 text-sm break-words font-sans font-bold">
                        Permintaan top up diterima. Segera saya transfer ya.
                </div>
                    <div className="-ml-10 mt-2 text-xs break-words font-sans text-abuabuPrimary">
                        D124P1261611
                </div>
                    <div className="ml-7 text-xs break-words font-sans font-medium text-abuabuPrimary">
                        09.00 • 10/12/2020
                </div>
                    {/* <div className="-ml-10 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit"/> 08223329213
                </div>
                <div className="-ml-14 text-sm break-words font-sans">
                <CallIcon fontSize="inherit"/> 08223329213 
            </div> */}
                </div>

            </div>
        </Link>


    )
}

export default CardMessage
