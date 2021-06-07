import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import HistoryIcon from '@material-ui/icons/History';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { Link } from "react-router-dom";



function Report() {

    return (
        <div className="h-full w-full ">

            <Link to="/report/absent">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <TransferWithinAStationIcon fontSize="large" />
                    </div>
                    <div className='sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        Absen
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/report/expense">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <CompareArrowsIcon fontSize="large" />
                    </div>
                    <div className='sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        Pengeluaran
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/report/history">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <HistoryIcon fontSize="large" />
                    </div>
                    <div className='sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        History Top Up
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            

        </div>
    )
}

export default Report
