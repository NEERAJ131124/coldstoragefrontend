import ForgetPassword from "../Components/Pages/Others/Authentication/ForgetPassword";
import LoginSimple from "../Components/Pages/Others/Authentication/LoginSimple";
import LoginSweetAlert from "../Components/Pages/Others/Authentication/LoginSweetAlert";
import LoginWithTooltip from "../Components/Pages/Others/Authentication/LoginWithTooltip";
import LoginWithValidation from "../Components/Pages/Others/Authentication/LoginWithValidation";
import Maintenance from "../Components/Pages/Others/Authentication/Maintenance";
import RegisterSimple from "../Components/Pages/Others/Authentication/RegisterSimple";
import RegisterWithBgImage from "../Components/Pages/Others/Authentication/RegisterWithBgImage";
import RegisterWithImageTwo from "../Components/Pages/Others/Authentication/RegisterWithImageTwo";
import RegisterWizard from "../Components/Pages/Others/Authentication/RegisterWizard";
import ResetPassword from "../Components/Pages/Others/Authentication/ResetPassword";
import UnlockUser from "../Components/Pages/Others/Authentication/UnlockUser";
import VisualLogin from "../Components/Pages/Others/Authentication/VisualLogin";
import VisualLogin2 from "../Components/Pages/Others/Authentication/VisualLogin2";
import ComingWithBgImage from "../Components/Pages/Others/ComingSoon/ComingWithBgImage";
import ComingWithBgVideo from "../Components/Pages/Others/ComingSoon/ComingWithBgVideo";
import SimpleComingSoon from "../Components/Pages/Others/ComingSoon/SimpleComingSoon";
import ErrorPage1 from "../Components/Pages/Others/ErrorPage/ErrorPage1";
import ErrorPage2 from "../Components/Pages/Others/ErrorPage/ErrorPage2";
import ErrorPage3 from "../Components/Pages/Others/ErrorPage/ErrorPage3";
import ErrorPage4 from "../Components/Pages/Others/ErrorPage/ErrorPage4";
import ErrorPage5 from "../Components/Pages/Others/ErrorPage/ErrorPage5";
import ErrorPage6 from "../Components/Pages/Others/ErrorPage/ErrorPage6";

export const authRoutes = [
    //coming soon pages
    { path: `${process.env.PUBLIC_URL}/comingsoon/coming_soon_simple`, element: <SimpleComingSoon /> },
    { path: `${process.env.PUBLIC_URL}/comingsoon/coming_bg_video`, element: <ComingWithBgVideo /> },
    { path: `${process.env.PUBLIC_URL}/comingsoon/coming_bg_img`, element: <ComingWithBgImage /> },
    //authentication
    { path: `${process.env.PUBLIC_URL}/authentication/login_simple`, element: <LoginSimple /> },
    { path: `${process.env.PUBLIC_URL}/authentication/login_bg_image`, element: <VisualLogin /> },
    { path: `${process.env.PUBLIC_URL}/authentication/login_with_image_two`, element: <VisualLogin2 /> },
    { path: `${process.env.PUBLIC_URL}/authentication/login_validation`, element: <LoginWithValidation /> },
    { path: `${process.env.PUBLIC_URL}/authentication/login_tooltip`, element: <LoginWithTooltip /> },
    { path: `${process.env.PUBLIC_URL}/authentication/login_sweetalert`, element: <LoginSweetAlert /> },
    { path: `${process.env.PUBLIC_URL}/authentication/register_simple`, element: <RegisterSimple /> },
    { path: `${process.env.PUBLIC_URL}/authentication/register_bg_image`, element: <RegisterWithBgImage /> },
    { path: `${process.env.PUBLIC_URL}/authentication/register_with_image_two`, element: <RegisterWithImageTwo /> },
    { path: `${process.env.PUBLIC_URL}/authentication/unlock_user`, element: <UnlockUser /> },
    { path: `${process.env.PUBLIC_URL}/authentication/forget_password`, element: <ForgetPassword /> },
    { path: `${process.env.PUBLIC_URL}/authentication/reset_password`, element: <ResetPassword /> },
    { path: `${process.env.PUBLIC_URL}/authentication/maintenance`, element: <Maintenance /> },
    { path: `${process.env.PUBLIC_URL}/authentication/register_wizard`, element: <RegisterWizard /> },
    // Error Pages
    { path: `${process.env.PUBLIC_URL}/errors/error_400`, element: <ErrorPage1 /> },
    { path: `${process.env.PUBLIC_URL}/errors/error_401`, element: <ErrorPage2 /> },
    { path: `${process.env.PUBLIC_URL}/errors/error_403`, element: <ErrorPage3 /> },
    { path: `${process.env.PUBLIC_URL}/errors/error_404`, element: <ErrorPage4 /> },
    { path: `${process.env.PUBLIC_URL}/errors/error_500`, element: <ErrorPage5 /> },
    { path: `${process.env.PUBLIC_URL}/errors/error_503`, element: <ErrorPage6 /> },
]