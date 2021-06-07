import React, { useState, useEffect } from 'react'
import { useQuery } from "react-query";
import Grid from '@material-ui/core/Grid'
import Loading from "../../components/loading/Loading";
import { makeStyles, useTheme } from '@material-ui/core'
import { AdsRequest } from "../../apis/ads/AdsRequest";
import { Carousel } from 'react-responsive-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GetAds from './component/GetAds'
import CircularProgress from '@material-ui/core/CircularProgress'









export default function Ads() {

    const theme = useTheme()



    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    })
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    const { data, isLoading } = useQuery("ads", AdsRequest.getBanner, {
        refetchOnWindowFocus: false,
    });

    console.log(data)

    return isLoading ? (
        <div className="flex justify-center mt-20">
            <Loading />
        </div>
    ) : (
        <div>
            <Grid container justify="center">
                <Grid item justify="center" align="center" xs={12}>
                    <div class="carousel-wrapper">
                        <Carousel
                            infiniteLoop
                            autoPlay
                            stopOnHover
                            showIndicators={true}
                            showStatus={false}
                            showThumbs={false}
                            showIndicators={false}
                            // dynamicHeight
                            // style={{color:'white'}}
                            width={isDesktop ? "150px" : "150px"}
                            height={isDesktop ? "100px" : "100%"}
                            // statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <IconButton type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                                        <ArrowBackIosIcon />
                                    </IconButton>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (

                                    <IconButton type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                                        <ArrowForwardIosIcon />
                                    </IconButton>

                                )
                            }

                        >

                            {/* {Object.entries(data).map((data, index) => {
                                // console.log(data)
                                return <GetAds data={data} key={data.id} />
                            })} */}

                            {Object.entries(data).map((data, index) => {
                                console.log(data)
                                return <img classname="h-40" src={data[1].photo} alt="ads" />
                            })}
                        </Carousel>
                    </div>
                </Grid>
            </Grid>
        </div>



    );
}




