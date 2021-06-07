import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { AttendRequest } from "../../apis/attend/Attend";
import { useFormik } from "formik";
import * as Yup from "yup";

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

const d = new Date();
let month = ("0" + (d.getMonth() + 1)).slice(-2);
let date = ("0" + d.getDate()).slice(-2);
let datestringNow = d.getFullYear() + "-" + month + "-" + date;

function Permission() {
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

    const { handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            datePermit: datestringNow,
            status: "izin",
            additional_info: "",
        },
        // validationSchema: Yup.object({
        //     datePermit: Yup.string()
        //         .required("Harus diisi!")
        //         .min(6, "Harus 6 karakter atau lebih!"),
        // }),
        onSubmit: (values) => {
            AttendRequest.permit(values, handleOpenModal);
        },
    });

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/alert_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-base font-semibold flex justify-center mt-5">
                Anda Telah Izin

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
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-24 sm:px-16">
                            Ijin Tidak Masuk
                            </div>
                        </div>

                        <div className="h-full flex flex-wrap justify-center">
                            <div>
                                <div className=" justify-center flex flex-col">
                                <form onSubmit={handleSubmit}>
                                        <div className="md:w-96 sm:w-80 py-3">
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Tanggal
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                            <TextField type='date' style={{ width: "100%" }} className="form-control" name="datePermit"
                                                    helperText={
                                                        touched.datePermit ? errors.datePermit : ""
                                                    }
                                                    error={
                                                        touched.datePermit &&
                                                        Boolean(errors.datePermit)
                                                    }
                                                    {...getFieldProps("datePermit")}
                                                InputProps={{ inputProps: { min: datestringNow} }}
                                                />
                                            </div>
                                
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Keterangan
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium -mt-4">
                                            <TextField
                                                    // required
                                                    fullWidth
                                                    id="filled-password-input"
                                                    // label="KONFIRMASI PASSWORD LAMA"
                                                    // type="password"
                                                    // autoComplete="new-password"
                                                    // variant="filled"
                                                    margin="normal"
                                                    placeholder="Masukkan Keterangan"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    name="additional_info"
                                                    helperText={
                                                        touched.additional_info ? errors.additional_info : ""
                                                    }
                                                    error={
                                                        touched.additional_info &&
                                                        Boolean(errors.additional_info)
                                                    }
                                                    {...getFieldProps("additional_info")}
                                                />
                                            </div>
                                            
                                            <div className="md:mt-80 sm:mt-5">

                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    // onClick={handleOpenModal}
                                                // startIcon={<SendIcon fontSize='big'/>}
                                                >

                                                    <div className="text-sans text-white text-base font-semibold h-5">
                                                    Ijin
                                                 </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>

                                </div>




                            </div>

                        </div>
                        
                    </div>
                </div>
                <div>
                    <Modal
                        open={openModal}
                        className={classes.modal}
                        onClose={handleCloseModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{ timeout: 500 }}
                        maxwidth={maxWidth}
                        maxheight={maxWidth}
                    >
                        {body}
                    </Modal>
                </div>
            </div>
        </div>


    )
}

export default Permission
