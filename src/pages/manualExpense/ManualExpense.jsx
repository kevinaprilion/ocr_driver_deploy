import React, { useState } from 'react'
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Select from 'react-select'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import BorderColorIcon from '@material-ui/icons/BorderColor';

registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginFileRename,

);

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
        padding: '0 20px 0px 20px',
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
let datebefore = ("0" + (d.getDate() - 7 < 0 ? 1 : d.getDate() - 7)).slice(-2);
let datestringFrom = d.getFullYear() + "-" + month + "-" + datebefore;

let hour = ("0" + (d.getHours() + 1)).slice(-2);
let minute = ("0" + d.getMinutes()).slice(-2);
let time = hour + ":" + minute;

const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: "9999 !important" })
};

const initialFileState = {
    image: [{
        name: ''
    }]
};

function ManualExpense() {
    const theme = useTheme();
    const [dateFrom, setDateFrom] = useState(datestringFrom)
    const [dateTo, setDateTo] = useState(datestringNow)
    const [filesImage, setFilesImage] = useState(initialFileState);
    const classes = useStyles();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    })

    const [openModal, setOpenModal] = useState(false);
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);
    const [maxWidth] = useState('xs');

    const handleOpenModal = () => {
        setOpenModal(true);
        handleCloseModalConfirmation()
    };

    const handleOpenModalConfirmation = () => {
        setOpenModalConfirmation(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCloseModalConfirmation = () => {
        setOpenModalConfirmation(false);
    };

    const bodyConfirmation = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5 font-sans text-black text-sm font-medium">
                    Informasi berhasil di input.
                    Silahkan periksa kembali, jika terjadi kesalahan klik edit.
                    {/* Informasi <div className="font-bold px-1">berhasil </div> di input.Silahkan periksa kembali, jika terjadi <div className="font-bold">kesalahan </div> klik edit. */}
                </div>
                <div className="py-3">
                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            // value={idCategoryLayanan1 || 'null'}
                            value={"1"}
                            isClearable={true}
                            isSearchable={true}
                            name="menus"
                            placeholder="Pilih"
                            // options={categoryLayanan}
                            options={"kosong"}
                            // onChange={handleCategoryLayanan}
                            styles={selectStyles}
                        />
                    </div>
                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        Tanggal
                                            </div>
                    <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                        <input type='date' style={{ width: "100%" }} className="form-control" value={dateFrom} max={dateTo}></input>
                    </div>

                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        Jam
                                            </div>
                    <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                        <input type='time' style={{ width: "100%" }} className="form-control" value={time} max={time}  ></input>
                    </div>
                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        Total
                                            </div>
                    <div className="font-sans text-abuabuSecondary text-xl font-medium ">
                        <TextField
                            required
                            fullWidth
                            id="standard-start-adornment"
                            placeholder="Masukkan Km Kendaraan"
                            // style={{color:'red'}}
                            // className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start" >RP</InputAdornment>,
                            }}
                        />
                    </div>
                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        Foto
                                                    </div>
                    <div className="font-sans text-abuabuSecondary text-xl font-medium">
                        <FilePond
                            placeholder="IMG"
                            checkValidity
                            allowMultiple={false}
                            allowReplace
                            allowFileSizeValidation
                            allowFileTypeValidation
                            maxFileSize='1MB'
                            labelMaxFileSizeExceeded='File is too large'
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            labelFileTypeNotAllowed='File of invalid type'
                            allowFileRename={true}
                            // fileRenameFunction={file => {
                            //     const idPartner = JSON.parse(Cookies.get('user')).id_partner;
                            //     return `${idPartner + '-' + uuidv1()}${file.extension}`;
                            // }}
                            onupdatefiles={(fileItems) => {
                                // console.log(fileItems[0].file)
                                // Set current file objects to this.state
                                if (fileItems.length === 0) {
                                    setFilesImage({
                                        image: [{
                                            name: ''
                                        }]
                                    })
                                } else {
                                    setFilesImage({
                                        image: fileItems.map(fileItem => fileItem.file)
                                    })
                                }
                            }}>
                        </FilePond>
                    </div>
                    <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                        Keterangan
                                                    </div>
                    <div className="font-sans text-abuabuSecondary text-xl font-medium -mt-4">
                        <TextField
                            required
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
                            }} />
                    </div>


                </div>

            </div>
            <div id="modal-footer" className={classes.modalFooter}>
                <div>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleOpenModal}
                    // component={Link}
                    // to="/driver/profile"
                    >

                        <div className="text-sans text-white text-base font-semibold">
                            Submit
                         </div>
                    </Button>
                </div>
                <div className="flex flex-row justify-around mt-2">
                    <div className="w-40">
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            style={{ backgroundColor: "white" }}
                            onClick={handleCloseModalConfirmation}
                            startIcon={<RefreshIcon fontSize='big' color="primary" />}
                        // component={Link}
                        // to="/driver/profile"
                        >

                            <div className="text-sans text-biru text-base font-semibold">
                                Ulangi
                         </div>
                        </Button>
                    </div>
                    <div className="w-40">
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            style={{ backgroundColor: "white" }}
                            onClick={handleCloseModalConfirmation}
                            startIcon={<BorderColorIcon fontSize='big' color="primary" />}
                        // component={Link}
                        // to="/driver/profile"
                        >

                            <div className="text-sans text-biru text-base font-semibold">
                                Edit
                             </div>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );

    const body = (
        <div className={classes.paper}>

            <div className={classes.modalContent}>
                <div className="flex justify-center mt-5">
                    <img src="../asset/icons/check_icon.png" alt="check" width="180px" />
                </div>
                <div className="font-sans text-black text-2xl font-semibold flex justify-center py-5">
                    Input Pengeluaran Berhasil


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
                            <Link to="/driver/pengeluaran">
                                <div className="text-white py-6 float-left">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6  md:px-20 sm:px-12">
                                Pengeluaran Manual
                            </div>
                        </div>

                        <div className="h-full flex flex-wrap justify-center">
                            <div>
                                <div className=" justify-center flex flex-col">
                                    <form>
                                        <div className="md:w-96 sm:w-80 py-3">
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    // value={idCategoryLayanan1 || 'null'}
                                                    value={"1"}
                                                    isClearable={true}
                                                    isSearchable={true}
                                                    name="menus"
                                                    placeholder="Pilih"
                                                    // options={categoryLayanan}
                                                    options={"kosong"}
                                                    // onChange={handleCategoryLayanan}
                                                    styles={selectStyles}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Tanggal
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <input type='date' style={{ width: "100%" }} className="form-control" value={dateFrom} max={dateTo}></input>
                                            </div>

                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Jam
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium sm:mt-1">
                                                <input type='time' style={{ width: "100%" }} className="form-control" value={time} max={time}  ></input>
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Total
                                            </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium ">
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="standard-start-adornment"
                                                    placeholder="Masukkan Km Kendaraan"
                                                    // style={{color:'red'}}
                                                    // className={clsx(classes.margin, classes.textField)}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start" >RP</InputAdornment>,
                                                    }}
                                                />
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Foto
                                                    </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium">
                                                <FilePond
                                                    placeholder="IMG"
                                                    checkValidity
                                                    allowMultiple={false}
                                                    allowReplace
                                                    allowFileSizeValidation
                                                    allowFileTypeValidation
                                                    maxFileSize='1MB'
                                                    labelMaxFileSizeExceeded='File is too large'
                                                    acceptedFileTypes={['image/png', 'image/jpeg']}
                                                    labelFileTypeNotAllowed='File of invalid type'
                                                    allowFileRename={true}
                                                    // fileRenameFunction={file => {
                                                    //     const idPartner = JSON.parse(Cookies.get('user')).id_partner;
                                                    //     return `${idPartner + '-' + uuidv1()}${file.extension}`;
                                                    // }}
                                                    onupdatefiles={(fileItems) => {
                                                        // console.log(fileItems[0].file)
                                                        // Set current file objects to this.state
                                                        if (fileItems.length === 0) {
                                                            setFilesImage({
                                                                image: [{
                                                                    name: ''
                                                                }]
                                                            })
                                                        } else {
                                                            setFilesImage({
                                                                image: fileItems.map(fileItem => fileItem.file)
                                                            })
                                                        }
                                                    }}>
                                                </FilePond>
                                            </div>
                                            <div className="font-sans text-abuabuPrimary text-lg font-medium sm:mt-1">
                                                Keterangan
                                                    </div>
                                            <div className="font-sans text-abuabuSecondary text-xl font-medium -mt-4">
                                                <TextField
                                                    required
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
                                                    }} />
                                            </div>
                                            <div className="md:mt-12 sm:mt-10">

                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleOpenModalConfirmation}
                                                // startIcon={<SendIcon fontSize='big'/>}
                                                >

                                                    <div className="text-sans text-white text-base font-semibold h-5">
                                                        Kirim
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
                    <Modal
                        open={openModalConfirmation}
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
                        {bodyConfirmation}
                    </Modal>
                </div>
            </div>
        </div>


    )
}

export default ManualExpense
