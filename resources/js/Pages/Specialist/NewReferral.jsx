import React from "react";
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
} from "@mui/material";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function RequestReferral() {
    return (
        <AuthLayout>
            <BackButton />
            <div className="container mx-auto p-4">
                <div className="bg-background text-front border-2 border-bd rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                    <form>
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
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
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
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                For Female Patients
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1" htmlFor="lnmp">
                                    LNMP
                                </label>
                                <TextInput
                                    type="text"
                                    id="lnmp"
                                    name="lnmp"
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1" htmlFor="gravida">
                                    Gravida
                                </label>
                                <TextInput
                                    type="text"
                                    id="gravida"
                                    name="gravida"
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1" htmlFor="para">
                                    Para
                                </label>
                                <TextInput
                                    type="text"
                                    id="para"
                                    name="para"
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1" htmlFor="lcb">
                                    LCB
                                </label>
                                <TextInput
                                    type="text"
                                    id="lcb"
                                    name="lcb"
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>
                        </div>

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

                            <div className="grid gap-3">
                                <TextInput
                                    type="text"
                                    id="complaints-1"
                                    name="complaints-1"
                                    className="w-full p-2 border rounded-lg"
                                    label="1"
                                />
                                <TextInput
                                    type="text"
                                    id="complaints-2"
                                    name="complaints-2"
                                    className="w-full p-2 border rounded-lg"
                                    label="2"
                                />
                                <TextInput
                                    type="text"
                                    id="complaints-3"
                                    name="complaints-3"
                                    className="w-full p-2 border rounded-lg"
                                    label="3"
                                />
                                <TextInput
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    className="w-full p-2 border rounded-lg"
                                    label="Duration"
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
                                    htmlFor="findings-1"
                                >
                                    Examination Findings
                                </label>
                            </div>

                            <div className="grid gap-3">
                                <TextInput
                                    type="text"
                                    id="findings-1"
                                    name="findings-1"
                                    className="w-full p-2 border rounded-lg"
                                    label="1"
                                />
                                <TextInput
                                    type="text"
                                    id="findings-2"
                                    name="findings-2"
                                    className="w-full p-2 border rounded-lg"
                                    label="2"
                                />
                                <TextInput
                                    type="text"
                                    id="findings-3"
                                    name="findings-3"
                                    className="w-full p-2 border rounded-lg"
                                    label="3"
                                />
                                <TextInput
                                    type="text"
                                    id="working-diagnosis"
                                    name="working-diagnosis"
                                    className="w-full p-2 border rounded-lg"
                                    label="Working Diagnosis"
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

                            <div className="grid gap-3">
                                <TextInput
                                    type="text"
                                    id="differential-diagnosis-1"
                                    name="differential-diagnosis-1"
                                    className="w-full p-2 border rounded-lg"
                                    label="1"
                                />
                                <TextInput
                                    type="text"
                                    id="differential-diagnosis-2"
                                    name="differential-diagnosis-2"
                                    className="w-full p-2 border rounded-lg"
                                    label="2"
                                />
                                <TextInput
                                    type="text"
                                    id="differential-diagnosis-3"
                                    name="differential-diagnosis-3"
                                    className="w-full p-2 border rounded-lg"
                                    label="3"
                                />
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
                                    htmlFor="pre-referral-management-1"
                                >
                                    Pre Referral Management
                                </label>
                            </div>

                            <div className="grid gap-3">
                                <TextInput
                                    type="text"
                                    id="pre-referral-management-1"
                                    name="pre-referral-management-1"
                                    className="w-full p-2 border rounded-lg"
                                    label="1"
                                />
                                <TextInput
                                    type="text"
                                    id="pre-referral-management-2"
                                    name="pre-referral-management-2"
                                    className="w-full p-2 border rounded-lg"
                                    label="2"
                                />
                                <TextInput
                                    type="text"
                                    id="pre-referral-management-3"
                                    name="pre-referral-management-3"
                                    className="w-full p-2 border rounded-lg"
                                    label="3"
                                />
                                <TextInput
                                    type="text"
                                    id="pre-referral-management-4"
                                    name="pre-referral-management-4"
                                    className="w-full p-2 border rounded-lg"
                                    label="4"
                                />
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

                            <div className="grid gap-3">
                                <TextInput
                                    type="text"
                                    id="reason-for-referral-1"
                                    name="reason-for-referral-1"
                                    className="w-full p-2 border rounded-lg"
                                    label="1"
                                />
                                <TextInput
                                    type="text"
                                    id="reason-for-referral-2"
                                    name="reason-for-referral-2"
                                    className="w-full p-2 border rounded-lg"
                                    label="2"
                                />
                                <TextInput
                                    type="text"
                                    id="reason-for-referral-3"
                                    name="reason-for-referral-3"
                                    className="w-full p-2 border rounded-lg"
                                    label="3"
                                />
                                <TextInput
                                    type="text"
                                    id="reason-for-referral-4"
                                    name="reason-for-referral-4"
                                    className="w-full p-2 border rounded-lg"
                                    label="4"
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6">
                            <h5 className="text-lg font-semibold">
                                Other Remarks
                            </h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block mb-1"
                                    htmlFor="other-remarks"
                                >
                                    Other Remarks
                                </label>
                            </div>

                            <div className="grid gap-3 rounded-lg">
                                {/* <textarea
                                    type="text"
                                    id="other-remarks"
                                    name="other-remarks"
                                    className="w-full p-2 border rounded-lg"
                                /> */}
                                <TextField
                                    placeholder="Enter any other information here"
                                    multiline
                                    rows={2}
                                    maxRows={4}
                                    className="w-full border rounded-lg bg-gray-100"
                                />
                            </div>
                        </div>

                        <hr className="my-6 border border-bd" />

                        <div className="mb-6"></div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
}
