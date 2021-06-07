import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Link } from "react-router-dom";

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

function NewPassword() {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [maxWidth] = useState('xs');

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/check_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-base font-semibold flex justify-center mt-5">
                    Password Berhasil Diubah
                </div>
                <div className="font-sans text-abuabuPrimary text-base font-medium flex justify-center text-center mt-2">
                    Silahkan Login kembali
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
                        component={Link}
                        to="/login"
                    >

                        <div className="text-sans text-white text-2xl font-semibold">
                            Login
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
                        <div className="bg-cover h-40  rounded-t-none justify-center bg-no-repeat" style={{ backgroundImage: "url(" + "../asset/banners/login_banner.png" + ")" }}>
                        </div>



                        <div className="-mt-8 bg-white rounded-t-3xl items-center flex flex-col">
                            <div className="flex justify-center -mt-14 bg-white w-24 shadow-md">
                                <img src="../asset/logos/ocr_logo.png" alt="logo" width="110px" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-start ml-5 mt-5 ">
                            <div className="font-sans text-biru text-xl font-semibold ">
                                Lupa Password
                            </div>
                            <div className="font-sans text-hitam text-sm font-medium mt-2">
                                Minimal 5 karakter
                        </div>
                        </div>

                        <div className="w-full mt-5 flex flex-col justify-center px-6">
                            {/* <div className="flex justify-center "> */}
                            <form>
                                <TextField
                                    required
                                    fullWidth
                                    id="standard-required"
                                    label="PASSWORD BARU"
                                    type="password"
                                    autoComplete="new-password"
                                    variant="outlined"
                                    margin="normal"
                                    placeholder="Buat password baru"
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />

                                <TextField
                                    required
                                    fullWidth
                                    id="filled-password-input"
                                    label="KONFIRMASI PASSWORD"
                                    type="password"
                                    autoComplete="new-password"
                                    variant="outlined"
                                    margin="normal"
                                    placeholder="Konfirmasi password baru"
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />



                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: "153px" }}
                                    onClick={handleOpenModal}
                                >

                                    <div className="text-sans text-white text-xl font-semibold">
                                        Simpan
                                 </div>
                                </Button>
                            </form>
                            {/* </div> */}
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
            </div >
        </div >
    )
}

export default NewPassword