import React, { useState } from "react";
import BackButton from "@/Components/BackButton";
import AuthLayout from "@/Layouts/AuthLayout";
import TextInput from "@/Components/TextInput";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    duration,
} from "@mui/material";
import { useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import {
    AddBox,
    Remove,
    RemoveCircle,
    RemoveOutlined,
} from "@mui/icons-material";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function RequestReferral({ success }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Success");
    const [modalContent, setModalContent] = useState(
        "The request was sent Successfully"
    );

    const { data, setData, post, errors, reset, processing } = useForm({
        urgency: "",
        name: "",
        gender: "f",
        age: "",
        blood_group: "",
        lnmp: "",
        gravida: "",
        para: "",
        lcb: "",
        reported_from: "",
        reported_on: "",
        complaints: [""],
        duration: "",
        examination_findings: [""],
        working_diagnosis: "",
        differential_diagnosis: [""],
        pre_referral_management: [""],
        procedure: "",
        findings: "",
        reasons: [""],
        department_referral_directed: "",
        blood_units: "",
        designation: "",
        other_remarks: "",
        DHO_name: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleAddItem = (arrayName) => {
        const newArray = [...data[arrayName], ""];
        setData(arrayName, newArray);
    };

    const handleRemoveItem = (arrayName, index) => {
        const newArray = [...data[arrayName]];
        newArray.splice(index, 1); // Remove the item at the specified index
        setData(arrayName, newArray);
    };

    const handleArrayChange = (index, e) => {
        const { name, value } = e.target;
        const arrayName = name.split("[]")[0];
        const newArray = [...data[arrayName]];
        newArray[index] = value;
        setData(arrayName, newArray);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("referrals.store"), {
            onSuccess: () => {
                if (success) {
                    console.log(success);
                }
                setModalTitle("Success!");
                setModalContent("The request was sent Successfully");
                reset();
            },
            onError: (errors) => {
                setModalTitle("Error!!");
                setModalContent("Failed to send the request");
                console.log(errors);
            },
            onFinish: () => {
                setModalOpen(true);
            },
        });
    };

    return (
        <AuthLayout>
            <BackButton />
            <div className="container mx-auto p-4">
                <div className="bg-background text-front border-2 border-bd rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <h4 className="text-2xl font-semibold mb-2">
                                Referral Information
                            </h4>
                            <p className="text-sm">
                                Enter the referral information here
                            </p>
                        </div>

                        <hr className="mb-6 border border-bd" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1" htmlFor="name">
                                    Name
                                </label>
                                <TextInput
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    error={errors.name}
                                />
                            </div>

                            <FormControl>
                                <FormLabel className="text-front">
                                    Gender
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={data.gender}
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value="f"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="m"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <div>
                                <label className="block mb-1" htmlFor="age">
                                    Age
                                </label>
                                <TextInput
                                    type="number"
                                    id="age"
                                    name="age"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.age}
                                    onChange={(e) =>
                                        setData("age", e.target.value)
                                    }
                                    error={errors.age}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="blood-group"
                                >
                                    Blood Group
                                </label>
                                <Select
                                    id="blood-group"
                                    name="blood-group"
                                    className="w-full border rounded-lg text-front"
                                    value={data.blood_group}
                                    onChange={(e) =>
                                        setData("blood_group", e.target.value)
                                    }
                                >
                                    {bloodGroups.map((group) => (
                                        <MenuItem
                                            className="text-gray-900"
                                            key={group}
                                            value={group}
                                        >
                                            {group}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="reported-from"
                                >
                                    Reported From
                                </label>
                                <Select
                                    id="reported-from"
                                    name="reported-from"
                                    className="w-full border rounded-lg text-front"
                                    value={data.reported_from}
                                    onChange={(e) =>
                                        setData("reported_from", e.target.value)
                                    }
                                >
                                    <MenuItem
                                        className="text-black"
                                        value="Home"
                                    >
                                        Home
                                    </MenuItem>
                                    <MenuItem
                                        className="text-black"
                                        value="TBA"
                                    >
                                        TBA
                                    </MenuItem>
                                    <MenuItem
                                        className="text-black"
                                        value="H Center"
                                    >
                                        H Center
                                    </MenuItem>
                                    <MenuItem
                                        className="text-black"
                                        value="Other"
                                    >
                                        Other
                                    </MenuItem>
                                </Select>
                            </div>

                            <div>
                                <label className="block mb-1" htmlFor="urgency">
                                    Urgency
                                </label>
                                <Select
                                    id="urgency"
                                    name="urgency"
                                    className="w-full border rounded-lg text-front"
                                    value={data.urgency}
                                    onChange={(e) =>
                                        setData("urgency", e.target.value)
                                    }
                                >
                                    <MenuItem
                                        className="text-black"
                                        value="Low"
                                    >
                                        Low
                                    </MenuItem>
                                    <MenuItem
                                        className="text-black"
                                        value="Medium"
                                    >
                                        Medium
                                    </MenuItem>
                                    <MenuItem
                                        className="text-black"
                                        value="High"
                                    >
                                        High
                                    </MenuItem>
                                </Select>
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="reported-on"
                                >
                                    Reported On
                                </label>
                                <TextInput
                                    type="date"
                                    id="reported-on"
                                    name="reported-on"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.reported_on}
                                    onChange={(e) =>
                                        setData("reported_on", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {data.gender === "f" && (
                            <>
                                <hr className="my-6 border border-bd" />

                                <div className="mb-6">
                                    <h5 className="text-lg font-semibold">
                                        For Female Patients
                                    </h5>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            className="block mb-1"
                                            htmlFor="lnmp"
                                        >
                                            LNMP
                                        </label>
                                        <TextInput
                                            type="date"
                                            id="lnmp"
                                            name="lnmp"
                                            className="w-full p-2 border rounded-lg"
                                            value={data.lnmp}
                                            onChange={(e) =>
                                                setData("lnmp", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block mb-1"
                                            htmlFor="gravida"
                                        >
                                            Gravida
                                        </label>
                                        <TextInput
                                            type="text"
                                            id="gravida"
                                            name="gravida"
                                            className="w-full p-2 border rounded-lg"
                                            value={data.gravida}
                                            onChange={(e) =>
                                                setData(
                                                    "gravida",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block mb-1"
                                            htmlFor="para"
                                        >
                                            Para
                                        </label>
                                        <TextInput
                                            type="text"
                                            id="para"
                                            name="para"
                                            className="w-full p-2 border rounded-lg"
                                            value={data.para}
                                            onChange={(e) =>
                                                setData("para", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="block mb-1"
                                            htmlFor="lcb"
                                        >
                                            LCB
                                        </label>
                                        <TextInput
                                            type="text"
                                            id="lcb"
                                            name="lcb"
                                            className="w-full p-2 border rounded-lg"
                                            value={data.lcb}
                                            onChange={(e) =>
                                                setData("lcb", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Complaints
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="complaints-1"
                                >
                                    Presenting Complaints
                                </label>
                            </div>

                            {/* Complaints */}
                            <div className="grid gap-3">
                                {data.complaints.map((complaint, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <TextInput
                                            key={index}
                                            type="text"
                                            className="w-full p-2 border rounded-lg"
                                            name="complaints[]"
                                            value={complaint || ""}
                                            onChange={(e) =>
                                                handleArrayChange(index, e)
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() =>
                                                handleRemoveItem(
                                                    "complaints",
                                                    index
                                                )
                                            }
                                        >
                                            <RemoveCircle />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => handleAddItem("complaints")}
                                >
                                    <AddBox />
                                </button>
                                <hr className="my-3 border border-bd" />
                                <TextInput
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                    name="duration"
                                    label="Duration"
                                    value={data.duration}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Examination
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="findings"
                                >
                                    Examination Findings
                                </label>
                            </div>

                            {/* examination_findings */}
                            <div className="grid gap-3">
                                {data.examination_findings.map(
                                    (examination_finding, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <TextInput
                                                key={index}
                                                type="text"
                                                className="w-full p-2 border rounded-lg"
                                                name="examination_findings[]"
                                                value={
                                                    examination_finding || ""
                                                }
                                                onChange={(e) =>
                                                    handleArrayChange(index, e)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="text-red-500"
                                                onClick={() =>
                                                    handleRemoveItem(
                                                        "examination_findings",
                                                        index
                                                    )
                                                }
                                            >
                                                <RemoveCircle />
                                            </button>
                                        </div>
                                    )
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAddItem("examination_findings")
                                    }
                                >
                                    <AddBox />
                                </button>
                                <hr className="my-3 border border-bd" />
                                <TextInput
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                    name="working_diagnosis"
                                    label="Working Diagnosis"
                                    value={data.working_diagnosis}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Differential Diagnosis
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="differential-diagnosis-1"
                                >
                                    Differential Diagnosis
                                </label>
                            </div>

                            {/* differential_diagnosis */}
                            <div className="grid gap-3">
                                {data.differential_diagnosis.map(
                                    (differential_d, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <TextInput
                                                key={index}
                                                type="text"
                                                className="w-full p-2 border rounded-lg"
                                                name="differential_diagnosis[]"
                                                value={differential_d || ""}
                                                onChange={(e) =>
                                                    handleArrayChange(index, e)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="text-red-500"
                                                onClick={() =>
                                                    handleRemoveItem(
                                                        "differential_diagnosis",
                                                        index
                                                    )
                                                }
                                            >
                                                <RemoveCircle />
                                            </button>
                                        </div>
                                    )
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAddItem("differential_diagnosis")
                                    }
                                >
                                    <AddBox />
                                </button>
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Pre Referral Management
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="pre-referral-management"
                                >
                                    Pre Referral Management
                                </label>
                            </div>

                            {/* Pre Referral Management */}
                            <div className="grid gap-3">
                                {data.pre_referral_management.map(
                                    (pre_referral_mgt, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <TextInput
                                                key={index}
                                                type="text"
                                                className="w-full p-2 border rounded-lg"
                                                name="pre_referral_management[]"
                                                value={pre_referral_mgt || ""}
                                                onChange={(e) =>
                                                    handleArrayChange(index, e)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="text-red-500"
                                                onClick={() =>
                                                    handleRemoveItem(
                                                        "pre_referral_management",
                                                        index
                                                    )
                                                }
                                            >
                                                <RemoveCircle />
                                            </button>
                                        </div>
                                    )
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAddItem("pre_referral_management")
                                    }
                                >
                                    <AddBox />
                                </button>
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Reason for Referral
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="pre-referral-management-1"
                                >
                                    Reasons For Referral
                                </label>
                            </div>

                            {/* Reasons For Referral */}
                            <div className="grid gap-3">
                                {data.reasons.map((reason, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <TextInput
                                            key={index}
                                            type="text"
                                            className="w-full p-2 border rounded-lg"
                                            name="reasons[]"
                                            value={reason || ""}
                                            onChange={(e) =>
                                                handleArrayChange(index, e)
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="text-red-500"
                                            onClick={() =>
                                                handleRemoveItem(
                                                    "reasons",
                                                    index
                                                )
                                            }
                                        >
                                            <RemoveCircle />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => handleAddItem("reasons")}
                                >
                                    <AddBox />
                                </button>
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Other Info
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="designation"
                                >
                                    Designation
                                </label>
                                <TextInput
                                    type="text"
                                    id="designation"
                                    name="designation"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.designation}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="procedure"
                                >
                                    Procedure
                                </label>
                                <TextInput
                                    type="text"
                                    id="procedure"
                                    name="procedure"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.procedure}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="findings"
                                >
                                    Findings
                                </label>
                                <TextInput
                                    type="text"
                                    id="findings"
                                    name="findings"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.findings}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="department_referral_directed"
                                >
                                    Department Referral Directed
                                </label>
                                <TextInput
                                    type="text"
                                    id="department_referral_directed"
                                    name="department_referral_directed"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.department_referral_directed}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="blood_units"
                                >
                                    Units of Blood with Patient
                                </label>
                                <TextInput
                                    type="number"
                                    id="blood_units"
                                    name="blood_units"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.blood_units}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="DHO_name"
                                >
                                    DHO Name
                                </label>
                                <TextInput
                                    type="text"
                                    id="DHO_name"
                                    name="DHO_name"
                                    className="w-full p-2 border rounded-lg"
                                    value={data.DHO_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <hr className="my-6 mx-16 border border-bd" />

                        <div className="grid grid-template-cols-1 md:grid-template-cols-4 gap-4">
                            <div className="grid-1">
                                <label
                                    className="block mb-1"
                                    htmlFor="other-remarks"
                                >
                                    Remarks
                                </label>
                            </div>

                            <div className="grid-3 grid gap-3 rounded-lg">
                                <TextField
                                    placeholder="Enter any other information here"
                                    multiline
                                    rows={2}
                                    className="w-full border rounded-lg bg-gray-100"
                                    value={data.other_remarks}
                                    onChange={(e) =>
                                        setData("other_remarks", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        {/** Units, dho */}

                        <div className="mb-6"></div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <form className="p-6">
                    <h2 className="text-lg font-medium text-front">
                        {modalTitle}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">{modalContent}</p>

                    <div className="mt-6 flex justify-end text-gray-900">
                        <SecondaryButton onClick={() => setModalOpen(false)}>
                            Ok
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthLayout>
    );
}
