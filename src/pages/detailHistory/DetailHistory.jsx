import React from 'react'
import { Link } from "react-router-dom";
import CardExpense from '../../components/cardExpense/CardExpense'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';

function DetailHistory() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    })
    return (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-center ">
                            <Link to="/report/expense">
                                <div className="text-white py-6 float-left">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-8 sm:px-0">
                                Detail Pengeluaran Bensin
                            </div>
                            <div className="text-white py-6 float-right">
                                <SystemUpdateAltIcon />
                            </div>
                        </div>

                        <div className="h-full flex flex-wrap justify-center">
                            <div>
                                <div className=" justify-center flex flex-col">
                                    <div className=" p-3">
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Tanggal Transaksi
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            28 September 2020
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Jam Transaksi
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            17.30
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Lokasi
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            Jl. Ahmad yani No 12
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Tipe Bensin
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            Pertamax
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Liter
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            28.14 Liter
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Total
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            200.000
                                        </div>
                                        <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                            Keterangan
                                        </div>
                                        <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    </div>
                                </div>




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DetailHistory
