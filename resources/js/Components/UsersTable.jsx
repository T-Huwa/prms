import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TableHead from "@mui/material/TableHead";
import { DeleteForever } from "@mui/icons-material";
import { Link } from "@inertiajs/react";
import Modal from "./Modal";
import DangerButton from "./DangerButton";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { Box, Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 14,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function UsersTable({ users }) {
    const [modalOpen, setModalOpen] = useState(false);
    // const [modalTitle, setModalTitle] = useState("");
    // const [modalContent, setModalContent] = useState("");
    const [selectedUserId, setSelectedUserId] = useState("");

    function confirmingUserDeletion(id) {
        setSelectedUserId(id);
        setModalOpen(true);
    }

    // function deleteUser(id) {
    //     delete(route("register"), {
    //         onSuccess: () => {
    //             if (success) {
    //                 alert(success);
    //             }
    //             console.log(success);
    //             setModalTitle("Success!");
    //             setModalContent("The user was deleted successfully");
    //             reset();
    //         },
    //         onError: (errors) => {
    //             setModalTitle("Error!!");
    //             setModalContent("Failed to delete the user");
    //             console.log(errors);
    //         },
    //         onFinish: () => {
    //             setModalOpen(true);
    //         },
    //     });
    // }

    return (
        <TableContainer
            component={Paper}
            elevation={6}
            className="border-2 border-bd"
            sx={{
                borderRadius: "12px",
                overflow: "hidden",
                minWidth: 700,
            }}
        >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell className="pl-0">Name</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Role</StyledTableCell>
                        <StyledTableCell>Hospital</StyledTableCell>
                        <StyledTableCell>Specialty</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell className="pr-0 mx-0">
                                <Avatar
                                    alt={user.name}
                                    src={user.profile_photo}
                                />
                            </StyledTableCell>
                            <StyledTableCell
                                className="pl-0"
                                component="th"
                                scope="row"
                            >
                                {user.name}
                            </StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>{user.role}</StyledTableCell>
                            <StyledTableCell>{user.hospital}</StyledTableCell>
                            <StyledTableCell>
                                {user.role === "Specialist"
                                    ? user.specialty
                                    : "-"}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button
                                    className="bg-red-700 border-2 text-white hover:bg-red-500 p-1 rounded-full"
                                    aria-label="delete"
                                    onClick={() =>
                                        confirmingUserDeletion(user.id)
                                    }
                                >
                                    <DeleteForever />
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <form className="p-6">
                    <h2 className="text-lg font-medium text-front">Warning!</h2>

                    <p className="mt-1 text-sm text-gray-500">
                        You are about to delete the user {selectedUserId}. This
                        action cannot be reversed
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={() => setModalOpen(false)}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ml-4">
                            <Link href={"/users/" + selectedUserId}>
                                Delete User
                            </Link>
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </TableContainer>
    );
}
