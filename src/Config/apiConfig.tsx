import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});



// // Add an interceptor to inject token conditionally
// axiosApi.interceptors.request.use((config) => {
//   if (config.shouldIncludeToken) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });


interface JwtPayload {
  userId: string;
  iat?: number; // Issued At (optional)
  exp?: number; // Expiry Time (optional)
}

const decodeToken = (): JwtPayload | null => {
  const token = localStorage.getItem("token"); // Replace with your token key
  if (token) {
      try {
          return jwtDecode<JwtPayload>(token); // Explicitly cast the decoded token
      } catch (error) {
          console.error("Invalid token:", error);
          return null;
      }
  }
  return null;
};

export { axiosApi, decodeToken };