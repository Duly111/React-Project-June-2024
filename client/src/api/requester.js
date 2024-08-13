// import {getAccesToken} from '../utils/authUtils'


// async function requester(method, url, data){
//     const options = {};

//     const accessToken = getAccesToken();

//     if(accessToken) {
//         options.headers = {
//             ...options.headers,
//             'X-Authorization': accessToken,
//         }
//     }

//     if(method !== 'GET'){
//         options.method = method;
//     }

//     if(data){
//         options.headers = {
//             ...options.headers,
//             'Content-Type': 'application/json'
//         };

//         options.body = JSON.stringify(data);
//     }

//         const response = await fetch(url,options);
//         if(response.status === 204){
//             return;
//         }
//         const result = await response.json();

//         if(!response.ok){
//             throw result;
//         }

//         return result;

// }

// export const get = requester.bind(null, 'GET');
// export const post = requester.bind(null, 'POST');
// export const put = requester.bind(null, 'PUT');
// export const del = requester.bind(null, 'DELETE')


// export default {
//     get,
//     post,
//     put,
//     del
// }


import { getAccesToken } from '../utils/authUtils';

async function requester(method, url, data) {
    const options = {
        method: method, // Добавяме метода директно в options
        headers: {
            'Content-Type': 'application/json' // Задаваме Content-Type по подразбиране
        }
    };

    const accessToken = getAccesToken();
    
    // Ако имаме токен и това не е заявка за вход или регистрация
    if (accessToken && !url.includes('/login') && !url.includes('/register')) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return;
    }

    const result = await response.json();

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${result.message || response.statusText}`);
    }

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
};
