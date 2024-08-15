import { Link, router } from "@inertiajs/react";
import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/material";

const BackButton = ({ previous = "dashboard" }) => {
    return (
        <>
            <Box
                className="block fixed shadow-lg bg-background border-2 border-bd hover:bg-bd hover:border-bd p-2 rounded-full"
                aria-label="back"
                onClick={() => router.visit(route(previous))}
            >
                <ArrowBack />
            </Box>
        </>
    );
};

export default BackButton;
