import { toast } from "react-toastify";
import { axiosApi, decodeToken } from "../../Config/apiConfig";
import { UsersRequest } from "../../Types/Users.type";

export const updateUserProfile = async (request: UsersRequest, navigate: any) => {
    try {
        debugger;
        const response = await axiosApi.post('/user/profile', request,{
            headers: {  
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
        if (response.status !== 200) {
          throw new Error(`Failed to update profile: ${response.data.message}`);
        }
        else{
            toast.success(response.data.message);
            return response.data; // Axios automatically parses JSON
        }
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            navigate('/errors/error_503')
        } else {
            console.error('Error fetching:', error);
            toast.error(error?.response?.data?.message || 'An error occurred');
        }
    }
}

export const getUserProfile = async (navigate: any) => {
    try {
        const token = decodeToken()
        const response = await axiosApi.get(`/user/${token?.userId}`,{
            headers: {  
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
        if (response.status !== 200) {
          throw new Error(`Failed to update profile: ${response.data.message}`);
        }
        return response.data; // Axios automatically parses JSON
    } catch (error: any) {
        if (error.code === "ERR_NETWORK") {
            navigate('/errors/error_503')
        } else {
            console.error('Error fetching:', error);
            toast.error(error?.response?.data?.message || 'An error occurred');
           

        }
    }
}
