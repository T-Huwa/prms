import InputError from "@/Components/InputError";
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
import { useEffect } from "react";

export default function NewWard({ success }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Success");
    const [modalContent, setModalContent] = useState(
        "The ward was added Successfully"
    );
    const hospitalId = usePage().props.hospital.id;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        hospital_id: hospitalId,
    });

    useEffect(() => {
        axios
            .get(`/hospitals/${hospitalId}/specialists`)
            .then((response) => {
                setSpecialists(response.data.specialists);
                console.log(response.data.specialists);
            })
            .catch((error) => {
                console.error("Error fetching specialists:", error);
            });
    }, [hospitalId]);

    const submit = (e) => {
        e.preventDefault();

        post(route("wards.store"), {
            onSuccess: () => {
                if (success) {
                    console.log(success);
                }
                setModalTitle("Success!");
                setModalContent("The ward was added successfully");
                reset();
            },
            onError: (errors) => {
                setModalTitle("Error!!");
                setModalContent("Failed to add the ward");
                console.log(errors);
            },
            onFinish: () => {
                setModalOpen(true);
            },
        });
    };

    return (
        <>
            <Head title="Register Ward" />

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

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="bg-bd ms-4"
                                    disabled={processing}
                                >
                                    Add Ward
                                </PrimaryButton>
                            </div>
                        </form>
                    </Box>
                </div>
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
        </>
    );
}
