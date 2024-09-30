import axios from "axios";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

const ReferralAction = ({ role, status, referral }) => {
    const [processing, setProcessing] = useState(false);

    function refer() {
        alert("referring...");
    }

    function cancel() {
        //alert("cancelling...");
        setProcessing(true);
        updateStatus("Cancelled");
    }

    const updateStatus = async (newStatus) => {
        alert(referral.id);
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
                    </DangerButton>{" "}
                    <PrimaryButton className="ml-4" onClick={refer}>
                        Refer
                    </PrimaryButton>
                </>
            )}

            {role === "Specialist" && status === "Sent" && (
                <>
                    <DangerButton disabled={processing} onClick={cancel}>
                        Reject
                    </DangerButton>
                    <PrimaryButton className="ml-4">
                        Assign Doctor
                    </PrimaryButton>
                </>
            )}
        </>
    );
};

export default ReferralAction;
