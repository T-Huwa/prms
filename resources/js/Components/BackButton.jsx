import { Link } from "@inertiajs/react";
import { ArrowBack } from "@mui/icons-material";

const BackButton = () => {
    return (
        <>
            <Link
                className="fixed shadow-lg bg-blue-200 hover:bg-blue-400 hover:shadow-xl p-2 rounded-full"
                aria-label="back"
                href={route("back")}
            >
                <ArrowBack />
            </Link>
        </>
    );
};

export default BackButton;
