import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
function InfoAkun({ data }) {
  console.log(data, ';info');
  return (
    <div>
      <div className="bg-white  justify-center flex flex-col">
        <div className=" ml-3">
          <div className="font-sans text-abuabuSecondary text-xl font-semibold md:mt-2 sm:py-2">
            Data Diri
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Email
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
            {data.email}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Phone 1
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
          {data.phone_primary}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Phone 2
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
          {data.phone_secondary}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Alamat Tinggal
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
          {data.address}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-2"></div>
      <div className="bg-white  justify-center flex flex-col">
        <div className=" ml-3">
          <div className="font-sans text-abuabuSecondary text-xl font-semibold mt-2">
            Kontak Darurat
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Nama Kontak Darurat
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
            Labib Taufiq
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-1">
            Phone Kontak Darurat
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-1">
            082931230929
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-2"></div>

      <Link to="/profile/oldpassword">
        <div className="bg-white  justify-start flex flex-col mt-2 py-3">
          <div className=" ml-3">
            <div className="font-sans text-abuabuSecondary text-xl font-semibold float-left">
              Ubah Password
            </div>
            <div className="font-sans text-abuabuSecondary text-xl font-semibold float-right">
              <NavigateNextIcon />
            </div>
          </div>
        </div>
      </Link>

      <div className="bg-gray-200 h-2"></div>
    </div>
  );
}

export default InfoAkun;
