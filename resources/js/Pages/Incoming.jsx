import React from "react";
import { router } from "@inertiajs/react";

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

const referrals = [
    {
        ReferralID: "1",
        Urgency: 1,
        Hospital: "City Hospital",
        Name: "John Doe",
        Sex: "m",
        Age: 45,
        BloodGroup: "A+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Home",
        ReportedOn: "2024-07-25",
        PresentingComplaints: [
            "Chest pain",
            "Shortness of breath",
            "Dizziness",
        ],
        Duration: "2 days",
        ExaminationFindings: [
            "Elevated blood pressure",
            "Irregular heartbeat",
            "Pale complexion",
        ],
        WorkingDiagnosis: "Myocardial infarction",
        DifferentialDiagnosis: ["Angina", "Pulmonary embolism"],
        PreReferralManagement: [
            "Aspirin given",
            "Oxygen administered",
            "IV fluids started",
        ],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Need for specialized care",
            "Unstable condition",
            "Further diagnostics",
        ],
        DepartmentReferralDirected: "Cardiology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Smith",
        Designation: "GP",
        NameDHO: "Dr. Johnson",
        Status: "Requested",
    },
    {
        ReferralID: "2",
        Urgency: 2,
        Hospital: "General Hospital",
        Name: "Jane Smith",
        Sex: "f",
        Age: 34,
        BloodGroup: "O-",
        LNMP: "2024-06-20",
        Gravida: 2,
        Para: 1,
        LCB: 1,
        ReportedFrom: "H Center",
        ReportedOn: "2024-07-26",
        PresentingComplaints: ["Severe abdominal pain", "Nausea"],
        Duration: "1 day",
        ExaminationFindings: ["Tender abdomen", "Vomiting", "Pale complexion"],
        WorkingDiagnosis: "Ectopic pregnancy",
        DifferentialDiagnosis: ["Appendicitis", "Ovarian cyst rupture"],
        PreReferralManagement: ["IV fluids started", "Pain relief given"],
        Procedure: "Laparotomy",
        Findings: "Ruptured ectopic pregnancy",
        ReasonsForReferral: [
            "Surgical intervention required",
            "Patient's condition deteriorating",
        ],
        DepartmentReferralDirected: "Gynecology",
        UnitsOfBlood: 2,
        ReferringOfficer: "Dr. Adams",
        Designation: "Obstetrician",
        NameDHO: "Dr. Brown",
        Status: "Sent",
    },
    {
        ReferralID: "3",
        Urgency: 3,
        Hospital: "County Hospital",
        Name: "Michael Johnson",
        Sex: "m",
        Age: 52,
        BloodGroup: "B+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Home",
        ReportedOn: "2024-07-27",
        PresentingComplaints: ["Severe headache", "Blurred vision"],
        Duration: "3 days",
        ExaminationFindings: ["High blood pressure", "Neurological deficits"],
        WorkingDiagnosis: "Cerebral hemorrhage",
        DifferentialDiagnosis: ["Stroke", "Migraine"],
        PreReferralManagement: ["Blood pressure control", "CT scan done"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Neurological assessment required",
            "Critical condition",
        ],
        DepartmentReferralDirected: "Neurology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Clark",
        Designation: "Neurologist",
        NameDHO: "Dr. Harris",
        Status: "Accepted",
    },
    {
        ReferralID: "4",
        Urgency: 1,
        Hospital: "Regional Hospital",
        Name: "Emily Davis",
        Sex: "f",
        Age: 28,
        BloodGroup: "AB+",
        LNMP: "2024-07-10",
        Gravida: 1,
        Para: 0,
        LCB: 0,
        ReportedFrom: "TBA",
        ReportedOn: "2024-07-28",
        PresentingComplaints: ["Heavy vaginal bleeding", "Abdominal cramps"],
        Duration: "4 hours",
        ExaminationFindings: [
            "Low blood pressure",
            "Rapid pulse",
            "Pale complexion",
        ],
        WorkingDiagnosis: "Miscarriage",
        DifferentialDiagnosis: ["Placental abruption", "Preterm labor"],
        PreReferralManagement: [
            "IV fluids started",
            "Blood transfusion initiated",
        ],
        Procedure: "D&C",
        Findings: "Incomplete miscarriage",
        ReasonsForReferral: [
            "Urgent surgical intervention",
            "Hemodynamic instability",
        ],
        DepartmentReferralDirected: "Obstetrics",
        UnitsOfBlood: 1,
        ReferringOfficer: "Dr. Lewis",
        Designation: "GP",
        NameDHO: "Dr. White",
        Status: "Under Treatment",
    },
    {
        ReferralID: "5",
        Urgency: 1,
        Hospital: "District Hospital",
        Name: "Chris Lee",
        Sex: "m",
        Age: 60,
        BloodGroup: "O+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Other",
        ReportedOn: "2024-07-29",
        PresentingComplaints: ["Fever", "Severe joint pain", "Rash"],
        Duration: "5 days",
        ExaminationFindings: [
            "Elevated temperature",
            "Swollen joints",
            "Rash on trunk",
        ],
        WorkingDiagnosis: "Dengue fever",
        DifferentialDiagnosis: ["Malaria", "Chikungunya"],
        PreReferralManagement: ["Antipyretics given", "IV fluids started"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Specialized infectious disease care",
            "Severe symptoms",
        ],
        DepartmentReferralDirected: "Infectious Diseases",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Martin",
        Designation: "GP",
        NameDHO: "Dr. Green",
        Status: "Referred Back",
    },
    {
        ReferralID: "6",
        Urgency: 1,
        Hospital: "Metropolitan Hospital",
        Name: "Sarah Kim",
        Sex: "f",
        Age: 50,
        BloodGroup: "B-",
        LNMP: "2024-07-05",
        Gravida: 3,
        Para: 2,
        LCB: 2,
        ReportedFrom: "Home",
        ReportedOn: "2024-07-30",
        PresentingComplaints: [
            "Shortness of breath",
            "Cough with sputum",
            "Fatigue",
        ],
        Duration: "1 week",
        ExaminationFindings: [
            "Crackles in lungs",
            "Cyanosis",
            "Low oxygen saturation",
        ],
        WorkingDiagnosis: "Pneumonia",
        DifferentialDiagnosis: ["COPD exacerbation", "Tuberculosis"],
        PreReferralManagement: ["Antibiotics started", "Oxygen therapy"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Respiratory support needed",
            "Poor response to initial treatment",
        ],
        DepartmentReferralDirected: "Pulmonology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Perez",
        Designation: "Pulmonologist",
        NameDHO: "Dr. Thompson",
        Status: "Discharged",
    },
    {
        ReferralID: "7",
        Urgency: 1,
        Hospital: "Suburban Hospital",
        Name: "David Brown",
        Sex: "m",
        Age: 72,
        BloodGroup: "A-",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "H Center",
        ReportedOn: "2024-07-31",
        PresentingComplaints: ["Confusion", "Weakness", "Difficulty speaking"],
        Duration: "2 hours",
        ExaminationFindings: ["Aphasia", "Hemiplegia", "High blood pressure"],
        WorkingDiagnosis: "Stroke",
        DifferentialDiagnosis: ["Transient ischemic attack", "Seizure"],
        PreReferralManagement: ["CT scan done", "Blood pressure management"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Urgent neurological intervention",
            "Critical condition",
        ],
        DepartmentReferralDirected: "Neurology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Nguyen",
        Designation: "Neurologist",
        NameDHO: "Dr Mumba",
        Status: "Discharged",
    },
    {
        ReferralID: "8",
        Urgency: 1,
        Hospital: "City Hospital",
        Name: "John Doe",
        Sex: "m",
        Age: 45,
        BloodGroup: "A+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Home",
        ReportedOn: "2024-07-25",
        PresentingComplaints: [
            "Chest pain",
            "Shortness of breath",
            "Dizziness",
        ],
        Duration: "2 days",
        ExaminationFindings: [
            "Elevated blood pressure",
            "Irregular heartbeat",
            "Pale complexion",
        ],
        WorkingDiagnosis: "Myocardial infarction",
        DifferentialDiagnosis: ["Angina", "Pulmonary embolism"],
        PreReferralManagement: [
            "Aspirin given",
            "Oxygen administered",
            "IV fluids started",
        ],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Need for specialized care",
            "Unstable condition",
            "Further diagnostics",
        ],
        DepartmentReferralDirected: "Cardiology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Smith",
        Designation: "GP",
        NameDHO: "Dr. Johnson",
        Status: "Requested",
    },
    {
        ReferralID: "9",
        Urgency: 1,
        Hospital: "General Hospital",
        Name: "Jane Smith",
        Sex: "f",
        Age: 34,
        BloodGroup: "O-",
        LNMP: "2024-06-20",
        Gravida: 2,
        Para: 1,
        LCB: 1,
        ReportedFrom: "H Center",
        ReportedOn: "2024-07-26",
        PresentingComplaints: ["Severe abdominal pain", "Nausea"],
        Duration: "1 day",
        ExaminationFindings: ["Tender abdomen", "Vomiting", "Pale complexion"],
        WorkingDiagnosis: "Ectopic pregnancy",
        DifferentialDiagnosis: ["Appendicitis", "Ovarian cyst rupture"],
        PreReferralManagement: ["IV fluids started", "Pain relief given"],
        Procedure: "Laparotomy",
        Findings: "Ruptured ectopic pregnancy",
        ReasonsForReferral: [
            "Surgical intervention required",
            "Patient's condition deteriorating",
        ],
        DepartmentReferralDirected: "Gynecology",
        UnitsOfBlood: 2,
        ReferringOfficer: "Dr. Adams",
        Designation: "Obstetrician",
        NameDHO: "Dr. Brown",
        Status: "Sent",
    },
    {
        ReferralID: "10",
        Urgency: 1,
        Hospital: "County Hospital",
        Name: "Michael Johnson",
        Sex: "m",
        Age: 52,
        BloodGroup: "B+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Home",
        ReportedOn: "2024-07-27",
        PresentingComplaints: ["Severe headache", "Blurred vision"],
        Duration: "3 days",
        ExaminationFindings: ["High blood pressure", "Neurological deficits"],
        WorkingDiagnosis: "Cerebral hemorrhage",
        DifferentialDiagnosis: ["Stroke", "Migraine"],
        PreReferralManagement: ["Blood pressure control", "CT scan done"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Neurological assessment required",
            "Critical condition",
        ],
        DepartmentReferralDirected: "Neurology",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Clark",
        Designation: "Neurologist",
        NameDHO: "Dr. Harris",
        Status: "Accepted",
    },
    {
        ReferralID: "11",
        Urgency: 1,
        Hospital: "Regional Hospital",
        Name: "Emily Davis",
        Sex: "f",
        Age: 28,
        BloodGroup: "AB+",
        LNMP: "2024-07-10",
        Gravida: 1,
        Para: 0,
        LCB: 0,
        ReportedFrom: "TBA",
        ReportedOn: "2024-07-28",
        PresentingComplaints: ["Heavy vaginal bleeding", "Abdominal cramps"],
        Duration: "4 hours",
        ExaminationFindings: [
            "Low blood pressure",
            "Rapid pulse",
            "Pale complexion",
        ],
        WorkingDiagnosis: "Miscarriage",
        DifferentialDiagnosis: ["Placental abruption", "Preterm labor"],
        PreReferralManagement: [
            "IV fluids started",
            "Blood transfusion initiated",
        ],
        Procedure: "D&C",
        Findings: "Incomplete miscarriage",
        ReasonsForReferral: [
            "Urgent surgical intervention",
            "Hemodynamic instability",
        ],
        DepartmentReferralDirected: "Obstetrics",
        UnitsOfBlood: 1,
        ReferringOfficer: "Dr. Lewis",
        Designation: "GP",
        NameDHO: "Dr. White",
        Status: "Under Treatment",
    },
    {
        ReferralID: "12",
        Urgency: 1,
        Hospital: "District Hospital",
        Name: "Chris Lee",
        Sex: "m",
        Age: 60,
        BloodGroup: "O+",
        LNMP: null,
        Gravida: null,
        Para: null,
        LCB: null,
        ReportedFrom: "Other",
        ReportedOn: "2024-07-29",
        PresentingComplaints: ["Fever", "Severe joint pain", "Rash"],
        Duration: "5 days",
        ExaminationFindings: [
            "Elevated temperature",
            "Swollen joints",
            "Rash on trunk",
        ],
        WorkingDiagnosis: "Dengue fever",
        DifferentialDiagnosis: ["Malaria", "Chikungunya"],
        PreReferralManagement: ["Antipyretics given", "IV fluids started"],
        Procedure: null,
        Findings: null,
        ReasonsForReferral: [
            "Specialized infectious disease care",
            "Severe symptoms",
        ],
        DepartmentReferralDirected: "Infectious Diseases",
        UnitsOfBlood: 0,
        ReferringOfficer: "Dr. Martin",
        Designation: "GP",
        NameDHO: "Dr. Green",
        Status: "Referred Back",
    },
];

export default function Incoming() {
    // const navigate = useNavigate();

    // const handleRowClick = (id) => {
    //     navigate(`/referral/${id}`);
    // };

    return (
        <>
            <AuthLayout>
                <Divider className="text-xl mb-5">Incoming Referrals</Divider>
                <TableContainer
                    component={Paper}
                    className="rounded-xl shadow-lg"
                >
                    <Table>
                        <TableHead className="bg-blue-200">
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
                                    key={referral.ReferralID}
                                    hover
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        router.get(
                                            `/referrals/${referral.ReferralID}`
                                        )
                                    }
                                >
                                    <TableCell>{referral.Name}</TableCell>
                                    <TableCell>{referral.Hospital}</TableCell>
                                    <TableCell>{referral.Status}</TableCell>
                                    <TableCell>
                                        {referral.WorkingDiagnosis}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span>
                                                {" "}
                                                {new Date(
                                                    referral.ReportedOn
                                                ).toLocaleDateString()}
                                                {referral.Urgency === 1 && (
                                                    <span className="m-2 px-2 py-1 bg-red-500 text-white rounded-full">
                                                        Low
                                                    </span>
                                                )}
                                                {referral.Urgency === 2 && (
                                                    <span className="m-2 px-2 py-1 bg-yellow-500 text-white rounded-full">
                                                        Medium
                                                    </span>
                                                )}
                                                {referral.Urgency === 3 && (
                                                    <span className="m-2 px-2 py-1 bg-green-500 text-white rounded-full">
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
