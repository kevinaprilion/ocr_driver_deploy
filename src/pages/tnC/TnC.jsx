import React from 'react'
import { useQuery } from "react-query";
import { InformationRequest } from "../../apis/information/InformationRequest";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



function TnC() {

    const { data, isLoading } = useQuery("TnC", InformationRequest.getTnC, {
        refetchOnWindowFocus: false,
    });

    return isLoading ? (
        <div className="flex justify-center mt-20">
            <Loading />
        </div>
    ) : (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-biru md:w-1/3 w-full h-full shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start ">
                            <Link to="/driver/information">
                                <div className="text-white ml-5 mr-28 py-6">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6">
                                Syarat & Ketentuan
                        </div>
                        </div>
                        <div className="h-screen flex flex-wrap justify-center">
                            <div className=" h-5/6 w-11/12 bg-white rounded-t-md rounded-b-md  pb-5">

                                <div className="px-5">
                                    {data.content}
                                    {/* 
                                    <div className=" mt-2 text-xl break-words font-sans font-bold">
                                        1. Syarat
                            </div>

                                    <div className=" mt-2 text-base break-words font-sans font-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                            </div>

                                    <div className=" mt-2 text-xl break-words font-sans font-bold">
                                        2. Ketentuan
                            </div>

                                    <div className=" mt-2 text-base break-words font-sans font-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi
                            </div> */}


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default TnC
