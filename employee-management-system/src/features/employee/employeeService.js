import axiosInstance from "../../api/axiosInstance";
import { API_ENDPOINTS } from "../../api/endpoints";

export const getEmployees = () => {
  return axiosInstance.get(API_ENDPOINTS.USERS);
};