import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link } from "@inertiajs/react";
import { Container, Typography, Button, Box } from "@mui/material";
import UsersTable from "@/Components/UsersTable";
import { FaPlus } from "react-icons/fa6";

export default function UsersAll({ auth, users }) {
    return (
        <AuthLayout user={auth.user}>
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
                        <Typography variant="h5" className="text-xl">
                            Users
                        </Typography>
                        <Link
                            href={route("users.register")}
                            className="bg-background p-3 rounded-full text-xl border-2 hover:bg-bd hover:border-bd"
                        >
                            <FaPlus />
                        </Link>
                    </Box>

                    <div className="py-8">
                        {/* <WelcomeSection role={auth.user.role} />
                        <StatisticsSection /> */}
                        <UsersTable users={users} />
                    </div>
                </Container>
            </div>
        </AuthLayout>
    );
}
