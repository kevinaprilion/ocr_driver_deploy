import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from "react-router-dom";



function AbsentPage() {

    return (
        <div className="h-full w-full ">
            <div className="bg-biru h-28 rounded-b-3xl">
                <div className="flex justify-start">
                    <div className="ml-3 font-sans text-abuabuPrimary">
                        Batas Akhir Revisi
                    </div>
                    <div className="ml-3 font-sans text-white">
                        Tanggal 13
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-5 gap-24">
                    <div className="flex flex-col justify-center">
                        <div className="font-sans text-base font-medium text-abuabuPrimary">
                            Jam Siap
                        </div>
                        <div className="font-sans font-bold text-white text-lg">
                            07.00
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="font-sans text-base font-medium text-abuabuPrimary">
                            Jam Masuk
                        </div>
                        <div className="font-sans font-bold text-white text-lg">
                            09.00
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="font-sans text-base font-medium text-abuabuPrimary">
                            Jam Pulang
                        </div>
                        <div className="font-sans font-bold text-white text-lg">
                            17.00
                        </div>
                    </div>
                </div>

            </div>
            <Link to="/absent/absent-in">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Absen Masuk
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/absent/absent-out">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Absen Pulang
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/absent/permission">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Ijin tidak masuk
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/absent/holiday">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Libur
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/absent/update-absent">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Revisi Absen
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/absent/update-permission">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='mt-1 break-words text-lg font-sans font-medium'>
                        Revisi Izin/Libur
                    </div>
                    <div className='md:ml-60 sm:ml-52 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>


        </div>
    )
}

export default AbsentPage
