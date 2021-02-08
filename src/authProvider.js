// in src/authProvider.js
import {auth} from './firebase'
const authProvider =  {
    // called when the user attempts to log in
    login: async ({ username, password }) => {
        try{
            let userCreds = await auth.signInWithEmailAndPassword(username, password);
            localStorage.setItem('creds', userCreds);
            // accept all username/password combinations
            return Promise.resolve();

        }catch(error){
            throw new Error(error);
        }
       
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('creds');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('creds')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;