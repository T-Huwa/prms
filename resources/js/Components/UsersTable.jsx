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
import { Box, Button, IconButton, InputBase } from "@mui/material";
import TextInput from "./TextInput";
import { HiSearch } from "react-icons/hi";

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
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter users based on search query
    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.email} ${user.role} ${user.hospital} ${user.specialty}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    function confirmingUserDeletion(id) {
        setSelectedUser(users.find((user) => user.id === id));
        console.log("selected User: ");
        console.log(selectedUser);
        setModalOpen(true);
    }

    return (
        <>
            <Paper
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Users"
                    inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <HiSearch />
                </IconButton>
            </Paper>
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
                            <StyledTableCell className="pl-0">
                                Name
                            </StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Role</StyledTableCell>
                            <StyledTableCell>Hospital</StyledTableCell>
                            <StyledTableCell>Specialty</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map((user) => (
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
                                <StyledTableCell>
                                    {user.hospital}
                                </StyledTableCell>
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
                        <h2 className="text-xl font-medium text-red-600">
                            Warning!
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            You are about to delete the user{" "}
                            {selectedUser &&
                                selectedUser.name +
                                    " (" +
                                    selectedUser.email +
                                    ")"}
                            .
                            <br />
                            This action cannot be reversed!
                        </p>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </SecondaryButton>
                            <DangerButton className="ml-4">
                                <Link
                                    method="delete"
                                    href={
                                        selectedUser &&
                                        "/users/" + selectedUser.id
                                    }
                                    as="button"
                                >
                                    Delete User
                                </Link>
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </TableContainer>
        </>
    );
}
