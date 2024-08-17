import { Head, Link } from "@inertiajs/react";
import { Home } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";

export default function Unauthorized() {
    return (
        <>
            <Head title="Error" />
            <Box
                display="flex"
                alignItems="center"
                className="bg-background text-text h-screen"
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-front md:text-5xl lg:text-6xl">
                        403
                    </h1>{" "}
                    <Divider
                        orientation="vertical"
                        className="border-2 border-bd m-6"
                    />
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                        You are not authorized to access this page!
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/"
                            className="inline-flex justify-center items-center py-2 px-4 text-base font-medium text-center text-front rounded-lg border-2 border-bd hover:bg-bd focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800"
                        >
                            <Home className="h-8" />
                        </Link>
                    </div>
                </div>
            </Box>
        </>
    );
}
