import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

function CardNotification({ el }) {

  return (
    // <Link to="/message/content">
      <div className="shadow-sm h-26 w-full p-4">
        <div className="grid grid-cols-3 grid-flow-col">
          <div className="row-span-3 ml-3 mt-2">
            <img
              src="../asset/icons/mail_icon.png"
              alt="icon message"
              width="50px"
            />
          </div>
          <div className="-ml-10 text-base break-words font-sans font-bold">
            Pesan
          </div>
          <div className="-ml-10 text-xs break-words font-sans text-abuabuPrimary">
            {el.code}
          </div>
          <div className="col-span-2 -ml-10 text-sm break-words font-sans font-medium bg-red my-2">
            {el.content}
          </div>
          <div className="ml-7 text-xs break-words font-sans font-medium text-abuabuPrimary">
            {moment(el.created_at).format('lll')}
          </div>
          {/* <div className="-ml-10 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit"/> 08223329213
                </div>
                <div className="-ml-14 text-sm break-words font-sans">
                <CallIcon fontSize="inherit"/> 08223329213 
            </div> */}
        </div>
      </div>
    // </Link>
  );
}

export default CardNotification;
