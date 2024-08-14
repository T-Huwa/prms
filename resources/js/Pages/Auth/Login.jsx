import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Box } from "@mui/material";
import LoginIllustration from "@/Assets/LoginIllustration";
import Logo from "@/Assets/Logo";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Box>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="min-h-screen bg-background text-front flex justify-center">
                    <div className="max-w-screen-xl m-0 sm:m-4  shadow sm:rounded-lg flex justify-center flex-1">
                        <div className="lg:w-1/2 xl:w-5/12 pb-6 lg:border-r-2 border-dashed border-bd">
                            <div className="mt-6 flex flex-col items-center">
                                <div className="relative sm:max-w-xl sm:mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                                    <div className="relative p-4 bg-background border-2 border-bd shadow-lg sm:rounded-3xl sm:p-20 pt-3">
                                        <div className="max-w-md justify-center mx-auto">
                                            <Box className="flex justify-center">
                                                <Box>
                                                    <Logo />
                                                </Box>
                                            </Box>

                                            <div>
                                                <h1 className="text-2xl text-front font-semibold">
                                                    Login
                                                </h1>
                                            </div>
                                            <div className="divide-y divide-gray-200">
                                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                    <div>
                                                        <InputLabel
                                                            htmlFor="email"
                                                            value="Email"
                                                        />

                                                        <TextInput
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={data.email}
                                                            className="mt-1 block w-full"
                                                            autoComplete="username"
                                                            isFocused={true}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "email",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                        <InputError
                                                            message={
                                                                errors.email
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>

                                                    <div className="mt-4">
                                                        <InputLabel
                                                            htmlFor="password"
                                                            value="Password"
                                                        />

                                                        <TextInput
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            value={
                                                                data.password
                                                            }
                                                            className="mt-1 block w-full"
                                                            autoComplete="current-password"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "password",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                        <InputError
                                                            message={
                                                                errors.password
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>

                                                    <div className="block mt-4">
                                                        <label className="flex items-center">
                                                            <Checkbox
                                                                name="remember"
                                                                checked={
                                                                    data.remember
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "remember",
                                                                        e.target
                                                                            .checked
                                                                    )
                                                                }
                                                            />
                                                            <span className="ms-2 text-sm text-front">
                                                                Remember me
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div className="flex items-center justify-end mt-4">
                                                        {canResetPassword && (
                                                            <Link
                                                                href={route(
                                                                    "password.request"
                                                                )}
                                                                className="underline text-sm text-front rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                Forgot your
                                                                password?
                                                            </Link>
                                                        )}

                                                        <PrimaryButton
                                                            className="ms-4"
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            Log in
                                                        </PrimaryButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-background text-center hidden lg:flex">
                            {/* <div
                                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
                                }}
                            ></div> */}
                            <div className="w-full p-4 flex justify-center alight-center">
                                <Box className="py-16 w-xs h-sm items-center">
                                    <LoginIllustration
                                        fill="rgb(30, 144, 255)"
                                        className="welcome flex-1 w-sm m-12 xl:m-16 m-auto bg-contain bg-center bg-no-repeat"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Box>
    );
}
