import logo from "../../assets/logoipsum.svg";
import { FaUsers, FaUserDoctor, FaUserNurse } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { FaFileArrowDown, FaFileArrowUp, FaFileLines } from "react-icons/fa6";
import { AiFillDashboard } from "react-icons/ai";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

const SideNav = ({ role }) => {
    return (
        <Box className="bg-gray-100 shadow-md relative px-2 w-64 flex-1">
            <Box className="p-2">
                <Box className="h-36 flex justify-center items-center border-dashed border-b-2">
                    <img src={logo} alt="Logo" className="m-4" />
                </Box>
                <List className="mt-2">
                    <ListItem
                        component="a"
                        href="/"
                        className="menu-item active flex items-center my-1 py-2.5 px-4 rounded-lg"
                    >
                        <ListItemIcon>
                            <AiFillDashboard className="mr-3 w-5 h-5" />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <Typography variant="h-4" className="my-4">
                        Referrals
                    </Typography>

                    <ListItem
                        component="a"
                        href="/"
                        className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                    >
                        <ListItemIcon>
                            <FaFileArrowDown className="mr-3 w-5 h-5" />
                        </ListItemIcon>
                        <ListItemText primary="Incoming" />
                    </ListItem>

                    <ListItem
                        component="a"
                        href="/"
                        className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                    >
                        <ListItemIcon>
                            <FaFileArrowUp className="mr-3 w-5 h-5" />
                        </ListItemIcon>
                        <ListItemText primary="Outgoing" />
                    </ListItem>

                    <ListItem
                        component="a"
                        href="#"
                        className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                    >
                        <ListItemIcon>
                            <FaFileLines className="mr-3 w-5 h-5" />
                        </ListItemIcon>
                        <ListItemText primary="Requests" />
                    </ListItem>

                    {role === "Admin" && (
                        <>
                            <Typography variant="h-4" className="my-4">
                                Users
                            </Typography>

                            <ListItem
                                component="a"
                                href="#"
                                className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                            >
                                <ListItemIcon>
                                    <FaUsers className="mr-3 w-5 h-5" />
                                </ListItemIcon>
                                <ListItemText primary="All Users" />
                            </ListItem>

                            <ListItem
                                component="a"
                                href="#"
                                className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                            >
                                <ListItemIcon>
                                    <RiAdminFill className="mr-3 w-5 h-5" />
                                </ListItemIcon>
                                <ListItemText primary="Admins" />
                            </ListItem>

                            <ListItem
                                component="a"
                                href="#"
                                className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                            >
                                <ListItemIcon>
                                    <FaUserNurse className="mr-3 w-5 h-5" />
                                </ListItemIcon>
                                <ListItemText primary="Nurses" />
                            </ListItem>

                            <ListItem
                                component="a"
                                href="#"
                                className="menu-item flex items-center my-1 py-2.5 px-4 rounded-lg"
                            >
                                <ListItemIcon>
                                    <FaUserDoctor className="mr-3 w-5 h-5" />
                                </ListItemIcon>
                                <ListItemText primary="Specialists" />
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
        </Box>
    );
};

export default SideNav;
