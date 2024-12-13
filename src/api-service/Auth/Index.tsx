import { toast } from 'react-toastify';
import { axiosApi } from '../../Config/apiConfig';
import { LoginRequest, OTPRequest, LoginResponse } from '../apiTypes/authTypes';

// Service to send OTP
export async function sendOTP(request: LoginRequest): Promise<LoginResponse> {
  try {

    const response = await axiosApi.post<LoginResponse>('/login/login-or-signup', request);

    if (response.status !== 200) {
      throw new Error(`Failed to send OTP: ${response.status}`);
    }

    return response.data; // Axios automatically parses JSON
  } catch (error: any) {
    if(error.code==="ERR_NETWORK"){
      throw new Error('Network Error');
  }
  else{
      console.error('Error fetching :', error);
      throw new Error('Network Error');
  }
  }
}

// Service to verify OTP
export async function verifyOTP(request: OTPRequest,navigate:any){
  try {
    debugger;
    const response = await axiosApi.post('/login/verify-otp', request);

    if (response.status !== 200) {
      throw new Error(`Failed to verify OTP: ${response.status}`);
    }
    else{
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
    }
  } catch (error: any) {
    if(error.code==="ERR_NETWORK"){
      throw new Error('Network Error');
  }
  else{
      console.error('Error fetching :', error);
      toast.error(error.response.data.message)
  }
  }
}
