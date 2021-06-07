import React, { useState } from 'react'
import { Link } from "react-router-dom";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HelpIcon from '@material-ui/icons/Help'


function FAQ() {
    const [openCairkanSaldo, setOpenCairkanSaldo] = useState(false);
    const [listitem1, setListitem1] = useState(false);
    const [listitem2, setListitem2] = useState(false);
    const [listitem3, setListitem3] = useState(false);
    // const [listitem4, setListitem4] = useState(false);
    // const [listitem5, setListitem5] = useState(false);

    return (

        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
                <div className="mx-auto">
                    <div className="h-full w-full">
                        <div className="bg-biru h-20 rounded-t-none flex flex-row justify-start ">
                            <Link to="/driver/information">
                                <div className="text-white ml-5 mr-28 py-6">
                                    <ArrowBackIosIcon />
                                </div>
                            </Link>
                            <div className="font-sans text-white text-2xl font-semibold py-6 ">
                                Tanya Jawab
                        </div>
                        </div>

                        <div className={openCairkanSaldo ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                            <List aria-labelledby="nested-list-subheader">
                                <ListItem button onClick={() => setOpenCairkanSaldo(!openCairkanSaldo)}>
                                    <ListItemIcon>
                                        <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara mencairkan saldo</Typography>} />
                                    {openCairkanSaldo ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={openCairkanSaldo} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Typography variant="subtitle1">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>

                        <div className={listitem1 ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                            <List aria-labelledby="nested-list-subheader">
                                <ListItem button onClick={() => setListitem1(!listitem1)}>
                                    <ListItemIcon>
                                        <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara revisi absen</Typography>} />
                                    {listitem1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={listitem1} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Typography variant="subtitle1" >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>

                        <div className={listitem2 ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                            <List aria-labelledby="nested-list-subheader">
                                <ListItem button onClick={() => setListitem2(!listitem2)}>
                                    <ListItemIcon>
                                        <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara revisi absen</Typography>} />
                                    {listitem2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={listitem2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Typography variant="subtitle1" >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>

                        <div className={listitem3 ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                            <List aria-labelledby="nested-list-subheader">
                                <ListItem button onClick={() => setListitem3(!listitem3)}>
                                    <ListItemIcon>
                                        <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara revisi absen</Typography>} />
                                    {listitem3 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={listitem3} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Typography variant="subtitle1" >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>

                        {/* <div className={listitem4 ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                        <List aria-labelledby="nested-list-subheader">
                            <ListItem button onClick={() => setListitem4(!listitem4)}>
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara revisi absen</Typography>} />
                                {listitem4 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={listitem4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem>
                                        <Typography variant="subtitle1" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </div> */}

                        {/* <div className={listitem5 ? "shadow-md h-30 w-full p-4 bg-blue-100" : "shadow-md h-30 w-full p-4 "}>

                        <List aria-labelledby="nested-list-subheader">
                            <ListItem button onClick={() => setListitem5(!listitem5)}>
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className="font-sans text-xl font-bold ">Cara revisi absen</Typography>} />
                                {listitem5 ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={listitem5} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem>
                                        <Typography variant="subtitle1" >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbi rem ipsum dolor sit amet, consectetur adipiscing elit. Neque in eu lectus lacus, habitant egestas morbirem ipsum dolor sit amet, consectetur adipi.
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </div> */}

                    </div>
                </div>
            </div>
        </div>


    )
}

export default FAQ
