import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                "poppins-regular": "Poppins-Regular",
                "poppins-medium": "Poppins-Medium",
                "poppins-bold": "Poppins-Bold",
                aptos: "Aptos",
                "aptos-bold": "Aptos-Bold",
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: "transparent",
                background: "rgba(var(--background))",
                front: "rgba(var(--text))",
                bd: "rgba(var(--border))",
            },
        },
    },

    plugins: [forms],
};
