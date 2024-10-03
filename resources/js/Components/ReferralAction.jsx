import axios from "axios";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { Divider, FormControl, MenuItem, Select } from "@mui/material";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

const ReferralAction = ({ role, status, referral, userHospitalId, Auth }) => {
    const [processing, setProcessing] = useState(false);
    const [hospitalId, setHospitalId] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [assignedDoctorId, setAssignedDoctorId] = useState(null);

    useEffect(() => {
        axios
            .get(
                route("hospitals.get.staff", { id: userHospitalId, ward: true })
            )
            .then((response) => {
                setDoctors(response.data.doctors);
            })
            .catch((error) => {
                console.error("Error fetching wards:", error);
            });
    }, []);

    function refer() {
        setProcessing(true);
        try {
            axios.patch(route("refer"), {
                hospitalId: hospitalId,
                referralId: referral.id,
            });

            // Handle success response
            alert("Referred patient successfully");
            router.visit(route("internal"));
        } catch (error) {
            // Handle error response
            console.error(error);
            alert("Failed to refer the patient");
        } finally {
            setProcessing(false);
        }
    }

    function assignDoctor() {
        alert(referral.id);
        axios
            .put(route("assignDoctor"), {
                receiving_officer_id: assignedDoctorId,
                referral_id: referral.id,
            })
            .then((response) => {
                console.log("Referral updated:", response.data);
                alert("Assigned Successfully");
            })
            .catch((error) => {
                console.error("Error updating referral:", error);
                throw error;
            });
    }

    function cancel() {
        //alert("cancelling...");
        setProcessing(true);
        updateStatus("Cancelled");
    }

    function complete() {
        setProcessing(true);
        router.visit(route("feedback"), { data: { referral_id: referral.id } });
    }

    const updateStatus = async (newStatus) => {
        try {
            // Make the PUT request to update the referral's status
            const response = await axios.put(
                `/referrals/updateStatus/${referral.id}`,
                {
                    status: newStatus, // This comes from the input state
                }
            );

            // Handle success response
            alert("Referral status updated successfully");
        } catch (error) {
            // Handle error response
            console.error(error);
            alert("Failed to update referral status");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            {role === "Specialist" && status === "Requested" && (
                <>
                    <DangerButton disabled={processing} onClick={cancel}>
                        Cancel
                    </DangerButton>
                    <Divider orientation="vertical" />
                    <div className="border flex">
                        <FormControl className="flex-1 mx-1">
                            <Select
                                className="border border-front mt-1 block w-full bg-background text-front"
                                name="hospitalId"
                                value={hospitalId}
                                onChange={(e) => setHospitalId(e.target.value)}
                            >
                                {hospitals.map((hospital) => (
                                    <MenuItem
                                        key={hospital.id}
                                        className="text-gray-900"
                                        value={hospital.id}
                                    >
                                        {hospital.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {hospitalId && (
                            <PrimaryButton
                                disabled={processing}
                                className="ml-4"
                                onClick={refer}
                            >
                                Refer
                            </PrimaryButton>
                        )}
                    </div>
                </>
            )}

            {role === "Specialist" &&
                status === "Sent" &&
                referral.hospital_to_id === userHospitalId && (
                    <>
                        <DangerButton disabled={processing} onClick={cancel}>
                            Reject
                        </DangerButton>
                        <div className="border flex">
                            <FormControl className="flex-1 mx-1">
                                <Select
                                    className="border border-front mt-1 block w-full bg-background text-front"
                                    name="hospitalId"
                                    value={assignedDoctorId}
                                    onChange={(e) =>
                                        setAssignedDoctorId(e.target.value)
                                    }
                                >
                                    {doctors.map((doctor) => (
                                        <MenuItem
                                            key={doctor.id}
                                            className="text-gray-900"
                                            value={doctor.id}
                                        >
                                            {doctor.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {assignedDoctorId && (
                                <PrimaryButton
                                    disabled={processing}
                                    className="ml-4"
                                    onClick={assignDoctor}
                                >
                                    Assign Doctor
                                </PrimaryButton>
                            )}
                        </div>
                    </>
                )}

            {role === "Doctor" &&
                status === "Under Treatment" &&
                referral.receiving_officer_id === Auth().user.id && (
                    <>
                        <PrimaryButton disabled={processing} onClick={complete}>
                            Complete
                        </PrimaryButton>
                    </>
                )}

            {role === "Doctor" && status === "Discharged" && (
                <>
                    <PrimaryButton
                        disabled={processing}
                        onClick={() => {
                            router.visit(
                                route("feedback.show", { id: referral.id })
                            );
                        }}
                    >
                        View Feedback
                    </PrimaryButton>
                </>
            )}
        </>
    );
};

export default ReferralAction;
