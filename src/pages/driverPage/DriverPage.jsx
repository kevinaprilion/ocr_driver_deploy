import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import Select from 'react-select'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


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

const selectStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: "9999 !important" })
};

const initialEditorState = ""
function DriverPage() {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [editorValue, setEditorValue] = useState(initialEditorState)
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
                <div className="font-sans text-biru text-base font-semibold flex justify-center mt-5">
                    Pesan Terkirim
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
        
            <div className="h-full w-full">
                <div className="bg-biru h-2 rounded-b-3xl flex flex-row justify-start ">

                </div>
                <div className="flex flex-row ml-8 mt-5">
                    <div className="mt-2 font-sans text-base font-medium">
                        Untuk
                    </div>
                    <div className="w-3/4 ml-5">
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
                </div>

                <div className="w-full mt-5 flex flex-col justify-center px-6">
                    <CKEditor
                        className={{}}
                        data={editorValue}
                        editor={ClassicEditor}
                        // onInit={editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log('Editor is ready to use!', editor);
                        // }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log(data)
                        }}
                        // onBlur={(event, editor) => {
                        //     console.log('Blur.', editor);
                        // }}
                        // onFocus={(event, editor) => {
                        //     console.log('Focus.', editor);
                        // }}
                        config={{
                            toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                            heading: {
                                options: [
                                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                                ]
                            }
                        }}
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "320px", position: "static" }}
                        onClick={handleOpenModal}
                    >

                        <div className="text-sans text-white text-xl font-semibold">
                            Kirim
                         </div>
                    </Button>
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

    )
}

export default DriverPage