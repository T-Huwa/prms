import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Poppins",
            textTransform: "none",
            fontSize: 13,
        },
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <App {...props} />
                </StyledEngineProvider>
            </ThemeProvider>
        );
    },
    progress: {
        delay: 250,
        color: "var(--text)",
    },
});
