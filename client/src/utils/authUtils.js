// export const getAccesToken = () => {
//     const authJSON = localStorage.getItem('auth');
//     if (!authJSON) {
//         console.error('No auth data found in localStorage');
//         return '';
//     }
//     const authData = JSON.parse(authJSON);
//     return authData?.accessToken || '';
// };

export const getAccesToken = () =>{
    const authJSON = localStorage.getItem('auth');

    if(!authJSON){
        return '';
    }
    const authData = JSON.parse(authJSON);

    return authData?.accessToken;
}