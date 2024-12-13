
// apiTypes.ts (This file holds your types/interfaces)
export interface LoginRequest {
    Email: string;
  }
  
  export interface OTPRequest {
    Email: string;
    Otp: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    message: string;
    token:string;
  }
    