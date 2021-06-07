import React from "react";
import moment from "moment";

function InfoRekening({ data }) {
  return (
    <div>
      <div className="bg-white  justify-center flex flex-col">
        <div className=" ml-3">
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-3 mt-2">
            Foto KTP
          </div>
          <div>
            <img
              src={data?.driver_account?.id_card_photo}
              alt="ktp"
              width="280px"
            />
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-3">
            Rekening Bank
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-3">
            {data?.driver_account?.bank_account}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-3">
            Nama
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-3">
            {data?.driver_account?.account_owner}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-3">
            No.Rekening
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:mt-3">
            {data?.driver_account?.account_number}
          </div>
          <div className="font-sans text-abuabuPrimary text-sm font-medium sm:mt-3">
            Tanggal Mulai
          </div>
          <div className="font-sans text-abuabuSecondary text-base font-medium sm:my-3">
            {moment(data?.driver_account?.created_at).format("llll")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoRekening;
