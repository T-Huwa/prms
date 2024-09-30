import { Box, MenuItem, Select, Typography } from "@mui/material";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";

const Assign = ({ userId, wards }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: userId,
        ward_id: "",
    });

    const submit = (e) => {
        e.preventDefault();

        axios
            .patch(route("wards.add.user"), data)
            .then((response) => {
                alert(response.data.message);
                reset();
                router.reload();
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <>
            <Box className="flex w-full justify-center">
                <div className="flex-1 align-center text-front m-6 md:m-2 p-6 w-full">
                    <Box className="w-full">
                        <Typography
                            className="text-lg my-4"
                            justifyContent={"center"}
                        >
                            Add New Ward
                        </Typography>
                        <form onSubmit={submit}>
                            <div className="my-2">
                                <Typography className="text-front">
                                    Select Ward
                                </Typography>
                                <Select
                                    className="border border-front mt-1 block w-full bg-background text-front"
                                    name="ward_id" // Change this to match the data you are handling
                                    value={data.ward_id}
                                    onChange={(e) =>
                                        setData("ward_id", e.target.value)
                                    }
                                    required
                                >
                                    {wards.map((ward) => (
                                        <MenuItem
                                            key={ward.id}
                                            className="text-gray-900"
                                            value={ward.id}
                                        >
                                            {ward.name}{" "}
                                            {/* Display the ward name */}
                                        </MenuItem>
                                    ))}
                                </Select>

                                <InputError
                                    message={errors.ward_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="bg-bd ms-4"
                                    disabled={processing}
                                >
                                    Assign
                                </PrimaryButton>
                            </div>
                        </form>
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default Assign;
