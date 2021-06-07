import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory, useLocation } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProfileRequest } from "../../apis/profile/Profile";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: 400,
    borderTopLeftRadius: "2%",
    borderTopRightRadius: "2%",
    borderBottomLeftRadius: "2%",
    borderBottomRightRadius: "2%",

    // height: 600
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 20px 20px 20px",
  },

  modalHeader: {
    padding: "15px 30px 5px 30px",
    borderBottom: "1px solid #eee",
  },
  modalFooter: {
    padding: "0 20px 20px 20px",
  },
}));
function ChangePassword() {
  const { state } = useLocation();
  const { data } = state;
  const { new_password_key } = data;
  const history = useHistory();

  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      new_password_key: new_password_key,
      password: "",
      confirmation_password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Required!")
        .matches(lowercaseRegex, "One lowercase required!")
        .matches(uppercaseRegex, "One uppercase required!")
        .matches(numericRegex, "One number required!")
        .min(6, "The password must be of minimum 6 characters!"),
      confirmation_password: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          "The password confirmation does not match!"
        )
        .required("Required!"),
    }),
    onSubmit: (values) => {
      ProfileRequest.change_password(history, values, handleOpenModal);
    },
  });

  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [maxWidth] = useState("xs");

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
            to="/driver/profile"
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
      <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl">
        <div className="mx-auto">
          <div className="h-full w-full">
            <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start overflow-auto">
              <Link to="/driver/profile">
                <div className="text-white ml-5 mr-28 py-6">
                  <ArrowBackIosIcon />
                </div>
              </Link>
              <div className="font-sans text-white text-2xl font-semibold py-6">
                Ubah Password
              </div>
            </div>
            <div className="grid grid-cols-2 ml-8 mt-5">
              <div className="row-span-2">
                <img
                  src="../asset/icons/locked_icon.png"
                  alt="logo"
                  width="90px"
                />
              </div>

              <div className="-ml-24 font-sans text-biru text-xl font-semibold ">
                Masukkan Password Lama
              </div>
              <div className="-ml-24 font-sans text-hitam text-sm font-medium">
                Untuk melindungi keamanan akun Anda, masukkan password lama Anda
              </div>
            </div>

            <div className="w-full mt-5 flex flex-col justify-center px-6">
              {/* <div className="flex justify-center "> */}
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  id="filled-password-input"
                  // label="KONFIRMASI PASSWORD LAMA"
                  type="password"
                  autoComplete="new-password"
                  // variant="filled"
                  margin="normal"
                  placeholder="Masukkan Password Baru"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="password"
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                  {...getFieldProps("password")}
                />

                <TextField
                  required
                  fullWidth
                  id="filled-password-input"
                  // label="KONFIRMASI PASSWORD LAMA"
                  type="password"
                  autoComplete="new-password"
                  // variant="filled"
                  margin="normal"
                  placeholder="Konfirmasi Password Baru"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="confirmation_password"
                  helperText={
                    touched.confirmation_password
                      ? errors.confirmation_password
                      : ""
                  }
                  error={
                    touched.confirmation_password &&
                    Boolean(errors.confirmation_password)
                  }
                  {...getFieldProps("confirmation_password")}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                  //   onClick={handleOpenModal}
                >
                  <div className="text-sans text-white text-xl font-semibold">
                    Konfirmasi
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
      </div>
    </div>
  );
}

export default ChangePassword;
