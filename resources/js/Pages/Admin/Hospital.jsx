import BackButton from "@/Components/BackButton";
import DataTable from "@/Components/DataTable";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, router } from "@inertiajs/react";
import { Add, Expand, OpenInNew } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import axios from "axios";
import { useEffect } from "react";
import NewWard from "@/Components/Wards/NewWard";
import Assign from "@/Components/Wards/Assign";

const Hospital = ({ hospital }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [assignWardModalOpen, setAssignWardModalOpen] = useState(false);
    const [specialists, setSpecialists] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [nurses, setNurses] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const specialistsWithWardNames = specialists.map((specialist) => ({
        id: specialist.id,
        name: specialist.name,
        specialty: specialist.specialty,
        ward: specialist.ward ? specialist.ward.name : "No Ward", // Ensure this property includes the ward name
    }));

    const doctorsWithWardNames = doctors.map((doctor) => ({
        id: doctor.id,
        name: doctor.name,
        ward: doctor.ward ? doctor.ward.name : "No Ward", // Ensure this property includes the ward name
    }));

    const columns = [
        {
            field: "id",
            headerName: "ID",
            maxWidth: 70,
            headerClassName: "bg-background",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            headerClassName: "bg-background",
            renderCell: (params) => (
                <SecondaryButton
                    className="mt-1 bg-inherit"
                    onClick={() => router.get(`/wards/${params.id}`)}
                >
                    <OpenInNew />
                </SecondaryButton>
            ),
        },
    ];

    const colS = [
        {
            field: "id",
            headerName: "ID",
            maxWidth: 70,
            headerClassName: "bg-background",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "specialty",
            headerName: "Specialty",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "ward",
            headerName: "Ward",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 1,
            headerClassName: "bg-background",
            renderCell: (params) => (
                <SecondaryButton
                    className="mt-1 bg-inherit"
                    onClick={() => openAssignModal(params.id)}
                >
                    Assign Ward
                </SecondaryButton>
            ),
        },
    ];

    const colD = [
        {
            field: "id",
            headerName: "ID",
            maxWidth: 70,
            headerClassName: "bg-background",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "ward",
            headerName: "Ward",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            flex: 1,
            headerClassName: "bg-background",
            renderCell: (params) => (
                <SecondaryButton
                    className="mt-1 bg-inherit"
                    onClick={() => openAssignModal(params.id)}
                >
                    Assign Ward
                </SecondaryButton>
            ),
        },
    ];

    const colN = [
        {
            field: "id",
            headerName: "ID",
            maxWidth: 70,
            headerClassName: "bg-background",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerClassName: "bg-background",
        },
    ];

    const [wards, setWards] = useState([]);

    function openAssignModal(id) {
        setAssignWardModalOpen(true);
        setSelectedUser(id);
    }

    // Use Axios to fetch wards from the backend
    useEffect(() => {
        axios
            .get("/wards")
            .then((response) => {
                setWards(response.data.wards);
            })
            .catch((error) => {
                console.error("Error fetching wards:", error);
            });

        axios
            .get(route("hospitals.get.staff", { id: hospital.id }))
            .then((response) => {
                setSpecialists(response.data.specialists);
                setNurses(response.data.nurses);
                setDoctors(response.data.doctors);
            })
            .catch((error) => {
                console.error("Error fetching wards:", error);
            });
    }, []);

    return (
        <>
            <Head title={"Hospital " + hospital.id} />
            <AuthLayout>
                <BackButton previous="hospitals" />
                <Typography
                    className="text-center font-bold text-xl"
                    variant="h3"
                >
                    Hospital Details
                </Typography>
                <Paper elevation={4} className="my-6 p-6">
                    <p>
                        {" "}
                        <span className="font-bold">Name: </span>
                        {hospital.name}{" "}
                    </p>
                    <p>
                        {" "}
                        <span className="font-bold">Type: </span>
                        {hospital.type}{" "}
                    </p>
                    {hospital.type === "H-Center" && (
                        <>
                            <p>
                                <span className="font-bold">
                                    District Hospital:
                                </span>

                                {hospital.district_hospital_name}
                            </p>
                        </>
                    )}
                    {hospital.type === "District" && (
                        <>
                            <p>
                                <span className="font-bold">
                                    Central Hospital:{" "}
                                </span>
                                {hospital.central_hospital_name}
                            </p>
                        </>
                    )}
                </Paper>

                <Box className="grid grid-cols-1 gap-4">
                    <Paper elevation={4} className="p-4 max-w-lg w-full">
                        <Box className="flex">
                            <Typography
                                className="text-center font-bold text-lg flex-1"
                                variant="h5"
                            >
                                Specialties / Wards
                            </Typography>
                            <PrimaryButton onClick={() => setModalOpen(true)}>
                                <Add /> <span className="ml-2">New Ward</span>
                            </PrimaryButton>
                        </Box>
                        <Divider className="my-4" />
                        <DataTable columns={columns} rows={wards} />
                    </Paper>

                    <Paper elevation={4} className="p-4 w-full">
                        <Box className="flex">
                            <Typography
                                className="text-center font-bold text-lg flex-1"
                                variant="h5"
                            >
                                Specialists
                            </Typography>
                        </Box>
                        <Divider className="my-4" />
                        <DataTable
                            columns={colS}
                            rows={specialistsWithWardNames}
                        />
                    </Paper>

                    <Paper elevation={4} className="p-4 w-full">
                        <Box className="flex">
                            <Typography
                                className="text-center font-bold text-lg flex-1"
                                variant="h5"
                            >
                                Doctors
                            </Typography>
                        </Box>
                        <Divider className="my-4" />
                        <DataTable columns={colD} rows={doctorsWithWardNames} />
                    </Paper>

                    <Paper elevation={4} className="p-4 max-w-lg w-full">
                        <Box className="flex">
                            <Typography
                                className="text-center font-bold text-lg flex-1"
                                variant="h5"
                            >
                                Nurses
                            </Typography>
                        </Box>
                        <Divider className="my-4" />
                        <DataTable columns={colN} rows={nurses} />
                    </Paper>
                </Box>

                <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                    <NewWard />
                </Modal>

                <Modal
                    show={assignWardModalOpen}
                    onClose={() => setAssignWardModalOpen(false)}
                >
                    <Assign userId={selectedUser} wards={wards} />
                </Modal>
            </AuthLayout>
        </>
    );
};

export default Hospital;
