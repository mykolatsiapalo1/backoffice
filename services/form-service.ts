import { axiosInstance } from "@/lib/axios";
import { IForm } from "@/types/forms/forms";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";

class FormService {
  // Method to handle user login
  saveForm(form: IForm): Promise<AxiosResponse> {
    return axiosInstance.post("/forms/", form);
  }
}

// Export an instance of the FormService class
export default new FormService();
