import { useEffect, useReducer } from "react";
import commentsApi from "../api/coments-api";

export function useCreateComment(){
    const createHendler = (recipeId,comment) => commentsApi.create(recipeId,comment)

    return createHendler;
}

function commentReducer(state,action){
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT' :
            return [...state, action.payload];
        default:
            return state;
    }
}

export function useGetAllComments(recipeId){
    const [comments,dispatch] = useReducer(commentReducer,[]);

    useEffect(() =>{
        (async () =>{
            const result = await commentsApi.getAll(recipeId);

            dispatch({type: 'GET_ALL' , payload: result});
        })()
    },[recipeId])

    return[comments,dispatch];
}