import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProfileRequest } from "../../apis/profile/Profile";

function OldPassword() {
  const history = useHistory();
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      previous_password: "",
    },
    validationSchema: Yup.object({
      previous_password: Yup.string()
        .required("Harus diisi!")
        .min(6, "Harus 6 karakter atau lebih!"),
    }),
    onSubmit: (values) => {
      ProfileRequest.check_old_password(history, values);
    },
  });
  return (
    <div className="flex mx-auto justify-center bg-gray-200">
      <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
        <div className="mx-auto">
          <div className="h-full w-full">
            <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start ">
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
                  fullWidth
                  id="filled-password-input"
                  // label="KONFIRMASI PASSWORD LAMA"
                  type="password"
                  autoComplete="new-password"
                  // variant="filled"
                  margin="normal"
                  placeholder="Masukkan Password Lama"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="previous_password"
                  helperText={
                    touched.previous_password ? errors.previous_password : ""
                  }
                  error={
                    touched.previous_password &&
                    Boolean(errors.previous_password)
                  }
                  {...getFieldProps("previous_password")}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                  //   component={Link}
                >
                  <h1 className="text-sans text-white text-xl font-semibold">
                    Lanjut
                  </h1>
                </Button>
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldPassword;
