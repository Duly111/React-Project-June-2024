import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/data/recipes'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const recipes = Object.values(result);

    return recipes;
};


export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const create = (gameData) =>  request.post(`${BASE_URL}`,gameData);

export const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);

export const update = (gameId,gameData) => request.put(`${BASE_URL}/${gameId}`,gameData);

const recipesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
};

export default recipesAPI;