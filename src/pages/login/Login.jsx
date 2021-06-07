import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthRequest } from "../../apis/auth/AuthRequest";
import Cookies from 'js-cookie';

function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    // expiry: now.getTime() + ttl,
  };
  console.log(item)
  var timeExpired = new Date(new Date().getTime() + 1 * 3600 * 1000);
  // date.setTime(date.getTime() + (60 * 1000));
  Cookies.set(key, item, { expires: timeExpired })
  // localStorage.setItem(key, JSON.stringify(item));
}

function Login() {
  const history = useHistory();
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Harus diisi!")
        .min(3, "Harus 3 karakter atau lebih!"),
      password: Yup.string()
        .required("Harus diisi!")
        .min(6, "Harus 6 karakter atau lebih!"),
    }),
    onSubmit: (values) => {
      AuthRequest.login(values, history, setWithExpiry);
    },
  });

  return (
    <div className="flex mx-auto justify-center bg-gray-200">
      <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
        <div className="mx-auto">
          <div className="h-full w-full">
            <div
              className="bg-cover h-40  rounded-t-none justify-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(" + "../asset/banners/login_banner.png" + ")",
              }}
            ></div>

            <div className="-mt-8 bg-white rounded-t-3xl items-center flex flex-col">
              <div className="flex justify-center -mt-14 bg-white w-24 shadow-md">
                <img
                  src="../asset/logos/ocr_logo.png"
                  alt="logo"
                  width="110px"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start ml-5 mt-5 ">
              <div className="font-sans text-hitam text-base font-normal ">
                Hallo
              </div>
              <div className="font-sans text-biru text-base font-medium ">
                Selamat Datang
              </div>
            </div>

            <div className="w-full mt-5 flex flex-col justify-center px-6">
              {/* <div className="flex justify-center "> */}
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  id="standard-required"
                  label="USERNAME"
                  autoComplete="nope"
                  variant="outlined"
                  margin="normal"
                  placeholder="Masukkan Username"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={touched.username ? errors.username : ""}
                  error={touched.username && Boolean(errors.username)}
                  {...getFieldProps("username")}
                />

                <TextField
                  required
                  fullWidth
                  id="filled-password-input"
                  label="PASSWORD"
                  type="password"
                  // autoComplete="new-password"
                  variant="outlined"
                  margin="normal"
                  placeholder="Masukkan Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                  {...getFieldProps("password")}
                />

                <div className="mt-2">
                  <Checkbox
                    checked={true}
                    // checked={checked}
                    // onChange={handleChange}
                    className="float-left"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  <div className="font-normal font-sans text-abuabuPrimary float-left mt-2">
                    Ingat Saya
                  </div>
                  <Link
                    className="font-normal font-sans text-abuabuPrimary float-right mt-2"
                    to="/forgotpassword"
                  >
                    Lupa Password?
                  </Link>
                </div>
                {/* <div className="relative top-24"> */}
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "60px" }}
                //   component={Link}
                >
                  <h1 className="text-sans text-white text-xl font-semibold">
                    Login
                  </h1>
                </Button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
