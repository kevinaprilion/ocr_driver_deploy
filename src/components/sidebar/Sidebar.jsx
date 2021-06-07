import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AuthRequest } from "../../apis/auth/AuthRequest";
import { ProfileRequest } from "../../apis/profile/Profile";
import { useQuery } from "react-query";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#0036A0",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: "white",
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 120,
    flexShrink: 0,
  },
  drawerPaper: {
    // height: '100vh',
    // position: 'absolute',
    left: "33%",
    width: drawerWidth,
  },

  drawerPaperMobile: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Sidebar() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [headerId, setHeaderId] = useState(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = (event) => {
    setOpen(false);
    setHeaderId(event);
  };

  function switchHeaderName(type) {
    switch (type) {
      case 0:
        return "Dashboard";
      case 1:
        return "Profile";
      case 2:
        return "Pengeluaran";
      case 3:
        return "Absensi";
      case 4:
        return "Notifikasi";
      case 5:
        return "Laporan";
      case 6:
        return "Driver";
      case 7:
        return "PIC";
      case 8:
        return "Super PIC";
      case 9:
        return "Admin";
      case 10:
        return "Informasi";
      case 11:
        return "Berita";
      default:
        return "";
    }
  }

  const { data, isLoading } = useQuery("profile", ProfileRequest.getProfile, {
    refetchOnWindowFocus: false,
  });
  console.log(data, "<");
  return (
    // <div >
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor={isDesktop ? "top" : "left"}
        open={open}
        transitionDuration={{ enter: 1000, exit: 1000 }}
        classes={{
          paper: isDesktop ? classes.drawerPaper : classes.drawerPaperMobile,
        }}
      >
        <div className="flex-col items-stretch min-h-full h-screen w-full flex flex-wrap justify-between px-4">
          <div className="flex items-center w-full mt-3">
            {isLoading ? (
              ""
            ) : (
              <div className="flex items-center">
                <div className="flex">
                  <img
                    className="w-14 h-14 object-cover rounded-full"
                    src={data.photo}
                    alt="foto profile"
                  />
                </div>
                <div className="flex-row justify-center ml-2 py-4">
                  <Link
                    onClick={() => handleDrawerClose(1)}
                    className="block text-left whitespace-nowrap text-base font-medium"
                    to="/driver/profile"
                  >
                    {data.name}
                  </Link>
                  <Link
                    onClick={() => handleDrawerClose(1)}
                    className="block text-left text-abuabu whitespace-nowrap text-xs font-normal"
                    to="/driver/profile"
                  >
                    {data.role}
                  </Link>
                </div>
              </div>
            )}
            <div className="flex-row justify-end ml-4">
              <IconButton onClick={() => handleDrawerClose(headerId)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
          </div>

          {/* Collapse */}
          <div
            className={
              "flex flex-col items-stretch opacity-100 relative mt-4 shadow-none top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded "
            }
          >
            {/* Divider */}
            <hr className="mb-2 min-w-full" />

            {/* Navigation */}

            <ul className="min-w-full flex flex-col list-none">
              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(0)}
                  className={
                    "flex flex-row gap-4 text-xs font-normal " +
                    (window.location.href.indexOf("/driver/dashboard") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/dashboard"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="transparent"
                    stroke={
                      window.location.href.indexOf("driver/dashboard") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 2H2V6.66667H6.66667V2Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9997 2H9.33301V6.66667H13.9997V2Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9997 9.33398H9.33301V14.0007H13.9997V9.33398Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66667 9.33398H2V14.0007H6.66667V9.33398Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center py-3 ml-0.5">
                <Link
                  onClick={() => handleDrawerClose(2)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/pengeluaran") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/pengeluaran"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66675 1.99984C2.84356 1.99984 3.01313 1.9296 3.13815 1.80457C3.26318 1.67955 3.33341 1.50998 3.33341 1.33317C3.33341 1.15636 3.26318 0.98679 3.13815 0.861766C3.01313 0.736742 2.84356 0.666504 2.66675 0.666504H1.33341C1.1566 0.666504 0.987035 0.736742 0.86201 0.861766C0.736986 0.98679 0.666748 1.15636 0.666748 1.33317V10.6665C0.666748 10.8433 0.736986 11.0129 0.86201 11.1379C0.987035 11.2629 1.1566 11.3332 1.33341 11.3332H2.66675C2.84356 11.3332 3.01313 11.2629 3.13815 11.1379C3.26318 11.0129 3.33341 10.8433 3.33341 10.6665C3.33341 10.4897 3.26318 10.3201 3.13815 10.1951C3.01313 10.0701 2.84356 9.99984 2.66675 9.99984H2.00008V1.99984H2.66675ZM11.8801 5.61317L10.0001 2.9465C9.89812 2.80278 9.74341 2.70527 9.56977 2.67528C9.39612 2.6453 9.21766 2.68529 9.07342 2.7865C9.00131 2.83703 8.93993 2.90133 8.89282 2.97571C8.8457 3.05008 8.81379 3.13305 8.79891 3.21983C8.78403 3.3066 8.78649 3.39547 8.80615 3.48129C8.8258 3.56711 8.86226 3.64818 8.91342 3.71984L10.0601 5.33317H4.66675C4.48994 5.33317 4.32037 5.40341 4.19534 5.52843C4.07032 5.65346 4.00008 5.82303 4.00008 5.99984C4.00008 6.17665 4.07032 6.34622 4.19534 6.47124C4.32037 6.59627 4.48994 6.6665 4.66675 6.6665H10.0001L8.80008 8.2665C8.74755 8.33654 8.70933 8.41624 8.68761 8.50105C8.66588 8.58586 8.66107 8.67412 8.67345 8.76079C8.68583 8.84745 8.71516 8.93083 8.75977 9.00617C8.80437 9.0815 8.86338 9.14731 8.93341 9.19984C9.04881 9.28638 9.18917 9.33317 9.33342 9.33317C9.43691 9.33317 9.53899 9.30907 9.63156 9.26279C9.72413 9.2165 9.80465 9.1493 9.86675 9.0665L11.8667 6.39984C11.9521 6.28708 11.9994 6.15009 12.0018 6.00868C12.0042 5.86727 11.9616 5.72875 11.8801 5.61317Z"
                      fill={
                        window.location.href.indexOf("driver/pengeluaran") !==
                        -1
                          ? "#0036A0"
                          : "#A8A8A8"
                      }
                    />
                  </svg>{" "}
                  Pengeluaran
                </Link>
              </li>

              <li className="items-center py-3 ">
                <Link
                  onClick={() => handleDrawerClose(3)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/absent") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/absent"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill={
                      window.location.href.indexOf("driver/absensi") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.2504 9.92274L9.41999 7.75233C9.46334 7.70887 9.51484 7.67439 9.57153 7.65086C9.62823 7.62734 9.68901 7.61523 9.75039 7.61523C9.81177 7.61523 9.87255 7.62734 9.92925 7.65086C9.98591 7.67437 10.0374 7.70882 10.0807 7.75224C10.1242 7.79559 10.1587 7.84708 10.1822 7.90378C10.2057 7.96047 10.2178 8.02125 10.2178 8.08264C10.2178 8.14402 10.2057 8.2048 10.1822 8.26149C10.1587 8.31817 10.1242 8.36965 10.0808 8.41299L7.58079 10.9129H6.91999L7.2504 9.92274ZM7.2504 9.92274L6.33076 9.0023C6.28737 8.95892 6.23586 8.92449 6.17918 8.90101C6.1225 8.87753 6.06174 8.86544 6.00039 8.86544C5.87648 8.86544 5.75765 8.91467 5.67004 9.00228C5.62665 9.04566 5.59224 9.09717 5.56876 9.15385C5.54528 9.21053 5.5332 9.27128 5.5332 9.33264C5.5332 9.39399 5.54528 9.45474 5.56876 9.51142C5.59224 9.56811 5.62665 9.61961 5.67004 9.66299L6.91999 10.9129L7.2504 9.92274ZM7.42925 11.0144C7.48592 10.9909 7.53745 10.9563 7.58079 10.9129H6.91999C6.96333 10.9563 7.01486 10.9909 7.07153 11.0144C7.12823 11.0379 7.18901 11.05 7.25039 11.05C7.31177 11.05 7.37255 11.0379 7.42925 11.0144Z" />
                    <path d="M7.2504 9.92274L9.41999 7.75233C9.46334 7.70887 9.51484 7.67439 9.57153 7.65086C9.62823 7.62734 9.68901 7.61523 9.75039 7.61523C9.81177 7.61523 9.87255 7.62734 9.92925 7.65086C9.98591 7.67437 10.0374 7.70882 10.0807 7.75224C10.1242 7.79559 10.1587 7.84708 10.1822 7.90378C10.2057 7.96047 10.2178 8.02125 10.2178 8.08264C10.2178 8.14402 10.2057 8.2048 10.1822 8.26149C10.1587 8.31817 10.1242 8.36965 10.0808 8.41299L7.58079 10.9129M7.2504 9.92274L6.33076 9.0023C6.28737 8.95892 6.23586 8.92449 6.17918 8.90101C6.1225 8.87753 6.06174 8.86544 6.00039 8.86544C5.87648 8.86544 5.75765 8.91467 5.67004 9.00228C5.62665 9.04566 5.59224 9.09717 5.56876 9.15385C5.54528 9.21053 5.5332 9.27128 5.5332 9.33264C5.5332 9.39399 5.54528 9.45474 5.56876 9.51142C5.59224 9.56811 5.62665 9.61961 5.67004 9.66299L6.91999 10.9129M7.2504 9.92274L6.91999 10.9129M6.91999 10.9129H7.58079M6.91999 10.9129C6.96333 10.9563 7.01486 10.9909 7.07153 11.0144C7.12823 11.0379 7.18901 11.05 7.25039 11.05C7.31177 11.05 7.37255 11.0379 7.42925 11.0144C7.48592 10.9909 7.53745 10.9563 7.58079 10.9129" />
                    <path d="M2.66687 2.71654H12.6669C12.8746 2.71654 13.0739 2.79907 13.2208 2.94597C13.3677 3.09287 13.4502 3.29212 13.4502 3.49987V12.6665C13.4502 12.8743 13.3677 13.0735 13.2208 13.2204C13.0739 13.3673 12.8746 13.4499 12.6669 13.4499H2.66687C2.45911 13.4499 2.25987 13.3673 2.11297 13.2204C1.96606 13.0735 1.88353 12.8743 1.88353 12.6665V3.49987C1.88353 3.29212 1.96606 3.09287 2.11297 2.94597C2.25987 2.79907 2.45911 2.71654 2.66687 2.71654ZM2.66687 1.7832C2.21158 1.7832 1.77494 1.96407 1.453 2.286C1.13106 2.60794 0.950195 3.04458 0.950195 3.49987V12.6665C0.950195 13.1218 1.13106 13.5584 1.453 13.8804C1.77494 14.2023 2.21158 14.3832 2.66687 14.3832H12.6669C13.1222 14.3832 13.5588 14.2023 13.8807 13.8804C14.2027 13.5584 14.3835 13.1218 14.3835 12.6665V3.49987C14.3835 3.04458 14.2027 2.60794 13.8807 2.286C13.5588 1.96407 13.1222 1.7832 12.6669 1.7832H2.66687Z" />
                    <path d="M3.86687 0.951904C3.76148 0.963257 3.66253 1.01025 3.58688 1.0859C3.49937 1.17342 3.4502 1.29212 3.4502 1.41589V1.83255C3.4502 1.95632 3.49937 2.07502 3.58688 2.16254C3.6744 2.25005 3.7931 2.29922 3.91687 2.29922C4.04063 2.29922 4.15933 2.25005 4.24685 2.16254C4.33437 2.07502 4.38353 1.95632 4.38353 1.83255V1.41589C4.38353 1.29212 4.33437 1.17342 4.24685 1.0859C4.15933 0.998386 4.04063 0.949219 3.91687 0.949219H3.86687V0.951904ZM11.3669 0.951904C11.2615 0.963257 11.1625 1.01025 11.0869 1.0859C10.9994 1.17342 10.9502 1.29212 10.9502 1.41589V1.83255C10.9502 1.95632 10.9994 2.07502 11.0869 2.16254C11.1744 2.25005 11.2931 2.29922 11.4169 2.29922C11.5406 2.29922 11.6593 2.25005 11.7469 2.16254C11.8344 2.07502 11.8835 1.95632 11.8835 1.83255V1.41589C11.8835 1.29212 11.8344 1.17342 11.7469 1.0859C11.6593 0.998385 11.5406 0.949219 11.4169 0.949219H11.3669V0.951904Z" />
                    <path d="M3.16988 4.00191C3.08236 4.08943 3.0332 4.20812 3.0332 4.33189V5.16523C3.0332 5.28899 3.08236 5.40769 3.16988 5.49521C3.2574 5.58273 3.3761 5.63189 3.49986 5.63189H11.8332C11.957 5.63189 12.0757 5.58273 12.1632 5.49521C12.2507 5.40769 12.2999 5.28899 12.2999 5.16523V4.33189C12.2999 4.20812 12.2507 4.08943 12.1632 4.00191C12.0757 3.91439 11.957 3.86523 11.8332 3.86523H3.49986C3.3761 3.86523 3.2574 3.91439 3.16988 4.00191Z" />
                  </svg>{" "}
                  Absensi
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(4)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/notifikasi") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/notifikasi"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driver/notifikasi") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.69989 2.03285C5.57506 1.15768 6.76205 0.666016 7.99973 0.666016C9.2374 0.666016 10.4244 1.15768 11.2996 2.03285C12.1747 2.90802 12.6664 4.09501 12.6664 5.33268C12.6664 7.56779 13.1444 8.95577 13.585 9.76345C13.8062 10.169 14.0216 10.435 14.1712 10.5929C14.2462 10.6721 14.3051 10.7246 14.3406 10.7541C14.3583 10.7689 14.3702 10.778 14.3754 10.7818L14.3773 10.7832C14.6163 10.9474 14.722 11.2477 14.6378 11.5259C14.5527 11.807 14.2935 11.9993 13.9997 11.9993H1.99973C1.70595 11.9993 1.4468 11.807 1.36166 11.5259C1.27744 11.2477 1.3832 10.9474 1.62219 10.7832L1.62409 10.7818C1.62922 10.778 1.64113 10.7689 1.65887 10.7541C1.69435 10.7246 1.75327 10.6721 1.82826 10.5929C1.97788 10.435 2.19327 10.169 2.41446 9.76345C2.85501 8.95577 3.33306 7.56779 3.33306 5.33268C3.33306 4.09501 3.82472 2.90802 4.69989 2.03285ZM3.43261 10.666H12.5668C12.5161 10.5829 12.4652 10.4949 12.4145 10.4019C11.855 9.37626 11.3331 7.76424 11.3331 5.33268C11.3331 4.44863 10.9819 3.60078 10.3567 2.97566C9.73163 2.35054 8.88378 1.99935 7.99973 1.99935C7.11567 1.99935 6.26782 2.35054 5.6427 2.97566C5.01758 3.60078 4.66639 4.44863 4.66639 5.33268C4.66639 7.76424 4.14444 9.37626 3.58499 10.4019C3.53426 10.4949 3.48333 10.5829 3.43261 10.666Z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.51195 13.4241C6.83043 13.2393 7.23838 13.3478 7.42313 13.6662C7.48173 13.7673 7.56585 13.8511 7.66706 13.9094C7.76826 13.9677 7.883 13.9984 7.9998 13.9984C8.11659 13.9984 8.23133 13.9677 8.33254 13.9094C8.43374 13.8511 8.51786 13.7673 8.57646 13.6662C8.76121 13.3478 9.16916 13.2393 9.48764 13.4241C9.80613 13.6088 9.91454 14.0168 9.7298 14.3353C9.55399 14.6384 9.30164 14.8899 8.99802 15.0648C8.69441 15.2397 8.35018 15.3317 7.9998 15.3317C7.64942 15.3317 7.30519 15.2397 7.00157 15.0648C6.69795 14.8899 6.44561 14.6384 6.2698 14.3353C6.08505 14.0168 6.19347 13.6088 6.51195 13.4241Z"
                    />
                  </svg>{" "}
                  Notifikasi
                </Link>
              </li>

              <li className="items-center py-3 ml-0.5">
                <Link
                  onClick={() => handleDrawerClose(5)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("driver/report") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/report"
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill={
                      window.location.href.indexOf("driver/report") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 8H7V9H3V8Z" />
                    <path d="M3 5.5H9V6.5H3V5.5Z" />
                    <path d="M3 10.5H5.5V11.5H3V10.5Z" />
                    <path d="M10.5 1.5H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H4C3.73478 0 3.48043 0.105357 3.29289 0.292893C3.10536 0.48043 3 0.734784 3 1V1.5H1.5C1.23478 1.5 0.98043 1.60536 0.792893 1.79289C0.605357 1.98043 0.5 2.23478 0.5 2.5V13C0.5 13.2652 0.605357 13.5196 0.792893 13.7071C0.98043 13.8946 1.23478 14 1.5 14H10.5C10.7652 14 11.0196 13.8946 11.2071 13.7071C11.3946 13.5196 11.5 13.2652 11.5 13V2.5C11.5 2.23478 11.3946 1.98043 11.2071 1.79289C11.0196 1.60536 10.7652 1.5 10.5 1.5ZM4 1H8V3H4V1ZM10.5 13H1.5V2.5H3V4H9V2.5H10.5V13Z" />
                  </svg>{" "}
                  Laporan
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(6)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("driver/driver") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/driver"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="transparent"
                    stroke={
                      window.location.href.indexOf("driver/driver") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00033 9.33268C8.73671 9.33268 9.33366 8.73573 9.33366 7.99935C9.33366 7.26297 8.73671 6.66602 8.00033 6.66602C7.26395 6.66602 6.66699 7.26297 6.66699 7.99935C6.66699 8.73573 7.26395 9.33268 8.00033 9.33268Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 9.33398V14.0007"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66699 7.99935L2.16699 6.66602"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.33301 7.99935L13.833 6.66602"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  Driver
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(7)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("driver/pic") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/pic"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driver/pic") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 14C13 14 14 14 14 13C14 12 13 9 8 9C3 9 2 12 2 13C2 14 3 14 3 14H13ZM3.005 13.056V13.054V13.056ZM3.022 13H12.978C12.9827 12.9995 12.9874 12.9988 12.992 12.998L13 12.996C12.999 12.75 12.846 12.01 12.168 11.332C11.516 10.68 10.289 10 8 10C5.71 10 4.484 10.68 3.832 11.332C3.154 12.01 3.002 12.75 3 12.996C3.00732 12.9974 3.01465 12.9987 3.022 13ZM12.996 13.056V13.054V13.056ZM8 7C8.53043 7 9.03914 6.78929 9.41421 6.41421C9.78929 6.03914 10 5.53043 10 5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5C6 5.53043 6.21071 6.03914 6.58579 6.41421C6.96086 6.78929 7.46957 7 8 7ZM11 5C11 5.79565 10.6839 6.55871 10.1213 7.12132C9.55871 7.68393 8.79565 8 8 8C7.20435 8 6.44129 7.68393 5.87868 7.12132C5.31607 6.55871 5 5.79565 5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5Z"
                    />
                  </svg>{" "}
                  PIC
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(8)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/super-pic") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/super-pic"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driver/superpic") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 4H15V8H14V4Z" />
                    <path d="M11.5 2.5H12.5V8H11.5V2.5Z" />
                    <path d="M9 5H10V8H9V5Z" />
                    <path d="M8 15H7V12C6.9996 11.6023 6.84144 11.221 6.56022 10.9398C6.279 10.6586 5.8977 10.5004 5.5 10.5H3.5C3.1023 10.5004 2.721 10.6586 2.43978 10.9398C2.15856 11.221 2.0004 11.6023 2 12V15H1V12C1.00079 11.3372 1.26444 10.7018 1.73311 10.2331C2.20178 9.76444 2.8372 9.50079 3.5 9.5H5.5C6.1628 9.50079 6.79822 9.76444 7.26689 10.2331C7.73556 10.7018 7.99921 11.3372 8 12V15Z" />
                    <path d="M4.5 4.5C4.79667 4.5 5.08668 4.58797 5.33336 4.7528C5.58003 4.91762 5.77229 5.15189 5.88582 5.42597C5.99935 5.70006 6.02906 6.00166 5.97118 6.29264C5.9133 6.58361 5.77044 6.85088 5.56066 7.06066C5.35088 7.27044 5.08361 7.4133 4.79264 7.47118C4.50167 7.52906 4.20007 7.49935 3.92598 7.38582C3.65189 7.27229 3.41762 7.08003 3.2528 6.83335C3.08797 6.58668 3 6.29667 3 6C3 5.60217 3.15804 5.22064 3.43934 4.93934C3.72065 4.65803 4.10218 4.5 4.5 4.5ZM4.5 3.5C4.00555 3.5 3.5222 3.64662 3.11108 3.92133C2.69995 4.19603 2.37952 4.58648 2.1903 5.04329C2.00108 5.50011 1.95157 6.00277 2.04804 6.48773C2.1445 6.97268 2.3826 7.41814 2.73223 7.76777C3.08187 8.1174 3.52732 8.3555 4.01228 8.45196C4.49723 8.54843 4.99989 8.49892 5.45671 8.3097C5.91353 8.12048 6.30397 7.80005 6.57868 7.38893C6.85338 6.9778 7 6.49445 7 6C7 5.67169 6.93534 5.34661 6.8097 5.04329C6.68406 4.73998 6.49992 4.46438 6.26777 4.23223C6.03562 4.00009 5.76002 3.81594 5.45671 3.6903C5.1534 3.56466 4.82831 3.5 4.5 3.5Z" />
                  </svg>{" "}
                  Super PIC
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(9)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/admin") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/admin"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driverdriver") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.33366 9.50068V10.894C8.73027 10.6807 8.08451 10.6153 7.45059 10.7032C6.81668 10.7912 6.21312 11.0299 5.69061 11.3995C5.1681 11.769 4.74189 12.2586 4.44777 12.827C4.15365 13.3954 4.0002 14.026 4.00033 14.666L2.66699 14.6653C2.66679 13.8513 2.85294 13.048 3.21119 12.3169C3.56944 11.5859 4.09028 10.9466 4.7338 10.448C5.37732 9.94944 6.12644 9.60477 6.92376 9.44044C7.72108 9.27612 8.54543 9.2965 9.33366 9.50002V9.50068ZM8.00033 8.66602C5.79033 8.66602 4.00033 6.87602 4.00033 4.66602C4.00033 2.45602 5.79033 0.666016 8.00033 0.666016C10.2103 0.666016 12.0003 2.45602 12.0003 4.66602C12.0003 6.87602 10.2103 8.66602 8.00033 8.66602ZM8.00033 7.33268C9.47366 7.33268 10.667 6.13935 10.667 4.66602C10.667 3.19268 9.47366 1.99935 8.00033 1.99935C6.52699 1.99935 5.33366 3.19268 5.33366 4.66602C5.33366 6.13935 6.52699 7.33268 8.00033 7.33268ZM11.8623 13.2753L14.219 10.9187L15.1623 11.8613L11.8623 15.1613L9.50499 12.804L10.4483 11.8613L11.8617 13.2753H11.8623Z" />
                    <path d="M9.33366 9.50068V10.894C8.73027 10.6807 8.08451 10.6153 7.45059 10.7032C6.81668 10.7912 6.21312 11.0299 5.69061 11.3995C5.1681 11.769 4.74189 12.2586 4.44777 12.827C4.15365 13.3954 4.0002 14.026 4.00033 14.666L2.66699 14.6653C2.66679 13.8513 2.85294 13.048 3.21119 12.3169C3.56944 11.5859 4.09028 10.9466 4.7338 10.448C5.37732 9.94944 6.12644 9.60477 6.92376 9.44044C7.72108 9.27612 8.54543 9.2965 9.33366 9.50002V9.50068ZM8.00033 8.66602C5.79033 8.66602 4.00033 6.87602 4.00033 4.66602C4.00033 2.45602 5.79033 0.666016 8.00033 0.666016C10.2103 0.666016 12.0003 2.45602 12.0003 4.66602C12.0003 6.87602 10.2103 8.66602 8.00033 8.66602ZM8.00033 7.33268C9.47366 7.33268 10.667 6.13935 10.667 4.66602C10.667 3.19268 9.47366 1.99935 8.00033 1.99935C6.52699 1.99935 5.33366 3.19268 5.33366 4.66602C5.33366 6.13935 6.52699 7.33268 8.00033 7.33268ZM11.8623 13.2753L14.219 10.9187L15.1623 11.8613L11.8623 15.1613L9.50499 12.804L10.4483 11.8613L11.8617 13.2753H11.8623Z" />
                  </svg>{" "}
                  Admin
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(10)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("/driver/information") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/information"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driver/superAdmin") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 2.5C6.05 2.5 4.5 4.05 4.5 6C4.49658 6.57343 4.63492 7.13883 4.90272 7.6459C5.17052 8.15297 5.55948 8.58601 6.035 8.9065C4.255 9.673 3 11.446 3 13.5H4C4 11.3 5.8 9.5 8 9.5C9.95 9.5 11.5 7.95 11.5 6C11.5 4.05 9.95 2.5 8 2.5ZM8 3.5C9.4 3.5 10.5 4.6 10.5 6C10.5 7.4 9.4 8.5 8 8.5C6.6 8.5 5.5 7.4 5.5 6C5.5 4.6 6.6 3.5 8 3.5ZM12.05 9V10.05C11.75 10.1 11.45 10.25 11.2 10.4L10.45 9.65L9.75 10.35L10.5 11.1C10.3 11.35 10.2 11.65 10.15 12H9V13H10.05C10.1 13.3 10.25 13.6 10.4 13.9L9.65 14.65L10.35 15.35L11.1 14.6C11.35 14.75 11.65 14.9 11.95 14.95V16H12.95V14.95C13.25 14.9 13.55 14.75 13.8 14.6L14.55 15.35L15.25 14.65L14.5 13.9C14.7 13.65 14.8 13.35 14.85 13H16V12H14.95C14.9 11.7 14.75 11.4 14.6 11.1L15.35 10.35L14.65 9.65L13.9 10.4C13.65 10.25 13.35 10.1 13.05 10.05V9H12.05ZM12.5 11C13.35 11 14 11.65 14 12.5C14 13.35 13.35 14 12.5 14C11.65 14 11 13.35 11 12.5C11 11.65 11.65 11 12.5 11ZM12.5 12C12.4364 12.0008 12.3738 12.0155 12.3165 12.043C12.257 12.0713 12.2029 12.1097 12.1565 12.1565C12.1097 12.2029 12.0713 12.257 12.043 12.3165C12.0155 12.3738 12.0008 12.4364 12 12.5C12 12.6875 12.1405 12.875 12.3165 12.957C12.3738 12.9845 12.4364 12.9992 12.5 13C12.75 13 13 12.75 13 12.5C13 12.25 12.75 12 12.5 12Z" />
                  </svg>{" "}
                  Informasi
                </Link>
              </li>
              <li className="items-center py-3">
                <Link
                  onClick={() => handleDrawerClose(11)}
                  className={
                    "flex flex-row gap-4 items-center text-xs font-normal " +
                    (window.location.href.indexOf("driver/news") !== -1
                      ? "text-biru hover:text-blue-600"
                      : "text-abuabu hover:text-gray-600")
                  }
                  to="/driver/news"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={
                      window.location.href.indexOf("driver/superAdmin") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 2.5C6.05 2.5 4.5 4.05 4.5 6C4.49658 6.57343 4.63492 7.13883 4.90272 7.6459C5.17052 8.15297 5.55948 8.58601 6.035 8.9065C4.255 9.673 3 11.446 3 13.5H4C4 11.3 5.8 9.5 8 9.5C9.95 9.5 11.5 7.95 11.5 6C11.5 4.05 9.95 2.5 8 2.5ZM8 3.5C9.4 3.5 10.5 4.6 10.5 6C10.5 7.4 9.4 8.5 8 8.5C6.6 8.5 5.5 7.4 5.5 6C5.5 4.6 6.6 3.5 8 3.5ZM12.05 9V10.05C11.75 10.1 11.45 10.25 11.2 10.4L10.45 9.65L9.75 10.35L10.5 11.1C10.3 11.35 10.2 11.65 10.15 12H9V13H10.05C10.1 13.3 10.25 13.6 10.4 13.9L9.65 14.65L10.35 15.35L11.1 14.6C11.35 14.75 11.65 14.9 11.95 14.95V16H12.95V14.95C13.25 14.9 13.55 14.75 13.8 14.6L14.55 15.35L15.25 14.65L14.5 13.9C14.7 13.65 14.8 13.35 14.85 13H16V12H14.95C14.9 11.7 14.75 11.4 14.6 11.1L15.35 10.35L14.65 9.65L13.9 10.4C13.65 10.25 13.35 10.1 13.05 10.05V9H12.05ZM12.5 11C13.35 11 14 11.65 14 12.5C14 13.35 13.35 14 12.5 14C11.65 14 11 13.35 11 12.5C11 11.65 11.65 11 12.5 11ZM12.5 12C12.4364 12.0008 12.3738 12.0155 12.3165 12.043C12.257 12.0713 12.2029 12.1097 12.1565 12.1565C12.1097 12.2029 12.0713 12.257 12.043 12.3165C12.0155 12.3738 12.0008 12.4364 12 12.5C12 12.6875 12.1405 12.875 12.3165 12.957C12.3738 12.9845 12.4364 12.9992 12.5 13C12.75 13 13 12.75 13 12.5C13 12.25 12.75 12 12.5 12Z" />
                  </svg>{" "}
                  Berita
                </Link>
              </li>

              <li className="items-center py-3">
                <h1
                  onClick={() => AuthRequest.logout(history)}
                  className="flex flex-row gap-4 items-center text-xs font-normal cursor-pointer text-abuabu hover:text-gray-600"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="transparent"
                    stroke={
                      window.location.href.indexOf("driver/logout") !== -1
                        ? "#0036A0"
                        : "#A8A8A8"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.666 11.3327L13.9993 7.99935L10.666 4.66602"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8H6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  Logout
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
      <div className="static w-96 sm:-ml-48 mt-4 text-2xl font-sans text-white text-center font-semibold">
        {switchHeaderName(headerId)}
      </div>
      {/* </Toolbar> */}
      {/* </nav> */}
      {/* </AppBar> */}
    </div>
  );
}

export default Sidebar;
