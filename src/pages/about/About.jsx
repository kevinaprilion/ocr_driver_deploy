import React from 'react'
import { useQuery } from "react-query";
import { InformationRequest } from "../../apis/information/InformationRequest";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReactHtmlParser from 'react-html-parser'

function About() {

    const { data, isLoading } = useQuery("about", InformationRequest.getAbout, {
        refetchOnWindowFocus: false,
    });


    return isLoading ? (
        <div className="flex justify-center mt-20">
            <Loading />
        </div>
    ) : (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-biru md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start ">
                            <Link to="/driver/information">
                                <div className="text-white ml-5 mr-28 py-6">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6 ml-10">
                                Tentang
                        </div>
                        </div>
                        <div className="h-full flex flex-wrap justify-center">
                            <div className=" h-5/6 w-11/12 bg-white rounded-t-md rounded-b-md">

                                <div className="grid grid-cols-2 px-5">
                                    <div className="col-span-2 mt-2 flex justify-center">
                                        <img src="../asset/banners/about_banner.png" alt="berita" width="150px" />
                                    </div>

                                    <div className="col-span-2 mt-2 text-xl break-words font-sans font-bold">
                                        OCR Indo
                                </div>

                                    <div className="col-span-2 mt-2 text-base break-words font-sans text-abuabuPrimary">
                                        versi 1.0
                            </div>

                                    <div className="col-span-2 mt-2 text-base break-words font-sans font-medium pb-5">
                                        {ReactHtmlParser(data.content)}
                                        {/* OCR Indonesia adalah sebuah lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetu */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default About
