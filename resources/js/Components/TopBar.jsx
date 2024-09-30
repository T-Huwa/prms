import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Toolbar,
    Divider,
    Button,
    Avatar,
    Switch, // Import the Switch component for the toggle
    FormControlLabel, // For a labeled switch
} from "@mui/material";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, usePage } from "@inertiajs/react";
import DarkMode from "./DarkMode/DarkMode";
import { useState } from "react";
import axios from "axios";

export default function TopBar({
    drawerWidth,
    handleDrawerToggle,
    handleMenu,
    anchorEl,
    handleClose,
    role,
}) {
    const { auth } = usePage().props;

    // State to manage "on duty" status
    const [onDuty, setOnDuty] = useState(auth.user.onDuty); // Assuming onDuty is passed in user data

    // Function to toggle "on duty" status and send the change to the server
    const handleToggleDuty = () => {
        setOnDuty(!onDuty); // Optimistically update the state

        axios
            .patch(`/toggle-duty/${auth.user.id}`, {
                onDuty: !onDuty,
            })
            .then((response) => {
                console.log("On duty status updated:", response.data);
            })
            .catch((error) => {
                console.error("Error updating on duty status:", error);
                // Revert state if there's an error
                setOnDuty(onDuty);
            });
    };

    return (
        <AppBar
            position="fixed"
            className="shadow-none bg-transparent"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
                backdropFilter: "blur(2px)",
            }}
        >
            <Toolbar>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}
                >
                    <HiOutlineMenuAlt1 />
                </IconButton>
                <Typography
                    variant="h6"
                    className="text-front"
                    component="div"
                    sx={{ flexGrow: 1, fontSize: 18 }}
                >
                    {role}
                </Typography>

                {role === "Doctor" && (
                    <Link
                        href={route("referrals.new")}
                        className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        New Referral
                    </Link>
                )}

                <DarkMode />

                <Divider
                    className="m-4 border-bd"
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />
                <div>
                    <IconButton
                        className="text-front"
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <Avatar
                            alt={auth.user.name}
                            src={auth.user.profile_photo}
                        />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link
                                className="px-4  text-gray-700"
                                href={route("profile.edit")}
                            >
                                Profile
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link
                                className="px-4 text-gray-700"
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Link>
                        </MenuItem>

                        <Divider />

                        {/* On Duty Toggle below the Logout button */}
                        <MenuItem>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={onDuty}
                                        onChange={handleToggleDuty}
                                        name="onDuty"
                                        color="primary"
                                    />
                                }
                                label={onDuty ? "On Duty" : "Off Duty"}
                            />
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}
