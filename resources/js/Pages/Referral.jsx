// src/components/ReferralDetails.jsx
import React from "react";
import {
    Box,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import BackButton from "@/Components/BackButton";
import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";

const Referral = () => {
    const { props } = usePage();
    const { referral } = props;

    console.log(referral);

    if (!referral) {
        return (
            <AuthLayout>
                <Head title="Referral-" />
                <Box>
                    <BackButton />
                    <Divider className="text-2xl mb-5">
                        Incoming Referral
                    </Divider>
                    <Box className="m-6">
                        <Typography>Referral Not Found!</Typography>{" "}
                    </Box>
                </Box>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            {/* <Head title=`Referral{{referral.id}}` /> */}
            <Head title={"Referral-" + referral.ReferralID} />
            <Box>
                <BackButton />
                <Divider className="text-2xl mb-5">Incoming Referral</Divider>
                <TableContainer
                    component={Paper}
                    className="rounded-xl shadow-lg border-2 border-bd bg-background text-front"
                >
                    <Table aria-label="referral details table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="text-lg text-front">
                                    Field
                                </TableCell>
                                <TableCell className="text-lg text-front">
                                    Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(referral).map((key) => (
                                <TableRow key={key}>
                                    <TableCell
                                        component="td"
                                        scope="row"
                                        className="text-front"
                                    >
                                        {key}
                                    </TableCell>
                                    <TableCell className="text-front">
                                        {Array.isArray(referral[key])
                                            ? referral[key].join(", ")
                                            : referral[key]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </AuthLayout>
    );
};

export default Referral;
