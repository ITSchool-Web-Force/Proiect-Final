import AppLayout from "@/layouts/AppLayout";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

export default function page() {
    return (
    <>
        <AppLayout>
            <Head>
                <title>BariCare - [slug]</title>
            </Head>
            <div className="navbar">
                <Navbar />
            </div>
            <h1>slug page</h1>
        </AppLayout>
    </>
    )
}