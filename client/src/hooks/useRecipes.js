import { useState, useEffect } from "react";
import recipesAPI from "../api/recipes-api";

export function useGetAllRecipes(){
    const [recipes,setRecipes] = useState([])

    useEffect(() =>{
        (async () =>{
            const result = await recipesAPI.getAll();

            setRecipes(result)
        })()
    },[])

    return [recipes,setRecipes];
}

export function useGetOneRecipes(recipeId){
    const [recipe,setRecipe] = useState({});

    useEffect(() => {
        (async () =>{
            const result = await recipesAPI.getOne(recipeId);
            
            setRecipe(result);
        })()
    },[recipeId]);

    return [recipe,setRecipe];
}

export function useCreateRecipe(){
    const recipeCreateHendler = (recipeData) => recipesAPI.create(recipeData);

    return recipeCreateHendler;
}


