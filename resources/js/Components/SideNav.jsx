import { FaUsers } from "react-icons/fa6";
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
import Logo from "@/Assets/Logo";
import { useEffect, useState } from "react";

const SideNav = () => {
    const { auth } = usePage().props;
    const role = auth.user.role;

    const [prefix, setPrefix] = useState("");
    useEffect(() => {
        if (role === "Admin") {
            setPrefix("admin.");
        } else if (role === "Specialist") {
            setPrefix("specialist.");
        }
    }, []);

    const component = usePage().component;
    return (
        <Box className="overflow-hidden hover:overflow-y-auto bg-background relative w-full p-2 px-2 flex-1">
            <Box>
                <Box className="items-center grid grid-cols-1 h-36 flex justify-center items-center border-dashed border-bd border-b-2">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div className="flex justify-center">{auth.user.name}</div>
                </Box>
                <List className="mt-2">
                    <ListItem>
                        <NavLink
                            href={route(prefix + "dashboard")}
                            active={usePage().url.includes("dashboard")}
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

                    <ListItem>
                        <NavLink
                            href={route("incoming")}
                            active={usePage().url.includes("incoming")}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <FaFileArrowDown className="mr-3 w-5 h-5" />
                            </ListItemIcon>
                            <ListItemText primary="Incoming" />
                        </NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink
                            href={route("outgoing")}
                            active={usePage().url.includes("outgoing")}
                            className="w-full"
                        >
                            <ListItemIcon>
                                <FaFileArrowDown className="mr-3 w-5 h-5" />
                            </ListItemIcon>
                            <ListItemText primary="Outgoing" />
                        </NavLink>
                    </ListItem>

                    {role === "Specialist" && (
                        <ListItem>
                            <NavLink
                                href={route("internal")}
                                active={usePage().url.includes("internal")}
                                className="w-full"
                            >
                                <ListItemIcon>
                                    <FaFileArrowDown className="mr-3 w-5 h-5" />
                                </ListItemIcon>
                                <ListItemText primary="Internal" />
                            </NavLink>
                        </ListItem>
                    )}

                    {role === "Admin" && (
                        <>
                            <Typography variant="h-4" className="my-4">
                                Administrator
                            </Typography>

                            <ListItem>
                                <NavLink
                                    href={route("users")}
                                    active={usePage().url.includes("user")}
                                    className="w-full"
                                >
                                    <ListItemIcon>
                                        <FaUsers className="h-5" />
                                    </ListItemIcon>
                                    <ListItemText primary="Users" />
                                </NavLink>
                            </ListItem>

                            <ListItem>
                                <NavLink
                                    href={route("hospitals")}
                                    active={usePage().url.includes("hospitals")}
                                    className="w-full"
                                >
                                    <ListItemIcon>
                                        <FaUsers className="h-5" />
                                    </ListItemIcon>
                                    <ListItemText primary="Hospitals" />
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
