// 'use client';
import Layout from "@/layouts/AuthLayout";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaAt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    
    const notifySuccess = () => toast.success("Welcome to BariCare!");
    const notifyError = (errorMessage) => toast.error(errorMessage || "Something went wrong!");

    const handleSignUp = async (event) =>  {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", { username, email, password });
            notifySuccess();
            setTimeout(() => {
                router.push('/login');
            }, 6000);
        } catch (error) {
            notifyError(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <Layout>
            <section className="w-3/4 mx-auto flex flex-col gap-10 auth-page">
                <div>
                    <div className="pb-4">
                        <Logo />
                    </div>
                    <p className="w-3/4 mx-auto text-gray-400">
                        Become part of our community where you can explore healthy and
                        bariatric weight loss recipes.
                    </p>

                    <form className="flex flex-col gap-4 pt-8" onSubmit={handleSignUp}>
                    <div className="input-group flex flex-col gap-4">
                            <input
                                type="text"
                                name="username"
                                placeholder="Your username"
                                required
                                className="input-text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            {/* <span className="icon flex justify-end px-4">
                                <FaAt />
                            </span> */}
                        </div>
                        <div className="input-group flex flex-col gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="input-text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            {/* <span className="icon flex justify-end px-4">
                                <FaAt />
                            </span> */}
                        </div>
                        <div className="input-group flex flex-col gap-4">
                            <input
                                type={`${showPassword ? "text" : "password"}`}
                                name="password"
                                placeholder="Your password"
                                required
                                className="input-text"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span
                                className="icon flex justify-end px-4"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <button type="submit" className="btn-login">
                            Register
                        </button>
                        <div>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </form>
                </div>
                <p className="text-center text-gray-400">
                    You already have an account?{" "}
                    <Link href={"/login"}>
                        <span className="auth-link">Log in!</span>
                    </Link>
                </p>
            </section>
        </Layout>
    );
}


