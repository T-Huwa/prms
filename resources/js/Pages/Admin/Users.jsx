import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import { DeleteForever } from "@mui/icons-material";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import {
    Container,
    Typography,
    Button,
    Box,
    IconButton,
    Table,
    TableBody,
    TableContainer,
    TableRow,
    TableCell,
    Paper,
    Avatar,
    TableHead,
} from "@mui/material";
import { HiSearch } from "react-icons/hi";
import TextInput from "@/Components/TextInput";

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

export default function Users({ auth, users, success }) {
    if (success) console.log(success);
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
        <AuthLayout>
            <Head title="Admin Dashboard" />

            <div>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-star",
                                alignItems: "center",
                                flexGrow: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                className="text-xl mr-4 text-front"
                            >
                                Users
                            </Typography>
                            <Paper
                                sx={{
                                    p: "2px 4px",
                                    display: "flex",
                                    alignItems: "center",
                                    maxWidth: 400,
                                    background: "rgb(var(--background))",
                                }}
                                className="border-2 border-background"
                                elevation={2}
                            >
                                <TextInput
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <IconButton
                                    type="button"
                                    sx={{ p: "10px" }}
                                    aria-label="search"
                                >
                                    <HiSearch />
                                </IconButton>
                            </Paper>
                        </Box>
                        <Link
                            href={route("users.register")}
                            className="bg-background p-3 rounded-full text-xl border-2 hover:bg-bd hover:border-bd"
                        >
                            <FaPlus />
                        </Link>
                    </Box>

                    <div className="py-8">
                        <TableContainer
                            component={Paper}
                            elevation={6}
                            className="border-2 border-bd bg-background"
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                minWidth: 700,
                            }}
                        >
                            <Table
                                aria-label="customized table"
                                className="border-collapse"
                            >
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell className="pl-0 text-lg font-aptos-bold">
                                            Name
                                        </StyledTableCell>
                                        <StyledTableCell className="text-lg font-aptos-bold">
                                            Email
                                        </StyledTableCell>
                                        <StyledTableCell className="text-lg font-aptos-bold">
                                            Role
                                        </StyledTableCell>
                                        <StyledTableCell className="text-lg font-aptos-bold">
                                            Hospital
                                        </StyledTableCell>
                                        <StyledTableCell className="text-lg font-aptos-bold">
                                            Specialty
                                        </StyledTableCell>
                                        <StyledTableCell className="text-lg font-aptos-bold">
                                            Action
                                        </StyledTableCell>
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
                                            <StyledTableCell>
                                                {user.email}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {user.role}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {user.role !== "Admin"
                                                    ? user.hospital
                                                    : "-"}
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
                                                        confirmingUserDeletion(
                                                            user.id
                                                        )
                                                    }
                                                >
                                                    <DeleteForever />
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Modal
                                show={modalOpen}
                                onClose={() => setModalOpen(false)}
                            >
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
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }
                                            >
                                                Delete User
                                            </Link>
                                        </DangerButton>
                                    </div>
                                </form>
                            </Modal>
                        </TableContainer>
                    </div>
                </Container>
            </div>
        </AuthLayout>
    );
}
