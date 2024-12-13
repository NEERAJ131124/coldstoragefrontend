import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Btn, H2, P } from "../../../../../AbstractElements";
import { useNavigate } from "react-router-dom";
import { LoginFormProp } from '../../../../../Types/Others.type';
import CommonLogo from "./CommonLogo";
import { FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { sendOTP, verifyOTP } from "../../../../../api-service/Auth/Index";

const LoginForm = ( { logoClass }: LoginFormProp) => {
  const navigate = useNavigate();
  const [isOTP, setIsOTP] = useState(true);

  // Initial form values
  const initialValues = {
    email: "",
    otp: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email/Phone is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^[0-9]{10}$/,
        "Must be a valid email or 10-digit phone number"
      )
  });
  
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      debugger;
      if (isOTP) {
        // Send OTP API call
        const requestData = {
          Email: values.email, // Email field from the form
        };
        const response = await sendOTP(requestData);
        toast.success("OTP sent successfully!");
        setIsOTP(false); // Show OTP field after sending OTP
      } 
      else {
        // Verify OTP API call
        const requestData = {
          Email: values.email, // Email field from the form
          Otp: values.otp, // OTP field from the form
        };
       await verifyOTP(requestData,navigate);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <CommonLogo logoClass={logoClass} />
      <div className="login-main">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="theme-form">
              <H2>{"Sign In to Your Account"}</H2>
              <P>{"Using OTP"}</P>
              <FormGroup>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email / Mobile Number"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </FormGroup>
              {!isOTP && (
                <FormGroup>
                  <Field
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="form-control"
                  />
                  <ErrorMessage name="otp" component="div" className="text-danger" />
                </FormGroup>
              )}
              <div className="text-end mt-3">
                <Btn color="primary" block className="w-100" disabled={isSubmitting}>
                  {isOTP ? "Send OTP" : "Verify OTP"}
                </Btn>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;




















// import React, { FormEvent, useState } from 'react';
// import { Btn, H2, P } from '../../../../../AbstractElements';
// import { Link, useNavigate } from 'react-router-dom';
// import { LoginFormProp } from '../../../../../Types/Others.type';
// import CommonLogo from './CommonLogo';
// import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
// import { EmailAddress, OTP, Password, RememberPassword, SignIn, SignInAccount } from '../../../../../Utils/Constants';
// import SocialLinks from './SocialLinks';
// import { toast } from 'react-toastify';
// import { useGetRequestQuery } from '../../../../../hooks/useGetRequestQuery';
// // import { submitLoginService } from '../../../../../api-service/Auth/Index';
// import { axiosApi } from '../../../../../Config/apiConfig';

// // Define the types for the form data
// interface FormData {
//   email: string;
//   otp: string;
//   checkbox1: boolean;
// }

// export default function LoginForm({ logoClass }: LoginFormProp) {
//   const navigate = useNavigate();
//   const [isOTP, setIsOTP] = useState(true);
// //   const toggle = () => setPasswordVisible(!isPasswordVisible);

//   // Define the state for form data
//   const [formData, setFormData] = useState<FormData>({ email: '', otp: '', checkbox1: false });

//   // Handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsOTP(false)
//     // Perform form validation if needed, currently skipping
//     try {
//         debugger;
//       const response = await axiosApi.post(`${process.env.REACT_APP_API_URL}/login/login-or-signup`, {Email:formData.email});
//       console.log(response);

//       toast.success('Login Success!');
//       localStorage.setItem('login', JSON.stringify(true));
      
//       // Navigate to the dashboard after successful login
//       navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
//     } catch (error) {
//       toast.error('Login failed. Please try again.');
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <CommonLogo logoClass={logoClass} />
//       </div>
//       <div className="login-main">
//         <Form className="theme-form" onSubmit={handleSubmit}>
//           <H2>{SignInAccount}</H2>
//           <P>
//             {'Using OTP'}
//             <hr style={{ padding: 0, margin: 0, width: '55px', height: '3px', color: 'black' }} />
//           </P>
//           <FormGroup>
//             <Input
//               type="text"
//               required
//               placeholder="Email / Mobile Number"
//               id="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="text"
//             //   required
//               placeholder="Enter OTP"
//               hidden={isOTP}
//               id="otp"
//               value={formData.otp}
//               onChange={handleInputChange}
//             />
//           </FormGroup>
//           <FormGroup className="mb-0 checkbox-checked">
//             <FormGroup className="checkbox-solid-info" check>
//               {/* Optionally add checkbox for Remember Password */}
//               {/* <Input id="solid6" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} /> */}
//               {/* <Label htmlFor="solid6" check>{RememberPassword}</Label> */}
//             </FormGroup>
//             {/* Optionally link to forget password page */}
//             {/* <Link to={`${process.env.PUBLIC_URL}/authentication/forget_password`}>{'Forgot password?'}</Link> */}
//             <div className="text-end mt-3">
//               <Btn color="primary" block className="w-100">
//                 {SignIn}
//               </Btn>
//             </div>
//           </FormGroup>
//           <SocialLinks />
//         </Form>
//       </div>
//     </div>
//   );
// }

