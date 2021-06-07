import React from 'react'
import { Link } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import parse from 'html-react-parser'


function CardNews({ data }) {
    // var parseContent = parse(data[1].content)
    // var parseContent = parse(data[1].content)
    // console.log(data[1].content)
    // if (String(parseContent.length) >= 169) {
    //     var subStrContent = String(parseContent).substring(0, 166)
    //     var content = subStrContent + '...'
    // } else if (String(parseContent.length) <= 169) {
    //     var content = String(parseContent)
    // }
    // var content = String(parseContent).substring(0, 169)
    return (
        <div className="shadow-md h-64 w-full p-4 mt-2">
            <div className="grid grid-cols-2 ml-3">
                <div className='col-span-2 mt-2 break-words font-sans font-bold truncate'>
                    {data[1].title}
                </div>

                <div className="mt-2 text-xs break-words font-sans text-abuabuPrimary">
                    <PersonIcon fontSize="inherit" /> Aditya Nugraha
                     </div>

                <div className="-ml-24 mt-2 text-xs break-words font-sans text-abuabuPrimary">
                    <AccessTimeIcon fontSize="inherit" /> {data[1].created_at.substring(0, 10)}
                </div>

                <div className="row-span-2 mt-2">
                    <img src={data[1].photo} alt="berita" width="70%" />
                </div>

                <div className="-ml-10 mt-2 text-xs break-words font-sans font-medium overflow-clip">
                    {/* {content} */}
                    {parse(data[1].content)} 
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa at aenean pharetra, sed in nunc cursus aliquet magna. Nec hac scelerisque morbi purus, fusce. Vitae moles. */}
                </div>
                <div className="-ml-10 text-sm break-words font-sans font-medium text-biru">
                    <Link
                        to="/news/slug"
                    >
                        Baca Selengkapnya <ChevronRightIcon fontSize="small" />
                    </Link>
                </div>



                {/* <div className="-ml-10 text-sm break-words font-sans">
                    <CallIcon fontSize="inherit"/> 08223329213
                </div>
                <div className="-ml-14 text-sm break-words font-sans">
                <CallIcon fontSize="inherit"/> 08223329213 
            </div> */}
            </div>

        </div>

    )
}

export default CardNews
