import React from 'react'


import CardContactPIC from '../../components/cardContactPIC/CardContactPIC'



function PIC() {

    return (
        <div className="mx-auto">
        <div className="h-full w-full ">
            <div className="flex flex-col justify-center">
                <CardContactPIC />
            </div>
            <div className="flex flex-col justify-center">
                <CardContactPIC />
            </div>
            
            </div>

        </div>
    )
}

export default PIC
