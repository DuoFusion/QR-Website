import { KEYS, URL_KEYS } from "../constants";
// import { ChangePasswordPayload, ForgetPasswordPayload, LoginPayload, LoginResponse, OtpPayload, ResetPasswordPayload } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ Auth ***********
  // useLogin: () => useApiPost<LoginPayload, LoginResponse>([KEYS.LOGIN], (input) => Post(URL_KEYS.Auth.Login, input)),
  // useRequestForgotPassword: () => useApiPost<ForgetPasswordPayload, void>([KEYS.SEND_PASSWORD_EMAIL], (input) => Post(URL_KEYS.Auth.ForgotPassword, input, false)),
  // useVerifyOtp: () => useApiPost<OtpPayload, void>([KEYS.VERIFY_OTP], (input) => Post(URL_KEYS.Auth.VerifyOtp, input)),
  // useResetPassword: () => useApiPost<ResetPasswordPayload, LoginResponse>([KEYS.RESET_PASSWORD], (input) => Post(URL_KEYS.Auth.ResetPassword, input)),
  // useChangePassword: () => useApiPost<ChangePasswordPayload, void>([KEYS.ChANGE_PASSWORD], (input) => Post(URL_KEYS.Auth.ChangePassword, input)),

  // ************ Inquiry ***********
  useInquiry: () => useApiPost<any, void>([KEYS.INQUIRY.ADD_INQUIRY], (input) => Post(URL_KEYS.Inquiry.Add, input)),

};

export default Mutations;
