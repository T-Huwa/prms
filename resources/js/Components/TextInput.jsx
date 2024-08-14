import { TextField } from "@mui/material";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", label = "", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        // <input
        //     {...props}
        //     type={type}
        //     className={
        //         "py-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
        //         className
        //     }
        //     ref={input}
        // />
        <TextField
            {...props}
            type={type}
            label={label}
            fullWidth
            variant="outlined"
            size="small"
            ref={input}
        />
    );
});
