import { toast } from 'react-toastify';
import { axiosApi } from '../../Config/apiConfig';
import { CountryRequest, StateRequest } from '../apiTypes/locationTypes';

// Service to send OTP
export async function addCountry(request: CountryRequest,navigate:any) {
  try {
    debugger;
    const response = await axiosApi.post('/country', request,{
        headers: {  
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
    });
    if (response.status !== 201 && response.status !== 200) {
      throw new Error(`Unable to add country: ${response.status}`);
    }
    else{
        toast.success(response.data.message);
        return response;
    } 
  } catch (error: any) {
    if(error.code==="ERR_NETWORK"){
        navigate('/errors/error_503')
        return null;
    }
    else{
        toast.error(`${error.response.data.message}`);
    }
  }
}

// Service to verify OTP
export async function getCountry(navigate:any) {
  try {
    const response = await axiosApi.get('/country',{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
    });

    if (response.status !== 200) {
      toast.error(`${response.data.message}`);
    }
    return response.data; // Axios automatically parses JSON
  } catch (error: any) {
    if(error.code==="ERR_NETWORK"){
        navigate('/errors/error_503')
        return null;
    }
    else{
        toast.error(`${error.response.data.message}`);
    }
  }
}

export async function deleteCountry(id:any,navigate:any) {
    try {
      const response = await axiosApi.delete(`/country/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status !==200) {
        toast.error(`${response.data.message}`);
      }
      else{
        toast.success(response.data.message);
        return response;
    } 
   
      return response.data; 
    } catch (error: any) {
        if(error.code==="ERR_NETWORK"){
            navigate('/errors/error_503')
            return null;
        }
        else{
            console.error('Error deleting :', error);
            toast.error(`${error.response.data.message}`);
        }
    }
  }

// Service to send OTP
export async function addState(request: StateRequest,navigate:any) {
  try {
    debugger
    const response = await axiosApi.post('/states', request,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
    });
    if (response.status !== 201 && response.status !==200) {
      toast.error(`${response.data.message}`);
    }
    else{
        toast.success(response.data.message);
        return response;
    } 
  } catch (error: any) {
    if(error.code==="ERR_NETWORK"){
        navigate('/errors/error_503')
        return null;
    }
    else{
        console.error('Error adding :', error);
        toast.error(`${error.response.data.message}`);
    }
  }
}

export async function getState(navigate:any) {
    try {
      const response = await axiosApi.get('/states', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status !== 201 && response.status !==200) {
        toast.error(`${response.data.message}`);
      }
   
      return response.data; 
    } catch (error: any) {
        if(error.code==="ERR_NETWORK"){
            navigate('/errors/error_503')
            return null;
        }
        else{
            toast.error(`${error.response.data.message}`);
        }
    }
  }
  

  export async function getStateByCountryId(id:any,navigate:any) {
    try {
      const response = await axiosApi.get(`/states/states-by-country/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if ( response.status !==200) {
        toast.error(`${response.data.message}`);
      }
      return response.data; 
    } catch (error: any) {
        if(error.code==="ERR_NETWORK"){
            navigate('/errors/error_503')
            return null;
        }
        else{
            toast.error(`${error.response.data.message}`);
        }
    }
  }

export async function deleteState(id:any,navigate:any) {
    try {
      const response = await axiosApi.delete(`/states/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status !==200) {
        toast.error(`${response.data.message}`);
      }
      else{
        toast.success(response.data.message);
        return response;
    } 
    } catch (error: any) {
        if(error.code==="ERR_NETWORK"){
            navigate('/errors/error_503')
            return null;
        }
        else{
            console.error('Error deleting :', error);
            toast.error(`${error.response.data.message}`);
        }
    }
  }
  