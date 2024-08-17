import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ReferralAction = ({ role, status }) => {
    return (
        <>
            {role === "Nurse" && status === "Requested" && (
                <>
                    <SecondaryButton>Cancel</SecondaryButton>{" "}
                    <PrimaryButton className="ml-4">Refer</PrimaryButton>
                </>
            )}
        </>
    );
};

export default ReferralAction;
