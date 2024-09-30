import StatisticsSection from "@/Components/StatisticsSection";
import WelcomeSection from "@/Components/WelcomeSection";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import { Container, Typography } from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <AuthLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="min-h-screen lg:px-6">
                <Container maxWidth="lg">
                    {" "}
                    <Typography
                        variant="h5"
                        className="text-3xl text-front font-aptos-bold"
                    >
                        Doctor Dashboard
                    </Typography>
                    <div className="py-8">
                        <WelcomeSection role={auth.user.role} />
                        <StatisticsSection />
                    </div>
                </Container>
            </div>
        </AuthLayout>
    );
}
