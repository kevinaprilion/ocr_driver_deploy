import React from "react";
import Tabs from "@material-ui/core/Tabs";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { ProfileRequest } from "../../apis/profile/Profile";
import { useQuery } from "react-query";

import InfoAkun from "../../components/infoAkun/InfoAkun";
import InfoRekening from "../../components/infoRekening/InfoRekening";
import Loading from "../../components/loading/Loading";

const ListItem = withStyles({
  root: {
    "&$selected": {
      borderBottom: "2px solid orange",
    },
  },
  selected: {},
})(MuiListItem);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function Profile() {
  const [category, setCategory] = React.useState(0);

  const handleCategory = (event) => {
    console.log("dalam Hadle " + event);
    setCategory(event);
  };

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  };

  const { data, isLoading } = useQuery("profile", ProfileRequest.getProfile, {
    refetchOnWindowFocus: false,
  });

  return isLoading ? (
    <div className="flex justify-center mt-20">
      <Loading />
    </div>
  ) : (
    <div className="h-full w-full items-center">
      <div className="bg-biru h-40 rounded-b-3xl flex justify-start">
        <div class="md:-mt-2 w-full flex px-3">
          <div className="md:w-1/5 w-1/4 px-4 md:pt-5">
            <img
              className="w-14 h-14 object-cover rounded-full"
              src={data.photo}
              alt="foto profile"
            />
          </div>
          <div className="md:w-4/5 w-3/4 md:pt-3 md:-ml-2">
            <div className=" text-xl font-semibold text-white font-sans">
              {data.name}
            </div>
            <div className="flex mt-1">
              <div className="text-sm font-light text-abuabuPrimary font-sans">
                Username:
              </div>
              <div className="text-sm font-normal text-white font-sans ml-3">
                {data.username}
              </div>
            </div>
            <div className="flex mt-1 w-full h-auto">
              <div className="text-sm font-light text-abuabuPrimary font-sans md:w-auto w-1/3">
                Kode Driver
              </div>
              <div className="text-sm font-normal text-white font-sans w-2/3 flex flex-wrap items-stretch">
                <h1>: {data.driver_code}</h1>
              </div>
            </div>
            <div className="flex mt-1">
              <div className="text-sm  font-light text-abuabuPrimary font-sans">
                Status
              </div>
              <div className="text-sm font-normal text-white font-sans">
                : Aktif
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-12 flex justify-center">
        <Tabs
          // centered
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable auto tabs example"
        >
          <List style={flexContainer}>
            <ListItem
              fullWidth
              button
              key="Semua"
              onClick={() => handleCategory(0)}
              selected={category === 0 ? true : false}
            >
              <ListItemText
                className={
                  category === 0
                    ? "text-white text-sans"
                    : "text-gray-400 text-sans"
                }
                primary="Info Akun"
              />
            </ListItem>

            <ListItem
              fullWidth
              button
              key="General"
              onClick={() => handleCategory(1)}
              selected={category === 1 ? true : false}
            >
              <ListItemText
                className={
                  category === 1
                    ? "text-white text-sans"
                    : "text-gray-400 text-sans"
                }
                primary="Info Rekening"
              />
            </ListItem>
          </List>
        </Tabs>
      </div>
      {/* <div className="-mt-8 bg-white rounded-t-3xl justify-center flex flex-col"> */}
      <div>
        <TabPanel value={category} index={0}>
          <InfoAkun data={data} />
        </TabPanel>
        <TabPanel value={category} index={1}>
          <InfoRekening data={data} />
        </TabPanel>
      </div>
    </div>
  );
}

export default Profile;
