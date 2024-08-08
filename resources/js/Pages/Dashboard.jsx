import StatisticsSection from "@/Components/StatisticsSection";
import WelcomeSection from "@/Components/WelcomeSection";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import { Container } from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <AuthLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dash
                </h2>
            }
        >
            <Head title="Dash" />

            <div className="min-h-screen bg-gray-200">
                <Container maxWidth="lg">
                    <div className="py-8">
                        <WelcomeSection />
                        <StatisticsSection />
                    </div>
                </Container>
            </div>
        </AuthLayout>
    );
}
