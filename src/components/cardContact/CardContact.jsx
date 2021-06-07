import React from 'react'
import CallIcon from '@material-ui/icons/Call';

function CardContact() {
    return (

        <div className="shadow-md h-28 w-full p-4">
            <div className="grid grid-cols-3 grid-flow-col">
                <div className='row-span-3 ml-3'>
                    <img className="w-14 h-14 object-cover rounded-full" src="https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg" alt="foto profile" width="40px" />
                </div>
                <div className="-ml-10 col-span-2 text-base break-words font-sans text-abuabuPrimary">
                    Super PIC
                </div>
                <div className="-ml-10 col-span-2 text-lg break-words font-sans font-medium">
                    Aidil Farhan - AD892
                </div>
                <div className="-ml-10 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit"/> 08223329213
                </div>
                <div className="md:-ml-14 sm:-ml-10 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit"/> 08223329213 
                </div>
            </div>
            
        </div>


    )
}

export default CardContact
