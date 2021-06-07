import React from 'react'
import { useQuery } from "react-query";
import { NewsRequest } from "../../apis/news/NewsRequest";
import CardNews from '../../components/cardNews/CardNews'
import Loading from "../../components/loading/Loading";



function News() {

    const { data, isLoading } = useQuery("berita", NewsRequest.getNews, {
        refetchOnWindowFocus: false,
    });

    return isLoading ? (
        <div className="flex justify-center mt-20">
            <Loading />
        </div>
    ) : (
        <div className="h-full w-full ">
            {console.log(data)}
            { Object.entries(data).map((data, index) => {
                // console.log(data)
                return (<div className="flex flex-col justify-center">
                    <CardNews key={index} data={data} />
                </div>)
            })}
            {/* <div className="flex flex-col justify-center">
                <CardNews data={data} />
            </div> */}


        </div>
    );
}

export default News
