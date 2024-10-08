import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/data/recipes'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const recipes = Object.values(result);

    return recipes;
};


export const getOne = (recipeId) => request.get(`${BASE_URL}/${recipeId}`);

export const create = (recipeData) =>  request.post(`${BASE_URL}`,recipeData);

export const remove = (recipeId) => request.del(`${BASE_URL}/${recipeId}`);

export const update = (recipeId,recipeData) => request.put(`${BASE_URL}/${recipeId}`,recipeData);

const recipesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
};

export default recipesAPI;