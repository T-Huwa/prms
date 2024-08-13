import { Head, Link } from "@inertiajs/react";
import { Box } from "@mui/material";
import { IoLogIn } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Box
                display="flex"
                alignItems="center"
                className="bg-background text-text h-screen"
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        We Simplify The Referring Process
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Non doloribus nesciunt repudiandae natus,
                        voluptatibus saepe totam possimus est. Iste adipisci aut
                        earum non necessitatibus ducimus est illum enim eaque
                        iusto?
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link
                            href="/login"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Login
                            <SlLogin className="ml-5 h-8" />
                        </Link>
                    </div>
                </div>
            </Box>
        </>
    );
}
