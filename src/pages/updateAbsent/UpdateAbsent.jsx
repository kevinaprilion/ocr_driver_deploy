import React, { useState } from 'react'
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

let hour = ("0" + (d.getHours())).slice(-2);
let minute = ("0" + d.getMinutes()).slice(-2);
let time = hour + ":" + minute;

function UpdateAbsent() {
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
            date: datestringNow,
            time_in: time,
            time_out: time,
            additional_info: "",
            vehicle_mileage_after: "",
            vehicle_mileage_before: "",
        },
        // validationSchema: Yup.object({
        //     date: Yup.string()
        //         .required("Harus diisi!")
        //         .min(6, "Harus 6 karakter atau lebih!"),
        // }),
        onSubmit: (values) => {
            AttendRequest.UpdateAttend(values, handleOpenModal);
        },
    });

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/alert_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-base font-semibold flex justify-center mt-5">
                    Absen Anda Sudah di Update

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
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-28 sm:px-20">
                                Revisi Absen
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
                                                <TextField type='date' style={{ width: "100%" }} className="form-control" name="date"
                                                    helperText={
                                                        touched.date ? errors.date : ""
                                                    }
                                                    error={
                                                        touched.date &&
                                                        Boolean(errors.date)
                                                    }
                                                    {...getFieldProps("date")}
                                                // InputProps={{ inputProps: { min: datestringNow, max: datestringNow } }}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Jam Masuk Tercatat
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <TextField type='time' style={{ width: "100%" }} className="form-control"
                                                    name="time_in"
                                                    helperText={
                                                        touched.time_in ? errors.time_in : ""
                                                    }
                                                    error={
                                                        touched.time_in &&
                                                        Boolean(errors.time_in)
                                                    }
                                                // {...getFieldProps("time_in")}
                                                // InputProps={{ inputProps: { min: time, max: time } }}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Jam Pulang Tercatat
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <TextField type='time' style={{ width: "100%" }} className="form-control"
                                                    name="time_out"
                                                    helperText={
                                                        touched.time_out ? errors.time_out : ""
                                                    }
                                                    error={
                                                        touched.time_out &&
                                                        Boolean(errors.time_out)
                                                    }
                                                // {...getFieldProps("time_out")}
                                                // InputProps={{ inputProps: { min: time, max: time } }} 
                                                />
                                            </div>

                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Jam Masuk Revisi
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <TextField type='time' style={{ width: "100%" }} className="form-control"
                                                    name="time_in"
                                                    helperText={
                                                        touched.time_in ? errors.time_in : ""
                                                    }
                                                    error={
                                                        touched.time_in &&
                                                        Boolean(errors.time_in)
                                                    }
                                                    {...getFieldProps("time_in")}
                                                // InputProps={{ inputProps: { min: time, max: time } }}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Jam Pulang Revisi
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <TextField type='time' style={{ width: "100%" }} className="form-control"
                                                    name="time_out"
                                                    helperText={
                                                        touched.time_out ? errors.time_out : ""
                                                    }
                                                    error={
                                                        touched.time_out &&
                                                        Boolean(errors.time_out)
                                                    }
                                                    {...getFieldProps("time_out")}
                                                // InputProps={{ inputProps: { min: time, max: time } }} 
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
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                KM Kendaraan Masuk
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium ">
                                                <TextField
                                                    required
                                                    fullWidth
                                                    type="number"
                                                    id="standard-start-adornment"
                                                    placeholder="Masukkan Km Kendaraan"
                                                    // style={{color:'red'}}
                                                    // className={clsx(classes.margin, classes.textField)}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end" >Km</InputAdornment>,
                                                    }}
                                                    name="vehicle_mileage_after"
                                                    helperText={
                                                        touched.vehicle_mileage_after ? errors.vehicle_mileage_after : ""
                                                    }
                                                    error={
                                                        touched.vehicle_mileage_after &&
                                                        Boolean(errors.vehicle_mileage_after)
                                                    }
                                                    {...getFieldProps("vehicle_mileage_after")}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                KM Kendaraan Pulang
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium ">
                                                <TextField
                                                    required
                                                    fullWidth
                                                    type="number"
                                                    id="standard-start-adornment"
                                                    placeholder="Masukkan Km Kendaraan"
                                                    // style={{color:'red'}}
                                                    // className={clsx(classes.margin, classes.textField)}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end" >Km</InputAdornment>,
                                                    }}
                                                    name="vehicle_mileage_before"
                                                    helperText={
                                                        touched.vehicle_mileage_before ? errors.vehicle_mileage_before : ""
                                                    }
                                                    error={
                                                        touched.vehicle_mileage_before &&
                                                        Boolean(errors.vehicle_mileage_before)
                                                    }
                                                    {...getFieldProps("vehicle_mileage_before")}
                                                />
                                            </div>
                                            <div className="mt-10">

                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    // onClick={handleOpenModal}
                                                // startIcon={<SendIcon fontSize='big'/>}
                                                >

                                                    <div className="text-sans text-white text-base font-semibold h-5">
                                                        Absen Revisi
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

export default UpdateAbsent
