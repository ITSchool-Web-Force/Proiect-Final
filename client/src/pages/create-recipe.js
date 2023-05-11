import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import AppLayout from "@/layouts/AppLayout";
import styles from "@/styles/Recipes.module.scss";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useGetUserID } from "@/hooks/useGetUSerID";
import { useRouter } from "next/router";

  
export default function createRecipe() {
    
    const userID = useGetUserID();
    const router = useRouter();
      
    const [recipe, setRecipe] = useState({
    userOwner: "",
    name: "",
    imageUrl: "",
    ingredients: [],
    cookingTime: 0,
    instructions: "",
    });
    
    useEffect(() => {
    setRecipe((prevRecipe) => ({ ...prevRecipe, userOwner: userID }));
    }, [userID]);
  

    const handleChange  = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    const handleIngredientChange  = (event, index) => {
        const { value } = event.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
    }

    // sets recipe obj same as it was before but adds the ingredients
    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [ ...recipe.ingredients, "" ] });
    };

    const notifySuccess = () => toast.success("Recipe created successfully!");
    const notifyError = (errorMessage) => toast.error(errorMessage || "Something went wrong!");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/recipes", recipe);
            notifySuccess();
            setTimeout(() => {
                router.push('/');
            }, 6000);
        } catch (error) {
            notifyError(error.response.data.message);
        }
    };

  return (
    <>
      <AppLayout>

        <Head>
          <title>BariCare - Create Recipe</title>
        </Head>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main-wrap">
          <div className={styles["create-recipe"]}>
            <div className={styles["create-recipe-header"]}>
              <h1>Create Recipe</h1>
              <p>Fill out the form below to submit your very own bariatric-friendly recipe. </p>
            </div>

            <form className={styles["create-recipe-form"]} onSubmit={handleSubmit}>
              <div className={styles["form-element"]}>
                <label className={styles["label"]} htmlFor="name" >Name</label>
                <input className={styles["input"]}
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleChange} />
              </div>
              <div className={styles["form-element"]}>
                <label className={styles["label"]} htmlFor="imageURL">Image URL</label>
                <input className={styles["input"]}
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    required
                    onChange={handleChange} />
              </div>
              <div className={styles["form-element"]}>
                <label className={styles["label"]} htmlFor="ingredients">Ingredients (1 per line)</label>
                
                {recipe.ingredients.map((ingredient, index) => (
                    <input
                        className={styles["input"]}
                        type="text"
                        key={index}
                        name="ingredients"
                        value={ingredient}
                        id="ingredients"
                        onChange={(event) => handleIngredientChange(event, index)} />
                ))}

                <button onClick={addIngredient} className={styles["btn-add-ingredient"]}>Add Ingredient</button>
              </div>
              <div className={styles["form-element"]}>
                <label className={styles["label"]} htmlFor="cookingTime">Cooking time (in minutes)</label>
                <input className={styles["input"]}
                    type="number"
                    id="cookingTime"
                    name="cookingTime"
                    required
                    onChange={handleChange} />
              </div>
              <div className={styles["form-element"]}>
                <label className={styles["label"]} htmlFor="instructions">Instructions</label>
                <textarea className={styles["textarea"]}
                    id="instructions"
                    name="instructions"
                    required
                    onChange={handleChange} />
              </div>
              
              <button type="submit" className="btn-login">Submit Recipe</button>
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
        </div>

      </AppLayout>
    </>
  );
}
