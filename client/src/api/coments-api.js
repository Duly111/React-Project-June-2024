import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

const create = (recipeId,text) => requester.post(BASE_URL,{recipeId,text});

const getAll = (recipeId) =>{
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`,
    })
    return requester.get(`${BASE_URL}?${params.toString()}`)
}

const commentsApi = {
    create,
    getAll,
}

export default commentsApi;