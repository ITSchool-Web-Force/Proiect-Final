import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import AppLayout from "@/layouts/AppLayout";

export default function savedRecipes() {
    return (
    <>
        <AppLayout>
            <Head>
                <title>BariCare - Saved Recipes</title>
            </Head>
            <div className="navbar">
                <Navbar />
            </div>
            <h1>saved recipes</h1>
        </AppLayout>
    </>
    )
}
