import React from 'react'
import { Link } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Slug() {
    return (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start ">
                            <Link to="/driver/news">
                                <div className="text-white ml-5 mr-28 py-6">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6 ml-10">
                                Berita
                        </div>
                        </div>
                        <div className="shadow-sm h-64 w-full p-4">
                            <div className="grid grid-cols-2 ml-3">
                                <div className='col-span-2 mt-2 break-words font-sans font-bold'>
                                    Tanggal 23-26 diliburkan karena ada event dengan Bank BCA
                            </div>

                                <div className="col-span-2 mt-2 flex justify-center">
                                    <img src="../asset/dummies/berita_dummy.png" alt="berita" width="150px" />
                                </div>

                                <div className="mt-2 text-xs break-words font-sans text-abuabuPrimary">
                                    <PersonIcon fontSize="inherit" /> Aditya Nugraha
                            </div>

                                <div className="-ml-24 mt-2 text-xs break-words font-sans text-abuabuPrimary">
                                    <AccessTimeIcon fontSize="inherit" /> Minggu, 15 Nov 2020
                            </div>

                                <div className="col-span-2 mt-2 text-xs break-words font-sans font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at aenean pharetra, sed in nunc cursus aliquet magna. Nec hac scelerisque morbi purus, fusce. Vitae molestie massa nibh fringilla at bibendum faucibus nibh. Tristique faucibus neque lacinia hac enim volutpat, pretium dolor, neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at aenean pharetra, sed in nunc cursus aliquet magna. Nec hac scelerisque morbi purus, fusce. Vitae molestie massa nibh fringilla at bibendum faucibus nibh. Tristique faucibus neque lacinia hac enim volutpat, pretium dolor, neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at aenean pharetra, sed in nunc cursus aliquet magna. Nec hac scelerisque morbi purus, fusce. Vitae molestie massa nibh fringilla at bibendum faucibus nibh. Tristique faucibus neque lacinia hac enim volutpat, pretium dolor, neque. Massa at aenean pharetra, sed in nunc cursus aliquet magna. Nec hac scelerisque morbi purus, fusce. Vitae molestie massa nibh fringilla at bibendum faucibus nibh. Tristique faucibus neque lacinia hac enim volutpat, pretium dolor, neque.
                            </div>




                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Slug
