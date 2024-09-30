import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
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

export default function Register({ success, hospitals }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Success");
    const [modalContent, setModalContent] = useState(
        "The user was added Successfully"
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
        specialty: "",
        hospital_id: null,
        profile_photo: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onSuccess: () => {
                if (success) {
                    console.log(success);
                }
                setModalTitle("Success!");
                setModalContent("The user was added successfully");
                reset();
            },
            onError: (errors) => {
                setModalTitle("Error!!");
                setModalContent("Failed to add the user");
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

            <BackButton previous="users" />

            <Box className="flex w-full justify-center">
                <Paper
                    elevation={6}
                    className="flex-1 align-center text-front border-bd border-2 bg-background m-6 md:m-2 rounded-lg p-6 max-w-md"
                >
                    <Box className="max-w-sm">
                        <Typography
                            className="text-lg"
                            justifyContent={"center"}
                        >
                            Add New User
                        </Typography>
                        <form onSubmit={submit}>
                            <div className="my-2">
                                <Typography className="text-front">
                                    Name
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

                            <div className="my-4">
                                <Typography className="text-front">
                                    Email
                                </Typography>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="my-4">
                                <Typography className="text-front">
                                    Password
                                </Typography>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="my-4">
                                <Typography className="text-front">
                                    Comfirm Password
                                </Typography>
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            {/* Role Select Menu */}
                            <div className="mt-4">
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        Role
                                    </Typography>
                                    <Select
                                        className="border border-front mt-1 block w-full bg-background text-front"
                                        name="role"
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                        required
                                    >
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Admin"
                                        >
                                            Admin
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Nurse"
                                        >
                                            Nurse
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Specialist"
                                        >
                                            Specialist
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Doctor"
                                        >
                                            Doctor
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            </div>
                            {/* Hospital Select Menu */}
                            <div
                                className={
                                    (data.role === "Admin" && "hidden") ||
                                    "mt-4 bg-background"
                                }
                            >
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        Hospital
                                    </Typography>
                                    <Select
                                        className="mt-1 block w-full bg-background border border-front text-front"
                                        name="role"
                                        value={data.hospital_id}
                                        onChange={(e) =>
                                            setData(
                                                "hospital_id",
                                                e.target.value
                                            )
                                        }
                                        disabled={data.role === "Admin"}
                                    >
                                        {hospitals &&
                                            hospitals.map((hospital) => (
                                                <MenuItem
                                                    key={hospital.id}
                                                    className="text-gray-900"
                                                    value={hospital.id}
                                                >
                                                    {hospital.name}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                                <InputError
                                    message={errors.hospital_id}
                                    className="mt-2"
                                />
                            </div>
                            {/* Specialty Select Menu */}
                            <div
                                className={
                                    (data.role !== "Specialist" && "hidden") ||
                                    "mt-4 bg-background"
                                }
                            >
                                <FormControl className="xs:w-full w-1/2">
                                    <Typography className="text-front">
                                        Specialty
                                    </Typography>
                                    <Select
                                        className="mt-1 block w-full bg-background border border-front text-front"
                                        name="role"
                                        value={data.specialty}
                                        onChange={(e) =>
                                            setData("specialty", e.target.value)
                                        }
                                        disabled={data.role !== "Specialist"}
                                    >
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Cardiology"
                                        >
                                            Cardiology
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Neurology"
                                        >
                                            Neurology
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Orthopedics"
                                        >
                                            Orthopedics
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Pediatrics"
                                        >
                                            Pediatrics
                                        </MenuItem>
                                        <MenuItem
                                            className="text-gray-900"
                                            value="Radiology"
                                        >
                                            Radiology
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <InputError
                                    message={errors.specialty}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="bg-bd ms-4"
                                    disabled={processing}
                                >
                                    Add User
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
