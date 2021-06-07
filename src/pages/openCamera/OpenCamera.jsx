import React, { useState,useRef } from 'react'
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
import { Camera } from 'react-cam';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        width: 400,
        borderTopLeftRadius: '2%',
        borderTopRightRadius: '2%',
        borderBottomLeftRadius: '2%',
        borderBottomRightRadius: '2%',

        // height: 600
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 20px 20px 20px',
    },

    modalHeader: {
        padding: '15px 30px 5px 30px',
        borderBottom: '1px solid #eee'
    },
    modalFooter: {
        padding: '0 20px 20px 20px',
    },
}));


function capture(imgSrc) {
    console.log(imgSrc);
}
function OpenCamera() {
    const theme = useTheme();

    const classes = useStyles();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    })

    const [openModal, setOpenModal] = useState(false);
    const [maxWidth] = useState('xs');

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        console.log(dataUri);
    }

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/alert_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-base font-semibold flex justify-center mt-5">
                    Anda Sudan Absen Pulang

                </div>

            </div>
            <div id="modal-footer" className={classes.modalFooter}>
                <div>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleCloseModal}
                    // component={Link}
                    // to="/driver/profile"
                    >

                        <div className="text-sans text-white text-2xl font-semibold">
                            Kembali
                         </div>
                    </Button>
                </div>
            </div>

        </div>
    );
    const cam = useRef(null);
    return (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-center ">
                            <Link to="/driver/absent">
                                <div className="text-white py-6 float-left">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-28 sm:px-20">
                                Camera
                            </div>
                        </div>

                        <div className="h-full flex flex-wrap justify-center">
                            <div>
                                <div className=" justify-center flex flex-col">

                                    <div className="h-screen">
                                        {/* <Camera
                                            onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                                            isFullscreen={true}
                                        /> */}
                                        <Camera
                                            showFocus={true}
                                            front={false}
                                            capture={capture}
                                            ref={cam}
                                            width="800px"
                                            height="200px"
                                            focusWidth="800px"
                                            focusWidth="200px"
                                            // focusHeight="60%"
                                            btnColor="white"
                                        />
                                        <button onClick={img => cam.current.capture(img)}>Take image</button>
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

export default OpenCamera
