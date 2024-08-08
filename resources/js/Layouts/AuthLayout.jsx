import TopBar from "@/Components/TopBar";
import { AppBar, Box, CssBaseline, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import SideNav from "@/Components/SideNav";
import { usePage } from "@inertiajs/react";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Poppins",
            textTransform: "none",
            fontSize: 13,
        },
    },
});

const drawerWidth = 258;

export default function AuthLayout({ header, children }) {
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
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <Box className="bg-gray-200" sx={{ display: "flex" }}>
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
                                    keepMounted: true,
                                }}
                                sx={{
                                    display: { sm: "block", md: "none" },
                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: drawerWidth,
                                    },
                                }}
                            >
                                <SideNav role={user.role} />
                            </Drawer>
                            <Drawer
                                variant="permanent"
                                sx={{
                                    display: { sm: "none", md: "block" },
                                    backgroundColor: "rgba(0, 0, 255, 0.8)",
                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: drawerWidth,
                                        borderRight: "1px dashed #d1d5db",
                                    },
                                }}
                                open
                            >
                                <SideNav role={user.role} />
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
                </StyledEngineProvider>
            </ThemeProvider>
        </>
    );
}
