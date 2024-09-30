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
    Box,
} from "@mui/material";
import AuthLayout from "@/Layouts/AuthLayout.jsx";

export default function Outgoing() {
    const { referrals } = usePage().props;
    console.log(referrals);

    return (
        <>
            <Head title="Outgoing Referrals" />
            <AuthLayout>
                <Box className="px-4 md:px-16">
                    <Divider className="text-xl mb-5">
                        Outgoing Referrals
                    </Divider>
                    <TableContainer
                        component={Paper}
                        className="text-front rounded-xl shadow-lg bg-background border-2 border-bd"
                    >
                        <Table>
                            <TableHead className="bg-blue-300">
                                <TableRow>
                                    <TableCell className="text-lg">
                                        Name
                                    </TableCell>
                                    <TableCell className="text-lg">
                                        Referral Officer
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
                                    <TableCell className="text-lg">
                                        Target Hospital
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {referrals.map((referral) => (
                                    <TableRow
                                        key={referral.id}
                                        className="hover:bg-front/20"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            router.get(
                                                `/referrals/show/${referral.id}`
                                            )
                                        }
                                    >
                                        <TableCell className="text-front">
                                            {referral.name}
                                        </TableCell>
                                        <TableCell className="text-front">
                                            {referral.referring_officer.name}
                                        </TableCell>
                                        <TableCell className="text-front">
                                            {referral.status}
                                        </TableCell>
                                        <TableCell className="text-front">
                                            {referral.working_diagnosis}
                                        </TableCell>
                                        <TableCell className="text-front">
                                            <div className="flex flex-col">
                                                <span>
                                                    {" "}
                                                    {new Date(
                                                        referral.reported_on
                                                    ).toLocaleDateString()}
                                                    {referral.urgency ===
                                                        "Low" && (
                                                        <span className="m-2 px-2 py-1 bg-green-500 rounded-full">
                                                            Low
                                                        </span>
                                                    )}
                                                    {referral.urgency ===
                                                        "Medium" && (
                                                        <span className="m-2 px-2 py-1 bg-yellow-500 text-white rounded-full">
                                                            Medium
                                                        </span>
                                                    )}
                                                    {referral.urgency ===
                                                        "High" && (
                                                        <span className="m-2 px-2 py-1 bg-red-500 text-white rounded-full">
                                                            High
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-front">
                                            {referral.hospital}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </AuthLayout>
        </>
    );
}
