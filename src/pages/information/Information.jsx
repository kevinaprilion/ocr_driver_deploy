import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Link } from "react-router-dom";



function Information() {

    return (
        <div className="h-full w-full ">

            <Link to="/information/faq">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <HelpOutlineIcon fontSize="large" />
                    </div>
                    <div className=' sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        Tanya Jawab
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/information/about">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <InfoOutlinedIcon fontSize="large" />
                    </div>
                    <div className=' sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        Tentang
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/information/contact">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <MailOutlinedIcon fontSize="large" />
                    </div>
                    <div className=' sm:-ml-14 mt-1 md:-ml-20 break-words text-xl font-sans font-medium'>
                        Kontak
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

            <Link to="/information/termandcondition">
                <div className="shadow-md h-16 w-full p-4 bg-white grid grid-cols-3 grid-row-1 mt-2 ">
                    <div className='ml-2'>
                        <DescriptionOutlinedIcon fontSize="large" />
                    </div>
                    <div className=' sm:-ml-14 mt-1 md:-ml-20 break-words text-lg font-sans font-medium'>
                        Syarat & Ketentuan
                    </div>
                    <div className='ml-24 mt-1 break-words font-sans font-bold'>
                        <ChevronRightIcon />
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Information
