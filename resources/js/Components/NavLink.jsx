import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "bg-background menu-item flex items-center px-4 py-2 rounded-md inline-flex items-center border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "text-gray-900 focus:border-indigo-700 shadow-md active "
                    : "border-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
