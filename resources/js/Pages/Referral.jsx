// src/components/ReferralDetails.jsx
import React, { useEffect, useState } from "react";
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
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import ReferralAction from "@/Components/ReferralAction";

const Referral = ({ referral, auth, hospital, hospitals }) => {
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
                <BackButton previous="incoming" />
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
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Patient Name
                                </TableCell>
                                <TableCell className="text-front">
                                    {referral.name}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Gender
                                </TableCell>
                                <TableCell className="text-front">
                                    {referral.gender}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Age
                                </TableCell>
                                <TableCell className="text-front">
                                    {referral.age}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Urgency
                                </TableCell>
                                <TableCell className="text-front">
                                    <div className="flex flex-col w-1/2">
                                        {referral.urgency === "Low" && (
                                            <span className="text-center m-2 px-2 py-1 bg-green-500 text-white rounded-full ">
                                                Low
                                            </span>
                                        )}
                                        {referral.urgency === "Medium" && (
                                            <span className="text-center m-2 px-2 py-1 bg-yellow-500 text-white rounded-full">
                                                Medium
                                            </span>
                                        )}
                                        {referral.urgency === "High" && (
                                            <span className="text-center m-2 px-2 py-1 bg-red-500 text-white rounded-full">
                                                High
                                            </span>
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Referred From (Hospital)
                                </TableCell>

                                <TableCell className="text-front">
                                    {hospital}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Blood Group
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.blood_group}
                                </TableCell>
                            </TableRow>

                            {referral.gender === "f" && (
                                <>
                                    {" "}
                                    <TableRow>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            className="text-front"
                                        >
                                            lnmp
                                        </TableCell>

                                        <TableCell className="text-front">
                                            {referral.lnmp}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            className="text-front"
                                        >
                                            Para
                                        </TableCell>

                                        <TableCell className="text-front">
                                            {referral.para}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            className="text-front"
                                        >
                                            LCB
                                        </TableCell>

                                        <TableCell className="text-front">
                                            {referral.lcb}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            className="text-front"
                                        >
                                            Gravida
                                        </TableCell>

                                        <TableCell className="text-front">
                                            {referral.gravida}
                                        </TableCell>
                                    </TableRow>
                                </>
                            )}

                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Reported From
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.reported_from}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Reported On
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.reported_on}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Complaints
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["complaints"].join(", ")}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Complaints Duration
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["duration"]}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Examination Findings
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["examination_findings"].join(
                                        ", "
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Working Diagnosis
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.working_diagnosis}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Differential Diagnosis
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.differential_diagnosis}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Pre-referral Management
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["pre_referral_management"].join(
                                        ", "
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Procedure
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.procedure}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Procedure Findings
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["findings"]}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Reasons For Referral
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["reasons"].join(", ")}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Department Referral Directed
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["department_referral_directed"]}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Units Of Blood
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.blood_units}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Designation
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.designation}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    DHO Name
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral.DHO_name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    component="td"
                                    scope="row"
                                    className="text-front"
                                >
                                    Other Remarks
                                </TableCell>

                                <TableCell className="text-front">
                                    {referral["other-remarks"]}
                                </TableCell>
                            </TableRow>
                            <TableCell></TableCell>
                            <TableCell className="flex justify-end">
                                <ReferralAction
                                    referral={referral}
                                    role={auth.user.role}
                                    status={referral.status}
                                    hospitals={hospitals}
                                    userHospitalId={auth.user.hospital_id}
                                />
                            </TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </AuthLayout>
    );
};

export default Referral;
