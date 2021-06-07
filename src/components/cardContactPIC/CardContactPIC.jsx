import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';


import { Link } from "react-router-dom";

function CardContactPIC() {
    return (

        <div className="shadow-md h-32 w-full p-4">
            <div className="grid grid-rows-4 grid-flow-col">
                <div className='row-span-4 md:ml-3 sm:-ml-0'>
                    <img className="w-14 h-14 object-cover rounded-full" src="https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg" alt="foto profile" width="40px" />
                </div>
                <div className="-ml-5 col-span-2 text-base break-words font-sans text-abuabuPrimary">
                    PIC
                </div>
                <div className="-ml-5 -mt-2 col-span-2 text-lg break-words font-sans font-medium">
                    Aidil Farhan - AD892
                </div>
                <div className="-ml-5 -mt-2 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit" /> 08223329213
                </div>
                <div className="-ml-5 -mt-2 text-sm mr-2">
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/driver/driver"
                        // startIcon={<SendIcon fontSize='big'/>}
                    >

                        <div className="text-sans text-white text-xs font-semibold h-5">
                            Kirim Pesan
                         </div>
                    </Button>
                </div>
                <div className="ml-2 -mt-2 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit" /> 08223329213
                </div>
                <div className="-mt-2 text-sm">
                    <Button
                        fullWidth
                        type="submit"
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/driver/super-pic"
                        // startIcon={<EmailIcon />}
                    >

                        <div className="text-sans text-biru text-xs font-semibold h-5">
                            Lihat Pesan
                         </div>
                    </Button>
                </div>
            </div>

        </div>


    )
}

export default CardContactPIC
