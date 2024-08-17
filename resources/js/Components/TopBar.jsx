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
} from "@mui/material";

import { HiOutlineMenuAlt1, HiUserCircle } from "react-icons/hi";
import NavLink from "./NavLink";
import { Link, usePage } from "@inertiajs/react";
import DarkMode from "./DarkMode/DarkMode";

export default function TopBar({
    drawerWidth,
    handleDrawerToggle,
    handleMenu,
    anchorEl,
    handleClose,
    role,
}) {
    const { auth } = usePage().props;
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
                {}
                {role === "Specialist" && (
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
                            <Link className="px-4" href={route("profile.edit")}>
                                Profile
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link
                                className="px-4"
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}
