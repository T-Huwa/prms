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
        post("/feedback"); // Adjust the endpoint according to your routes.
    };

    return (
        <AuthLayout>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Central Hospital</label>
                    <input
                        type="text"
                        value={data.central_hospital}
                        onChange={(e) =>
                            setData("central_hospital", e.target.value)
                        }
                    />
                    {errors.central_hospital && (
                        <div>{errors.central_hospital}</div>
                    )}
                </div>
                <div>
                    <label>Responding Department</label>
                    <input
                        type="text"
                        value={data.responding_department}
                        onChange={(e) =>
                            setData("responding_department", e.target.value)
                        }
                    />
                    {errors.responding_department && (
                        <div>{errors.responding_department}</div>
                    )}
                </div>
                <div>
                    <label>Full Name and Signature of Reporting Officer</label>
                    <input
                        type="text"
                        value={data.reporting_officer}
                        onChange={(e) =>
                            setData("reporting_officer", e.target.value)
                        }
                    />
                    {errors.reporting_officer && (
                        <div>{errors.reporting_officer}</div>
                    )}
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                    />
                    {errors.date && <div>{errors.date}</div>}
                </div>
                <div>
                    <label>Name of Patient</label>
                    <input
                        type="text"
                        value={data.name_of_patient}
                        onChange={(e) =>
                            setData("name_of_patient", e.target.value)
                        }
                    />
                    {errors.name_of_patient && (
                        <div>{errors.name_of_patient}</div>
                    )}
                </div>
                <div>
                    <label>Final Diagnosis</label>
                    <input
                        type="text"
                        value={data.final_diagnosis}
                        onChange={(e) =>
                            setData("final_diagnosis", e.target.value)
                        }
                    />
                    {errors.final_diagnosis && (
                        <div>{errors.final_diagnosis}</div>
                    )}
                </div>
                <div>
                    <label>Other Diagnoses</label>
                    <input
                        type="text"
                        value={data.other_diagnoses}
                        onChange={(e) =>
                            setData("other_diagnoses", e.target.value)
                        }
                    />
                    {errors.other_diagnoses && (
                        <div>{errors.other_diagnoses}</div>
                    )}
                </div>
                <div>
                    <label>Management</label>
                    <input
                        type="text"
                        value={data.management_1}
                        placeholder="1."
                        onChange={(e) =>
                            setData("management_1", e.target.value)
                        }
                    />
                    {errors.management_1 && <div>{errors.management_1}</div>}
                    <input
                        type="text"
                        value={data.management_2}
                        placeholder="2."
                        onChange={(e) =>
                            setData("management_2", e.target.value)
                        }
                    />
                    {errors.management_2 && <div>{errors.management_2}</div>}
                    <input
                        type="text"
                        value={data.management_3}
                        placeholder="3."
                        onChange={(e) =>
                            setData("management_3", e.target.value)
                        }
                    />
                    {errors.management_3 && <div>{errors.management_3}</div>}
                </div>
                <div>
                    <label>If Surgery Done</label>
                    <input
                        type="text"
                        value={data.type_of_surgery}
                        placeholder="Type of Surgery"
                        onChange={(e) =>
                            setData("type_of_surgery", e.target.value)
                        }
                    />
                    {errors.type_of_surgery && (
                        <div>{errors.type_of_surgery}</div>
                    )}
                    <input
                        type="text"
                        value={data.findings}
                        placeholder="Findings"
                        onChange={(e) => setData("findings", e.target.value)}
                    />
                    {errors.findings && <div>{errors.findings}</div>}
                </div>
                <div>
                    <label>Outcome</label>
                    <input
                        type="text"
                        value={data.outcome}
                        onChange={(e) => setData("outcome", e.target.value)}
                    />
                    {errors.outcome && <div>{errors.outcome}</div>}
                </div>
                <div>
                    <label>Specific Post Discharge Instructions</label>
                    <input
                        type="text"
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
                        <div>{errors.post_discharge_instruction_1}</div>
                    )}
                    <input
                        type="text"
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
                        <div>{errors.post_discharge_instruction_2}</div>
                    )}
                    <input
                        type="text"
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
                        <div>{errors.post_discharge_instruction_3}</div>
                    )}
                </div>
                <button type="submit" disabled={processing}>
                    Submit
                </button>
            </form>
        </AuthLayout>
    );
};

export default FeedbackForm;
