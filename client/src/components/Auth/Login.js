// 'use client';
import Layout from "@/layouts/AuthLayout";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash, FaAt } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [_, setCookies] = useCookies(["access_token"]);
    const router = useRouter();

    const notifyError = (errorMessage) => toast.error(errorMessage || "Something went wrong!");

    const handleLogin = async (event) =>  {
        event.preventDefault();
        try {
            const response = await axios.post("https://baricare-app.herokuapp.com/auth/login", { email, password });
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            router.push('/');
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
                    <p className="w-3/4 mx-auto text-gray-400">Log in to your account and explore the community's healthy and bariatric weight loss recipes.</p>
                    <form className="flex flex-col gap-4 pt-8 form" onSubmit={handleLogin}>
                        <div className="input-group flex flex-col gap-4">
                            <input type="email" name="email" placeholder="Your email" required className="input-text" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <span className="icon flex justify-end px-4"><FaAt /></span>
                        </div>
                        <div className="input-group flex flex-col gap-4">
                            <input type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Your password" required className="input-text" value={password} onChange={(event) => setPassword(event.target.value)} />
                            <span className="icon flex justify-end px-4" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
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
                </div>
                <p className="text-center text-gray-400">Don't have an account?{" "}
                    <Link href={'/register'}>
                        <span className="auth-link">Sign up!</span>
                    </Link>
                </p>
            </section>
        </Layout>
    );
  }
  