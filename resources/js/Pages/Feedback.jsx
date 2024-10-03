import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link } from "@inertiajs/react";
import { ArrowBackIos, ArrowBackIosRounded } from "@mui/icons-material";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

const Feedback = ({ feedback, referral_id }) => {
    const management =
        typeof feedback.management === "string"
            ? JSON.parse(feedback.management)
            : feedback.management;

    const post_discharge_instructions =
        typeof feedback.post_discharge_instructions === "string"
            ? JSON.parse(feedback.post_discharge_instructions)
            : feedback.post_discharge_instructions;
    if (!feedback) {
        return (
            <AuthLayout>
                <Head title="Referral-" />
                <Box>
                    <BackButton />
                    <Divider className="text-2xl mb-5">
                        Referral Feedback
                    </Divider>
                    <Backnav id={referral_id} />
                    <Box className="m-6">
                        <Typography>Feedback Not Found!</Typography>{" "}
                    </Box>
                </Box>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout>
            <Head title={"Referral - " + feedback.id} />
            <div className="p-4">
                <Backnav id={referral_id} />
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Feedback Details
                </h1>
                <Table aria-label="feedback details table">
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
                                Referral ID
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.referral_id}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Date
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.date}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Final Diagnosis
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.final_diagnosis}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Other Diagnoses
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.other_diagnoses}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Management
                            </TableCell>
                            <TableCell className="text-front">
                                <ul>
                                    {management &&
                                        management.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Type of Surgery
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.type_of_surgery}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Findings
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.findings}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Outcome
                            </TableCell>
                            <TableCell className="text-front">
                                {feedback.outcome}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="td"
                                scope="row"
                                className="text-front"
                            >
                                Post Discharge Instructions
                            </TableCell>
                            <TableCell className="text-front">
                                <ul>
                                    {post_discharge_instructions &&
                                        post_discharge_instructions.map(
                                            (instruction, index) => (
                                                <li key={index}>
                                                    {instruction}
                                                </li>
                                            )
                                        )}
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AuthLayout>
    );
};

function Backnav({ id }) {
    return (
        <Link
            href={`/referrals/show/${id}`}
            className="mb-4 inline-block border-bd border-2 text-front fixed p-2 hover:bg-bd rounded-full"
        >
            <ArrowBackIosRounded />
        </Link>
    );
}

export default Feedback;
