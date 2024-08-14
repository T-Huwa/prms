import StatisticsSection from "@/Components/StatisticsSection";
import WelcomeSection from "@/Components/WelcomeSection";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import { Container, Typography } from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <AuthLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="min-h-screen">
                <Typography variant="h5" className="text-xl text-front">
                    Specialist Dashboard
                </Typography>
                <Container maxWidth="lg">
                    <div className="py-8">
                        <WelcomeSection role={auth.user.role} />
                        <StatisticsSection />
                    </div>
                </Container>
            </div>
        </AuthLayout>
    );
}
