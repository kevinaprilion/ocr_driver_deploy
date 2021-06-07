import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { InformationRequest } from "../../apis/information/InformationRequest";
// import Loading from "../../components/loading/Loading";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
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

function About() {
    const theme = useTheme();

    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [maxWidth] = useState('xs');

    const handleOpenModal = () => {
        console.log("modal")
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    })

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/check_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-base font-semibold flex justify-center mt-5">
                    Anda Sudah Mengirim Pesan

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
    const { handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            nama: "",
            email: "",
            content: "",
        },
        // validationSchema: Yup.object({
        //     dateCheckIn: Yup.string()
        //         .required("Harus diisi!")
        //         .min(6, "Harus 6 karakter atau lebih!"),
        // }),
        onSubmit: (values) => {
            InformationRequest.sendContact(values, handleOpenModal);
        },
    });


    return (
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
                                Kontak
                        </div>
                        </div>

                        <div className="h-full flex flex-wrap justify-center">
                            <div className=" h-5/6 w-11/12 bg-white rounded-t-md rounded-b-md pb-5">

                                <div className="grid grid-cols-2 px-5 mt-2">
                                    <div className='col-span-2 mt-2 break-words font-sans font-medium'>
                                        Isi formulir dan tim kami akan menghubungi Anda dalam waktu 24 jam
                            </div>


                                    <div className="mt-2 text-xs break-words font-sans text-abuabuPrimary">
                                        <PersonIcon fontSize="inherit" /> Aditya Nugraha
                            </div>

                                    <div className="-ml-20 mt-2 text-xs break-words font-sans text-abuabuPrimary">
                                        <AccessTimeIcon fontSize="inherit" /> Minggu, 15 Nov 2020
                            </div>

                                    <div className="col-span-2 mt-2 text-xs break-words font-sans font-medium">
                                        <form onSubmit={handleSubmit}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="standard-required"
                                                label="NAMA"
                                                autoComplete="nope"
                                                variant="outlined"
                                                margin="normal"
                                                placeholder="Masukkan Nama"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name="nama"
                                                helperText={
                                                    touched.nama ? errors.nama : ""
                                                }
                                                error={
                                                    touched.nama &&
                                                    Boolean(errors.nama)
                                                }
                                                {...getFieldProps("nama")} />

                                            <TextField
                                                required
                                                fullWidth
                                                id="filled-email-input"
                                                label="EMAIL"
                                                type="email"
                                                variant="outlined"
                                                margin="normal"
                                                placeholder="Masukkan Email"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name="email"
                                                helperText={
                                                    touched.email ? errors.email : ""
                                                }
                                                error={
                                                    touched.email &&
                                                    Boolean(errors.email)
                                                }
                                                {...getFieldProps("email")} />
                                            <TextField
                                                required
                                                fullWidth
                                                id="filled-pesan-input"
                                                label="PESAN"
                                                variant="outlined"
                                                margin="normal"
                                                multiline
                                                rows={5}
                                                placeholder="Masukkan Pesan"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                name="content"
                                                helperText={
                                                    touched.content ? errors.content : ""
                                                }
                                                error={
                                                    touched.content &&
                                                    Boolean(errors.content)
                                                }
                                                {...getFieldProps("content")} />


                                            <Button
                                                fullWidth
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                style={{ marginTop: isDesktop ? "1rem" : "18vh" }}
                                                // component={Link}
                                                // to='/driver/dashboard'
                                            >

                                                <div className="text-sans text-white text-xl font-semibold">
                                                    Kirim Pesan
                                              </div>
                                            </Button>
                                        </form>
                                    </div>


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


    );
}

export default About
