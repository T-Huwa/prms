import { Link } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import welcome from "../../assets/welcome.svg";

const WelcomeSection = () => (
    <div className="flex bg-gradient-to-r from-blue-600 to-blue-300 p-6 rounded-lg text-white mb-8">
        <Box className="flex-1">
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome back 👋
            </Typography>
            <Typography variant="h6" component="p" className="my-10">
                Streamline the process of referring patients to other hospitals
            </Typography>
            <Link
                href={"/referral/new"}
                className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                New Referral
            </Link>
        </Box>
        <Box className="h-40 w-40 flex justify-center items-center">
            <img src={welcome} alt="Logo" className="m-4 text-blue-200" />
        </Box>
    </div>
);

export default WelcomeSection;
