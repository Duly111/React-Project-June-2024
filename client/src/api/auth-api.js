// import requester from "./requester";

// const BASE_URL = "http://localhost:3030/users";

// export const login = (email,password) => requester.post(`${BASE_URL}/login`,{email,password});

// export const register = (email,password) => requester.post(`${BASE_URL}/register`,{email,password});

// export const logout = () => requester.get(`${BASE_URL}/logout`);




import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

// Функция за вход в системата
export const login = (email, password) => {
    return requester.post(`${BASE_URL}/login`, { email, password });
};

// Функция за регистрация
export const register = (email, password) => {
    return requester.post(`${BASE_URL}/register`, { email, password });
};

// Функция за изход от системата
export const logout = () => {
    return requester.get(`${BASE_URL}/logout`);
};
