import React from 'react'


import CardContact from '../../components/cardContact/CardContact'
import CardMessage from '../../components/cardMessage/CardMessage'



function Admin() {

    return (
        <div className="h-full w-full ">
            <div className="flex flex-col justify-center">
                <CardContact />
            </div>
            <div className="flex flex-col justify-center">
                <CardMessage />
            </div>
            <div className="flex flex-col justify-center">
                <CardMessage />
            </div>
            <div className="flex flex-col justify-center">
                <CardMessage />
            </div>
            <div className="flex flex-col justify-center">
                <CardMessage />
            </div>
            

        </div>
    )
}

export default Admin
