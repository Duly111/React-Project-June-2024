import { logout, register } from "../api/auth-api";
import { useAuthContext } from "../context/AuthContext"

// export const useLogin = () =>{
//     const {changeAuthState} = useAuthContext();
    
//     const loginHendler = async (email,password) =>{
//         const {password: _, ...authData} = await login(email,password);

//         changeAuthState(authData)
//         return authData;
//     }
//     return loginHendler
// }


import { login as loginService } from "../api/auth-api"; // Правилно място на импорта

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    
    const loginHandler = async (email, password) => {
        const authData = await loginService(email, password);
        changeAuthState(authData);
        return authData;
    };
    
    return loginHandler;
};


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

