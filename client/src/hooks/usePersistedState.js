import { useState } from "react";
import { json } from "react-router-dom";

export default function usePersistedState(key,initialState){
    const [state,setState] = useState(() =>{
        const persistedAuth = localStorage.getItem(key);

        if(!persistedAuth){
            return typeof initialState === 'function'
            ? initialState()
            : initialState;
        }
        const authData = JSON.parse(persistedAuth);

        return authData;
    })
}