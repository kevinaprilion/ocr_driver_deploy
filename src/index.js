import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import reportWebVitals from "./reportWebVitals";
import Driver from "./layout/driver/Driver";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgotPass/ForgotPass";
import NewPassword from "./pages/newPassword/NewPassword";
import OldPassword from "./pages/oldPassword/OldPassword";
import ChangePassword from "./pages/changePasword/ChangePassword";
import Message from "./pages/message/Message";
import FAQ from "./pages/fAQ/FAQ";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import TnC from "./pages/tnC/TnC";
import Slug from "./pages/slug/Slug";
import Absent from "./pages/absent/Absent";
import Expense from "./pages/expense/Expense";
import History from "./pages/history/History";
import DetailHistory from "./pages/detailHistory/DetailHistory";
import AbsentIn from "./pages/absenIn/AbsentIn";
import AbsentOut from "./pages/absenOut/AbsentOut";
import Permission from "./pages/permission/Permission";
import Holiday from "./pages/holiday/Holiday";
import UpdatePermission from "./pages/updatePermission/UpdatePermission";
import UpdateAbsent from "./pages/updateAbsent/UpdateAbsent.jsx";
import ManualExpense from "./pages/manualExpense/ManualExpense";
import OpenCamera from "./pages/openCamera/OpenCamera";
import Bensin from "./pages/bensin/Bensin";
import Parkir from "./pages/parkir/Parkir";
import Tol from "./pages/tol/Tol";
import LoginGuard from "./guards/LoginGuards";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0036A0",
    },
    secondary: {
      main: "#00AFF0",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    button: {
      textTransform: "none",
    },
    // fontFamily: 'impact'
  },
});
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <LoginGuard path="/driver" component={Driver} />
            <Route path="/forgotpassword" component={Forgot} />
            <Route path="/newpassword" component={NewPassword} />
            <Route path="/profile/oldpassword" component={OldPassword} />
            <Route path="/profile/changepassword" component={ChangePassword} />
            <Route path="/message/content" component={Message} />
            <Route path="/news/slug" component={Slug} />
            <Route path="/information/faq" component={FAQ} />
            <Route path="/information/about" component={About} />
            <Route path="/information/contact" component={Contact} />
            <Route path="/information/termandcondition" component={TnC} />
            <Route path="/report/absent" component={Absent} />
            <Route path="/report/expense" component={Expense} />
            <Route path="/report/history" component={History} />
            <Route path="/history/slug" component={DetailHistory} />
            <Route path="/absent/absent-in" component={AbsentIn} />
            <Route path="/absent/absent-out" component={AbsentOut} />
            <Route path="/absent/permission" component={Permission} />
            <Route path="/absent/holiday" component={Holiday} />
            <Route
              path="/absent/update-permission"
              component={UpdatePermission}
            />
            <Route path="/absent/update-absent" component={UpdateAbsent} />
            <Route path="/pengeluaran/manual" component={ManualExpense} />
            <Route path="/pengeluaran/bensin" component={Bensin} />
            <Route path="/pengeluaran/parkir" component={Parkir} />
            <Route path="/pengeluaran/tol" component={Tol} />
            <Route path="/pengeluaran/OpenCamera" component={OpenCamera} />
            {/* <Route path="/login" exact component={Auth} /> */}
            <Redirect from="*" to="/login" />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
