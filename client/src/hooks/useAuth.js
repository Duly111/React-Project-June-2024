import { login } from "../api/auth-api";
import { useAuthContext } from "../context/AuthContext"

export const useLogin = () =>{
    const {changeAuthState} = useAuthContext();
    
    const loginHendler = async (email,password) =>{
        const {password: _, ...authData} = await login(email,password);

        changeAuthState(authData)
        return authData;
    }
    return loginHendler
}