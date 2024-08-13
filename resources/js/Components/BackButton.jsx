import { Link } from "@inertiajs/react";
import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/material";

const BackButton = () => {
    return (
        <>
            <Box
                className="block fixed shadow-lg bg-background border-2 border-bd hover:bg-bd hover:border-bd p-2 rounded-full"
                aria-label="back"
                onClick={() => window.history.back()}
            >
                <ArrowBack />
            </Box>
        </>
    );
};

export default BackButton;
