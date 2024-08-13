import React from "react";
import { Head, router, usePage } from "@inertiajs/react";

import {
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import TestLayout from "@/Layouts/AuthLayout.jsx";
import AuthLayout from "@/Layouts/AuthLayout.jsx";

export default function Incoming({ auth }) {
    const { referrals } = usePage().props;
    console.log(referrals);
    // const navigate = useNavigate();

    // const handleRowClick = (id) => {
    //     navigate(`/referral/${id}`);
    // };

    console.log(auth.user);

    return (
        <>
            <Head title="Incoming Referrals" />
            <AuthLayout>
                <Divider className="text-xl mb-5">Incoming Referrals</Divider>
                <TableContainer
                    component={Paper}
                    className="text-front rounded-xl shadow-lg bg-background border-2"
                >
                    <Table>
                        <TableHead className="bg-blue-300">
                            <TableRow>
                                <TableCell className="text-lg">Name</TableCell>
                                <TableCell className="text-lg">
                                    Hospital
                                </TableCell>
                                <TableCell className="text-lg">
                                    Status
                                </TableCell>
                                <TableCell className="text-lg">
                                    Working Diagnosis
                                </TableCell>
                                <TableCell className="text-lg">
                                    Reported On / Urgency
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {referrals.map((referral) => (
                                <TableRow
                                    key={referral.id}
                                    className="hover:bg-gray-300 dark:hover:bg-gray-600"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        router.get(`/referrals/${referral.id}`)
                                    }
                                >
                                    <TableCell className="text-front">
                                        {referral.Name}
                                    </TableCell>
                                    <TableCell className="text-front">
                                        {referral.Hospital}
                                    </TableCell>
                                    <TableCell className="text-front">
                                        {referral.Status}
                                    </TableCell>
                                    <TableCell className="text-front">
                                        {referral.WorkingDiagnosis}
                                    </TableCell>
                                    <TableCell className="text-front">
                                        <div className="flex flex-col">
                                            <span>
                                                {" "}
                                                {new Date(
                                                    referral.ReportedOn
                                                ).toLocaleDateString()}
                                                {referral.Urgency === "Low" && (
                                                    <span className="m-2 px-2 py-1 bg-green-500 rounded-full">
                                                        Low
                                                    </span>
                                                )}
                                                {referral.Urgency ===
                                                    "Medium" && (
                                                    <span className="m-2 px-2 py-1 bg-yellow-500 text-white rounded-full">
                                                        Medium
                                                    </span>
                                                )}
                                                {referral.Urgency ===
                                                    "High" && (
                                                    <span className="m-2 px-2 py-1 bg-red-500 text-white rounded-full">
                                                        High
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </AuthLayout>
        </>
    );
}
