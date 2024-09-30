import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BackButton from "@/Components/BackButton";

const Ward = ({ ward, users }) => {
    console.log(users);
    return (
        <>
            <Head title={ward.name} />

            <AuthLayout>
                <BackButton />
                <p className="text-xl text-bold text-center">{ward.name}</p>
                <hr className="border-bd my-4" />
                <div className="w-full rounded-md">
                    <h3 className="text-center text-lg text-bold">
                        Ward Staff
                    </h3>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name </TableCell>
                                    <TableCell align="right">Role</TableCell>
                                    <TableCell align="right">
                                        Specialty
                                    </TableCell>
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.role}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.specialty}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.onDuty ? (
                                                <span
                                                    style={{
                                                        backgroundColor:
                                                            "green",
                                                        color: "white",
                                                        padding: "5px 10px",
                                                        borderRadius: "20px",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    On Duty
                                                </span>
                                            ) : (
                                                <span
                                                    style={{
                                                        backgroundColor:
                                                            "yellow",
                                                        color: "black",
                                                        padding: "5px 10px",
                                                        borderRadius: "20px",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Off Duty
                                                </span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </AuthLayout>
        </>
    );
};

export default Ward;
