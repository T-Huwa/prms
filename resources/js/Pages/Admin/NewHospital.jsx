import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import BackButton from "@/Components/BackButton";
import {
    Box,
    FormControl,
    MenuItem,
    Paper,
    Select,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";

export default function NewHospital({
    success,
    central_hospitals,
    district_hospitals,
}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Success");
    const [modalContent, setModalContent] = useState(
        "The hospital was added Successfully"
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        type: "",
        district_hospital_id: "",
        central_hospital_id: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("hospitals.register"), {
            onSuccess: () => {
                if (success) {
                    console.log(success);
                }
                setModalTitle("Success!");
                setModalContent("The hospital was added successfully");
                reset();
            },
            onError: (errors) => {
                setModalTitle("Error!!");
                setModalContent("Failed to add the hospital");
                console.log(errors);
            },
            onFinish: () => {
                setModalOpen(true);
            },
        });
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <BackButton previous="hospitals" />

            <Box className="flex w-full justify-center">
                <Paper
                    elevation={6}
                    className="flex-1 align-center text-front border-bd border-2 bg-background m-6 md:m-2 rounded-lg p-6 max-w-md"
                >
                    <Box className="max-w-sm">
                        <Typography
                            className="text-lg my-4"
                            justifyContent={"center"}
                        >
                            Add New Hospital
                        </Typography>
                        <form onSubmit={submit}>
                            <div className="my-2">
                                <Typography className="text-front">
                                    Hospital Name
                                </Typography>
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            {/* Type Select Menu */}
                            <div className="mt-4">
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        Hospital Type
                                    </Typography>
                                    <Select
                                        className="border border-front mt-1 block w-full bg-background text-front"
                                        name="role"
                                        value={data.type}
                                        onChange={(e) =>
                                            setData("type", e.target.value)
                                        }
                                        required
                                    >
                                        <MenuItem
                                            className="text-gray-900"
                                            value="H-Center"
                                        >
                                            Health Center
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="District"
                                        >
                                            District Hospital
                                        </MenuItem>

                                        <MenuItem
                                            className="text-gray-900"
                                            value="Private"
                                        >
                                            Private
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Central"
                                        >
                                            Central Hospital
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <InputError
                                    message={errors.type}
                                    className="mt-2"
                                />
                            </div>

                            {/* District Hospital Select Menu */}
                            <div
                                className={
                                    data.type === "H-Center"
                                        ? "mt-4 bg-background"
                                        : "hidden"
                                }
                            >
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        District Hospital
                                    </Typography>
                                    <Select
                                        className="mt-1 block w-full bg-background border border-front text-front"
                                        name="role"
                                        value={data.district_hospital_id}
                                        onChange={(e) =>
                                            setData(
                                                "district_hospital_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {district_hospitals &&
                                            district_hospitals.map(
                                                (hospital) => (
                                                    <MenuItem
                                                        key={hospital.id}
                                                        className="text-gray-900"
                                                        value={hospital.id}
                                                    >
                                                        {hospital.name}
                                                    </MenuItem>
                                                )
                                            )}
                                    </Select>
                                </FormControl>
                                <InputError
                                    message={errors.district_hospital_id}
                                    className="mt-2"
                                />
                            </div>

                            {/* Specialty Select Menu */}
                            <div
                                className={
                                    data.type === "District" ||
                                    data.type === "Private"
                                        ? "mt-4 bg-background"
                                        : "hidden"
                                }
                            >
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        Central Hospital
                                    </Typography>
                                    <Select
                                        className="mt-1 block w-full bg-background border border-front text-front"
                                        name="role"
                                        value={data.central_hospital_id}
                                        onChange={(e) =>
                                            setData(
                                                "central_hospital_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {central_hospitals &&
                                            central_hospitals.map(
                                                (hospital) => (
                                                    <MenuItem
                                                        key={hospital.id}
                                                        className="text-gray-900"
                                                        value={hospital.id}
                                                    >
                                                        {hospital.name}
                                                    </MenuItem>
                                                )
                                            )}
                                    </Select>
                                </FormControl>

                                <InputError
                                    message={errors.central_hospital_id}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="bg-bd ms-4"
                                    disabled={processing}
                                >
                                    Add Hospital
                                </PrimaryButton>
                            </div>
                        </form>
                    </Box>
                </Paper>
            </Box>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <form className="p-6">
                    <h2 className="text-lg font-medium text-front">
                        {modalTitle}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">{modalContent}</p>

                    <div className="mt-6 flex justify-end text-gray-900">
                        <SecondaryButton onClick={() => setModalOpen(false)}>
                            Ok
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthLayout>
    );
}
