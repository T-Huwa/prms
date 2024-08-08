import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";

export default function DashTest({ auth }) {
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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">DashTest</div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
