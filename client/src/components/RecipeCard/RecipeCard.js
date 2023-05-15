import { useState,  useEffect } from "react";
import Link from "next/link";
import { FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";
import styles from "./RecipeCard.module.scss";
import LikeButton from "../Button/LikeButton";
import Button from "../Button/Button";

export default function RecipeCard({ recipe, savedRecipes, userID,  }) {
  const [isRecipeSaved, setIsRecipeSaved] = useState(savedRecipes.includes(recipe._id));
  const [recipeAuthor, setRecipeAuthor] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchRecipeAuthor = async () => {
      try {
        const userID = recipe.userOwner;
        const promise = await axios.get(`https://baricare-app.herokuapp.com/auth/${userID}/username`);
        setRecipeAuthor(promise.data.username);
      } catch(error) {
        console.log(error || "Couldn't find username");
      }
    };

    setIsRecipeSaved(savedRecipes.includes(recipe._id));
    fetchRecipeAuthor();
  }, [savedRecipes, recipe._id]);

  const saveRecipe = async () => {
    try {
      await axios.put(`https://baricare-app.herokuapp.com/recipes/${recipe._id}`, {
        userId: userID,
      });
      setIsRecipeSaved(true);
      savedRecipes.push(recipe._id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipe = async (recipeId, userId) => {
    try {
      await axios.delete(`https://baricare-app.herokuapp.com/recipes/saved-recipes/ids/${userId}`, {
        data: { recipeId }
      });
      setIsRecipeSaved(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveClick = () => {
    if (!isRecipeSaved) {
      saveRecipe();
      setIsRecipeSaved(true);
      // setIsSaved(!isSaved);
    } else {
      deleteRecipe(recipe._id, userID);
      setIsRecipeSaved(false);
    }
  };


  return (
    <li key={recipe._id}>
      <div className={styles.recipeCard}>
        <div className={styles.recipeCardImage}>
          <Link className="image-link" href={`/recipes/${recipe.slug}`} legacyBehavior>
            <img src={recipe.imageUrl} width="auto" height="auto" alt={recipe.name} />
          </Link>
        </div>

        <h2 className={styles.recipeName}>{recipe.name}</h2>

        {/* display recipe cooking time and author */}
        <div className="flex flex-col sm:flex-row justify-between sm:gap-2 gap-4 p-4 sm:items-center">
          <div className="flex flex-col">
            <span className={styles.spanInteract}>
              <FaRegClock className={styles.Fa} style={{color: "#ebf2ff",}} />
              {recipe.cookingTime} mins
            </span>
            <span>From: <span className={styles.recipeAuthor}>{recipeAuthor}</span> </span>
          </div>
          {/* add recipe to saved list */}
          <LikeButton className={styles.likeButton} isSaved={isRecipeSaved} handleClick={handleSaveClick} />
        </div>
        {/* recipe details button */}
        <div className="flex flex-col sm:p-4 px-4">
          <Link href={`/recipes/${recipe.slug}`} legacyBehavior>
            <Button buttonType="primary">View Recipe</Button>
          </Link>
        </div>
      </div>
    </li>
  );
}