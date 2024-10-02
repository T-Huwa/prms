import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

const FeedbackForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        central_hospital: "",
        responding_department: "",
        reporting_officer: "",
        date: "",
        name_of_patient: "",
        final_diagnosis: "",
        other_diagnoses: "",
        management_1: "",
        management_2: "",
        management_3: "",
        type_of_surgery: "",
        findings: "",
        outcome: "",
        post_discharge_instruction_1: "",
        post_discharge_instruction_2: "",
        post_discharge_instruction_3: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/feedback");
    };

    return (
        <AuthLayout>
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-6">Submit Feedback</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Central Hospital */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Central Hospital
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.central_hospital}
                                onChange={(e) =>
                                    setData("central_hospital", e.target.value)
                                }
                            />
                            {errors.central_hospital && (
                                <p className="text-sm text-red-600">
                                    {errors.central_hospital}
                                </p>
                            )}
                        </div>

                        {/* Responding Department */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Responding Department
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.responding_department}
                                onChange={(e) =>
                                    setData(
                                        "responding_department",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.responding_department && (
                                <p className="text-sm text-red-600">
                                    {errors.responding_department}
                                </p>
                            )}
                        </div>

                        {/* Reporting Officer */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name and Signature of Reporting Officer
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.reporting_officer}
                                onChange={(e) =>
                                    setData("reporting_officer", e.target.value)
                                }
                            />
                            {errors.reporting_officer && (
                                <p className="text-sm text-red-600">
                                    {errors.reporting_officer}
                                </p>
                            )}
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                            />
                            {errors.date && (
                                <p className="text-sm text-red-600">
                                    {errors.date}
                                </p>
                            )}
                        </div>

                        {/* Name of Patient */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name of Patient
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.name_of_patient}
                                onChange={(e) =>
                                    setData("name_of_patient", e.target.value)
                                }
                            />
                            {errors.name_of_patient && (
                                <p className="text-sm text-red-600">
                                    {errors.name_of_patient}
                                </p>
                            )}
                        </div>

                        {/* Final Diagnosis */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Final Diagnosis
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.final_diagnosis}
                                onChange={(e) =>
                                    setData("final_diagnosis", e.target.value)
                                }
                            />
                            {errors.final_diagnosis && (
                                <p className="text-sm text-red-600">
                                    {errors.final_diagnosis}
                                </p>
                            )}
                        </div>

                        {/* Other Diagnoses */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Other Diagnoses
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.other_diagnoses}
                                onChange={(e) =>
                                    setData("other_diagnoses", e.target.value)
                                }
                            />
                            {errors.other_diagnoses && (
                                <p className="text-sm text-red-600">
                                    {errors.other_diagnoses}
                                </p>
                            )}
                        </div>

                        {/* Management */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Management
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.management_1}
                                placeholder="1."
                                onChange={(e) =>
                                    setData("management_1", e.target.value)
                                }
                            />
                            {errors.management_1 && (
                                <p className="text-sm text-red-600">
                                    {errors.management_1}
                                </p>
                            )}
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.management_2}
                                placeholder="2."
                                onChange={(e) =>
                                    setData("management_2", e.target.value)
                                }
                            />
                            {errors.management_2 && (
                                <p className="text-sm text-red-600">
                                    {errors.management_2}
                                </p>
                            )}
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.management_3}
                                placeholder="3."
                                onChange={(e) =>
                                    setData("management_3", e.target.value)
                                }
                            />
                            {errors.management_3 && (
                                <p className="text-sm text-red-600">
                                    {errors.management_3}
                                </p>
                            )}
                        </div>

                        {/* If Surgery Done */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                If Surgery Done
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.type_of_surgery}
                                placeholder="Type of Surgery"
                                onChange={(e) =>
                                    setData("type_of_surgery", e.target.value)
                                }
                            />
                            {errors.type_of_surgery && (
                                <p className="text-sm text-red-600">
                                    {errors.type_of_surgery}
                                </p>
                            )}
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.findings}
                                placeholder="Findings"
                                onChange={(e) =>
                                    setData("findings", e.target.value)
                                }
                            />
                            {errors.findings && (
                                <p className="text-sm text-red-600">
                                    {errors.findings}
                                </p>
                            )}
                        </div>

                        {/* Outcome */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Outcome
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.outcome}
                                onChange={(e) =>
                                    setData("outcome", e.target.value)
                                }
                            />
                            {errors.outcome && (
                                <p className="text-sm text-red-600">
                                    {errors.outcome}
                                </p>
                            )}
                        </div>

                        {/* Post Discharge Instructions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Specific Post Discharge Instructions
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.post_discharge_instruction_1}
                                placeholder="1."
                                onChange={(e) =>
                                    setData(
                                        "post_discharge_instruction_1",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.post_discharge_instruction_1 && (
                                <p className="text-sm text-red-600">
                                    {errors.post_discharge_instruction_1}
                                </p>
                            )}
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.post_discharge_instruction_2}
                                placeholder="2."
                                onChange={(e) =>
                                    setData(
                                        "post_discharge_instruction_2",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.post_discharge_instruction_2 && (
                                <p className="text-sm text-red-600">
                                    {errors.post_discharge_instruction_2}
                                </p>
                            )}
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={data.post_discharge_instruction_3}
                                placeholder="3."
                                onChange={(e) =>
                                    setData(
                                        "post_discharge_instruction_3",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.post_discharge_instruction_3 && (
                                <p className="text-sm text-red-600">
                                    {errors.post_discharge_instruction_3}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                disabled={processing}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
};

export default FeedbackForm;
