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

export default function Internal({ auth }) {
    const { referrals } = usePage().props;

    console.log(auth.user);

    return (
        <>
            <Head title="Internal Referrals" />
            <AuthLayout>
                <Box>
                    <Divider className="text-xl mb-5">
                        Internal Referrals
                    </Divider>
                    <TableContainer
                        component={Paper}
                        className="text-front rounded-lg shadow-lg bg-background border-2 border-bd"
                    >
                        <Table>
                            <TableHead className="bg-blue-300">
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Referring Officer</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Working Diagnosis</TableCell>
                                    <TableCell>Reported On / Urgency</TableCell>
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
