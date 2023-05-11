import AppLayout from "@/layouts/AppLayout";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaClock } from "react-icons/fa";

export default function Home() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    const fetchRecipes = async () => {
      try {
        const promise = await axios.get("https://baricare-app.herokuapp.com/recipes");
        setRecipes(promise.data);
      } catch(error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <AppLayout>

        <div className="navbar">
          <Navbar />
        </div>

        <div className="main-wrap">
          <Head>
            <title>BariCare</title>
          </Head>
          <main className="home-wrap">
            <h1 className="">
              Home
            </h1>

            <ul className="recipes-list">
              {recipes.map((recipe) => (
                <li key={recipe.id}>

                  <div>
                    <h2>{recipe.name}</h2>
                    <div className="flex flex-row items-center gap-2">
                      <FaClock />
                      <span>{recipe.cookingTime} mins</span>
                    </div>
                    <img src={recipe.imageUrl} width={200} height={200} alt={recipe.name} />
                    <Link href={`/recipes/${recipe.id}`} legacyBehavior>
                      <a>View Recipe</a>
                    </Link>
                  </div>

                </li>
                ))}
            </ul>
            
          </main>
        </div>

      </AppLayout>
    </>
  )
}
