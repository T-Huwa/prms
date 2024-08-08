import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Toolbar,
    Divider,
    Button,
} from "@mui/material";

import { HiOutlineMenuAlt1, HiUserCircle } from "react-icons/hi";
import NavLink from "./NavLink";

export default function TopBar({
    drawerWidth,
    handleDrawerToggle,
    handleMenu,
    anchorEl,
    handleClose,
    role,
}) {
    return (
        <AppBar
            position="fixed"
            className="shadow-none border-b-2 border-blue-300"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
                backgroundColor: "rgba(243, 244, 246, 0.6)",
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
                    className="hidden md:block"
                    variant="h6"
                    color={"primary"}
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    {role}
                </Typography>
                <Button variant="outlined">Request Referral</Button>
                <Divider
                    className="m-4"
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <HiUserCircle />
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
                            <NavLink href={route("profile.edit")}>
                                Profile
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}
