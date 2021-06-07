import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardExpense from '../../components/cardExpense/CardExpense'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import Select from 'react-select'

const d = new Date();
let month = ("0" + (d.getMonth() + 1)).slice(-2);
let date = ("0" + d.getDate()).slice(-2);
let datestringNow = d.getFullYear() + "-" + month + "-" + date;
let datebefore = ("0" + (d.getDate() - 7 < 0 ? 1 : d.getDate() - 7)).slice(-2);
let datestringFrom = d.getFullYear() + "-" + month + "-" + datebefore;
let monthBefore = ("0" + (d.getMonth())).slice(-2);
let dateMax = datestringNow


const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: "9999 !important" })
};

function Expense() {
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
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-28 sm:px-20">
                                Pengeluaran
                            </div>
                            <div className="text-white py-6 float-right">
                                <SystemUpdateAltIcon />
                            </div>
                        </div>
                        <div className="flex md:flex-row sm:flex-col justify-start p-3 shadow-md md:h-20 sm:h-44">
                            <div className="flex flex-col justify-center">
                                <div className="font-sans text-base font-medium text-abuabuPrimary">
                                    Dari tanggal
                                </div>
                                <div className="font-sans font-bold">
                                    <input type='date' style={{ fontWeight: "bold" }} className="form-control" value={dateFrom} max={dateTo}></input>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center md:ml-3">
                                <div className="font-sans text-base font-medium text-abuabuPrimary">
                                    Sampai Tanggal
                                </div>
                                <div className="font-sans font-bold">
                                    <input type='date' style={{ fontWeight: "bold" }} className="form-control" value={dateTo} min={dateFrom} max={dateMax}></input>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center md:ml-3 w-28 ">
                                <div className="font-sans text-base font-medium text-abuabuPrimary">
                                    Kategori
                                </div>
                                <div className="font-sans font-bold">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        // value={idCategoryLayanan1 || 'null'}
                                        value={"1"}
                                        isClearable={true}
                                        isSearchable={true}
                                        name="menus"
                                        placeholder="Pilih"
                                        // options={categoryLayanan}
                                        options={"kosong"}
                                        // onChange={handleCategoryLayanan}
                                        styles={selectStyles}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <CardExpense />
                        </div>
                        <div className="flex flex-col justify-center">
                            <CardExpense />
                        </div>
                        <div className="flex flex-col justify-center">
                            <CardExpense />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expense
