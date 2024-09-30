import DataTable from "@/Components/DataTable";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, router } from "@inertiajs/react";
import { Add, OpenInNew } from "@mui/icons-material";
import {
    Box,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

const Hospitals = ({ hospitals }) => {
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
            field: "type",
            headerName: "Type",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "district_hospital_name",
            headerName: "District Hospital",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "central_hospital_name",
            headerName: "Central Hospital",
            flex: 1,
            headerClassName: "bg-background",
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            sortable: false,
            headerClassName: "bg-background",
            renderCell: (params) => (
                <SecondaryButton
                    className="mt-1 bg-inherit"
                    onClick={() => router.visit(`/hospitals/${params.id}`)}
                >
                    <OpenInNew />
                </SecondaryButton>
            ),
        },
    ];

    return (
        <>
            <Head title="Hospitals" />
            <AuthLayout>
                <Box className="flex my-4 mx-8">
                    <Typography className="flex-1 my-auto">
                        Hospitals
                    </Typography>
                    <PrimaryButton
                        onClick={() => router.get(route("hospitals.register"))}
                    >
                        <Add />
                    </PrimaryButton>
                </Box>
                <div>
                    <DataTable columns={columns} rows={hospitals} />
                </div>
            </AuthLayout>
        </>
    );
};

export default Hospitals;
