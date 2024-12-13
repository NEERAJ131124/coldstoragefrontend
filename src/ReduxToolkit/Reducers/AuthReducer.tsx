import { createSlice } from '@reduxjs/toolkit';




// const initialState = {
//     isAuthenticated: false, 
//     token: "" ,
// };

// export const AuthSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setToken(state, action) {
//             state.token = action.payload;
//             state.isAuthenticated = !!action.payload;
//         },
//         clearToken(state) {
//             state.token = null;
//             state.isAuthenticated = false;
//         },
//         checkAuthState(state) {
//             const token = localStorage.getItem('token');
//             state.token = token;
//             state.isAuthenticated = token ? true : false; 
//         },
//     },
// });

// export const { setToken, clearToken, checkAuthState } = AuthSlice.actions;
// export default AuthSlice.reducer;
