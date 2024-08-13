import TopBar from "@/Components/TopBar";
import { AppBar, Box, CssBaseline, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import SideNav from "@/Components/SideNav";
import { usePage } from "@inertiajs/react";

const drawerWidth = 258;

export default function AuthLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                className="bg-background dark:bg-gray-900"
                sx={{ display: "flex" }}
            >
                <CssBaseline />
                <TopBar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                    handleMenu={handleMenu}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    role={user.role}
                />
                <Box
                    component="nav"
                    sx={{
                        width: { md: drawerWidth },
                        flexShrink: { md: 0 },
                    }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", md: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                borderRight: "var(--border)",
                            },
                        }}
                    >
                        <SideNav role={user.role} width={drawerWidth} />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", md: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                borderRight: "1px dashed rgb(var(--border))",
                            },
                        }}
                        open
                    >
                        <SideNav role={user.role} width={drawerWidth} />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    className="flex-1 px-6 py-16 mt-4 min-h-screen"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${258}px)` },
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
}
