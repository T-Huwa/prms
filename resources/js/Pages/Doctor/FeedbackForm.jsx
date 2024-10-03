import React from "react";
import { Head, router, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import { Divider } from "@mui/material";

const FeedbackForm = ({ referral_id }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        referral_id: referral_id,
        date: "",
        final_diagnosis: "",
        other_diagnoses: "",
        management: [""],
        type_of_surgery: "",
        findings: "",
        outcome: "",
        post_discharge_instructions: [""],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...data,
            management: JSON.stringify(data.management || []),
            post_discharge_instructions: JSON.stringify(
                data.post_discharge_instructions || []
            ),
        };
        post(route("feedback.create"), payload);
        reset();
        router.visit(route("incoming"));
    };

    // Handle dynamic fields for Management
    const handleManagementChange = (index, value) => {
        const updatedManagement = [...(data.management || [])];
        updatedManagement[index] = value;
        setData("management", updatedManagement);
    };

    const addManagementField = () => {
        setData("management", [...(data.management || []), ""]);
    };

    const removeManagementField = (index) => {
        const updatedManagement = (data.management || []).filter(
            (_, i) => i !== index
        );
        setData("management", updatedManagement);
    };

    // Handle dynamic fields for Post Discharge Instructions
    const handleInstructionChange = (index, value) => {
        const updatedInstructions = [
            ...(data.post_discharge_instructions || []),
        ];
        updatedInstructions[index] = value;
        setData("post_discharge_instructions", updatedInstructions);
    };

    const addInstructionField = () => {
        setData("post_discharge_instructions", [
            ...(data.post_discharge_instructions || []),
            "",
        ]);
    };

    const removeInstructionField = (index) => {
        const updatedInstructions = (
            data.post_discharge_instructions || []
        ).filter((_, i) => i !== index);
        setData("post_discharge_instructions", updatedInstructions);
    };

    return (
        <AuthLayout>
            <Head title="Feedback" />
            <div className="max-w-xl mx-auto bg-background p-6 border-bd border-2 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-6">Referral Feedback</h1>
                <Divider className="border-bd my-4" />
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.date && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.date}
                                </div>
                            )}
                        </div>

                        {/* Final Diagnosis */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Final Diagnosis
                            </label>
                            <input
                                type="text"
                                value={data.final_diagnosis}
                                onChange={(e) =>
                                    setData("final_diagnosis", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.final_diagnosis && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.final_diagnosis}
                                </div>
                            )}
                        </div>

                        {/* Other Diagnoses */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Other Diagnoses
                            </label>
                            <input
                                type="text"
                                value={data.other_diagnoses}
                                onChange={(e) =>
                                    setData("other_diagnoses", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.other_diagnoses && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.other_diagnoses}
                                </div>
                            )}
                        </div>

                        {/* Dynamic Management Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Management
                            </label>
                            {(data.management || []).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 mt-2"
                                >
                                    <input
                                        type="text"
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                        value={item}
                                        placeholder={`Management ${index + 1}`}
                                        onChange={(e) =>
                                            handleManagementChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button
                                        type="button"
                                        className="px-2 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
                                        onClick={() =>
                                            removeManagementField(index)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                onClick={addManagementField}
                            >
                                Add Management Field
                            </button>
                        </div>

                        {/* Type of Surgery */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                If Surgery Done, Type of Surgery
                            </label>
                            <input
                                type="text"
                                value={data.type_of_surgery}
                                onChange={(e) =>
                                    setData("type_of_surgery", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.type_of_surgery && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.type_of_surgery}
                                </div>
                            )}
                        </div>

                        {/* Findings */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Findings
                            </label>
                            <input
                                type="text"
                                value={data.findings}
                                onChange={(e) =>
                                    setData("findings", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.findings && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.findings}
                                </div>
                            )}
                        </div>

                        {/* Outcome */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Outcome
                            </label>
                            <input
                                type="text"
                                value={data.outcome}
                                onChange={(e) =>
                                    setData("outcome", e.target.value)
                                }
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.outcome && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.outcome}
                                </div>
                            )}
                        </div>

                        {/* Dynamic Post Discharge Instructions Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Post Discharge Instructions
                            </label>
                            {(data.post_discharge_instructions || []).map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2 mt-2"
                                    >
                                        <input
                                            type="text"
                                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                            value={item}
                                            placeholder={`Instruction ${
                                                index + 1
                                            }`}
                                            onChange={(e) =>
                                                handleInstructionChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="px-2 py-1 text-white bg-red-600 rounded-md hover:bg-red-700"
                                            onClick={() =>
                                                removeInstructionField(index)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )
                            )}
                            <button
                                type="button"
                                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                onClick={addInstructionField}
                            >
                                Add Instruction Field
                            </button>
                        </div>

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
