import { toast } from "react-toastify";
import { axiosApi } from "../../Config/apiConfig";


export const submitFacility =async (data:any,navigate:any,reset:any) => {
    try {
        debugger;
        const response = await axiosApi.post('/storagefacility/add', data,{
            headers: {  
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
        console.log(response)
        if (response.status !== 201) {
          throw new Error(`Failed to add Facility: ${response.status}`);
        }
        else{
            reset();
            toast.success(response.data.message);
            return response.data; // Axios automatically parses JSON
        }
      } 
      catch (error: any) {
        console.log(error)
        toast.error(error.response.data.message)    
      }
}


export const getFacility =async (navigate:any) => {
    try {
        debugger;
        const response = await axiosApi.get(`/storagefacility/get`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
        if (response.status !== 200) {
          throw new Error(`Failed to send OTP: ${response.status}`);
        }
    
        return response.data; // Axios automatically parses JSON
      } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
      }
}
  
  
export async function getStorageType() {
    try {
        debugger;
      const response = await axiosApi.get('/storagetype', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status !== 201 && response.status !==200) {
        console.log(response.data.message)
      }
   
      return response.data; 
    } catch (error: any) {
        if(error.code==="ERR_NETWORK"){
            return null;
        }
        else{
            console.error('Error fetching :', error);
        }
    }
  }
  