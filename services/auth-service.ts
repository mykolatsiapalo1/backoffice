import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";

class AuthService {
  // Method to handle user login
  async login(username: string, password: string): Promise<AxiosResponse> {
    return axiosInstance
      .post(
        "auth/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          // Assuming the tokens are in the response data
          const { access_token, refresh_token } = response.data;
          Cookies.set("access_token", access_token, { path: "/" });
          Cookies.set("refresh_token", refresh_token, { path: "/" });
        }
        return response;
      });
  }

  // Method to handle user registration
  signup(fullname: string, username: string, password: string, email: string): Promise<AxiosResponse> {
    return axiosInstance.post("auth/signup", { full_name: fullname, username, password, email });
  }
  forgotPassword(email: string): Promise<AxiosResponse> {
    return axiosInstance.post("auth/forgot_password", { email });
  }
  confirmEmail(token: string): Promise<AxiosResponse> {
    return axiosInstance.get(`auth/confirm_email?token=${token}`);
  }
  googleLogin(): Promise<AxiosResponse> {
    return axiosInstance.get("auth/google/login", { withCredentials: true });
  }
  logout() {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
  }
}

// Export an instance of the AuthService class
export default new AuthService();
