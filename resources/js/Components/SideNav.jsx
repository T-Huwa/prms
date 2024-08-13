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
import NavLink from "./NavLink";
import { usePage } from "@inertiajs/react";

const SideNav = ({ role, width }) => {
    var prefix = "";
    if (role === "Admin") {
        prefix = "Admin";
    }
    const component = usePage().component;
    return (
        <Box className="overflow-hidden hover:overflow-y-auto bg-background shadow-md relative w-full p-2 px-2 flex-1">
            <Box>
                <Box className="h-36 flex justify-center items-center border-dashed border-bd border-b-2">
                    <img src={logo} alt="Logo" className="m-4" />
                </Box>
                <List className="mt-2">
                    <ListItem className="bg-background dark:text-white menu-item flex items-center my-1 px-4 rounded-lg">
                        <NavLink
                            href={route("admin.dashboard")}
                            active={component === prefix + "/Dashboard"}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <AiFillDashboard className="mr-3 w-5 h-5" />
                            </ListItemIcon>
                            <ListItemText
                                className="bg-background"
                                primary="Dashboard"
                            />
                        </NavLink>
                    </ListItem>

                    <Typography variant="h-4" className="my-4">
                        Referrals
                    </Typography>

                    <ListItem className="bg-background dark:text-white menu-item flex items-center my-1 py-2.5 px-4 rounded-lg">
                        <NavLink
                            href={route("incoming")}
                            active={component === "Incoming"}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <FaFileArrowDown className="mr-3 w-5 h-5" />
                            </ListItemIcon>
                            <ListItemText primary="Incoming" />
                        </NavLink>
                    </ListItem>

                    <ListItem className="bg-background dark:text-white menu-item flex items-center my-1 py-2.5 px-4 rounded-lg">
                        <NavLink
                            href="/referrals/outgoing"
                            active={component === "Outgoing"}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <FaFileArrowUp className="h-5" />
                            </ListItemIcon>
                            <ListItemText primary="Outgoing" />
                        </NavLink>
                    </ListItem>

                    <ListItem className="bg-background dark:text-white menu-item flex items-center my-1 py-2.5 px-4 rounded-lg">
                        <NavLink
                            href="/referrals/requests"
                            active={component === "Requests"}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <FaFileLines className="h-5" />
                            </ListItemIcon>
                            <ListItemText primary="Requests" />
                        </NavLink>
                    </ListItem>

                    {role === "Admin" && (
                        <>
                            <Typography variant="h-4" className="my-4">
                                Users
                            </Typography>

                            <ListItem className="bg-background dark:text-white menu-item flex items-center my-1 py-2.5 px-4 rounded-lg">
                                <NavLink
                                    href="/admin/users"
                                    active={component === "UsersAll"}
                                    className="w-full"
                                >
                                    <ListItemIcon>
                                        <FaUsers className="h-5" />
                                    </ListItemIcon>
                                    <ListItemText primary="Users" />
                                </NavLink>
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
        </Box>
    );
};

export default SideNav;
