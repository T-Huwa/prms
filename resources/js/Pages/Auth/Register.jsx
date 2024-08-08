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

export default function Register() {
    const { props } = usePage();

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
        specialty: "",
        hospital_id: "",
        profile_photo: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onSuccess: () => {
                if (props.success) {
                    alert(props.success);
                }
            },
            onError: (errors) => {
                console.log(errors);
                alert("There were validation errors.");
            },
            onFinish: () => {
                //alert("Done");
            },
        });
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <BackButton />

            <Paper elevation={6} className="m-6 rounded-lg bg-white p-6">
                <Typography
                    className="text-lg text-b"
                    justifyContent={"center"}
                >
                    Add New User
                </Typography>
                <form onSubmit={submit}>
                    <div>
                        <TextInput
                            id="name"
                            name="name"
                            label="Name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="password"
                            label="Password"
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

                    <div className="mt-4">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            label="Comfirm Password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
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
                        <InputLabel htmlFor="role" value="Role" />

                        {/* <select
                            id="role"
                            name="role"
                            value={data.role}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("role", e.target.value)}
                            required
                        >
                            <option value="">Select a role</option>
                            <option value="Admin">Admin</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Specialist">Specialist</option>
                        </select> */}

                        <FormControl className="xs:w-full w-1/2">
                            <InputLabel id="demo-simple-select-label">
                                Role
                            </InputLabel>
                            <Select
                                className="tetx-gray"
                                labelId="demo-simple-select-label"
                                name="role"
                                value={data.role}
                                label="Role"
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                required
                            >
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="Nurse">Nurse</MenuItem>
                                <MenuItem value="Specialist">
                                    Specialist
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <InputError message={errors.role} className="mt-2" />
                    </div>

                    {/* Specialty Select Menu */}
                    <div className="mt-4">
                        <InputLabel htmlFor="specialty" value="Specialty" />

                        <select
                            id="specialty"
                            name="specialty"
                            value={data.specialty}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("specialty", e.target.value)
                            }
                            required
                        >
                            <option value="">Select a specialty</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Nrthopedics">Orthopedics</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Radiology">Radiology</option>
                        </select>

                        <InputError
                            message={errors.specialty}
                            className="mt-2"
                        />
                    </div>

                    {/* Hospital Select Menu */}
                    <div className="mt-4">
                        <InputLabel htmlFor="hospital" value="Hospital" />

                        <select
                            id="hospital_id"
                            name="hospital_id"
                            value={data.hospital_id}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("hospital_id", e.target.value)
                            }
                            required
                        >
                            <option value="">Select a hospital</option>
                            <option value="General Hospital">
                                General Hospital
                            </option>
                            <option value="city_hospital">City Hospital</option>
                            <option value="Saint Mary Hospital">
                                Saint Mary Hospital
                            </option>
                            <option value="county_hospital">
                                County Hospital
                            </option>
                            <option value="University Hospital">
                                University Hospital
                            </option>
                        </select>

                        <InputError
                            message={errors.hospital}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Add User
                        </PrimaryButton>
                    </div>
                </form>
            </Paper>
        </AuthLayout>
    );
}
