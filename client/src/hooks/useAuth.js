import { login, logout, register } from "../api/auth-api";
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

export const useRegister = () =>{
    const {changeAuthState} = useAuthContext();

    const registerHendler = async (email,password) =>{
        const {password: _, ...authData} = await register(email,password);

        changeAuthState(authData);
        return authData;
    }

    return registerHendler;
}

export const useLogout = () => {
    const{logout: localLogout} = useAuthContext();

    const logoutHendler = async () => {
        localLogout();
        await logout();
    }

    return logoutHendler;
}

