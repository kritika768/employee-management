import { useState ,useEffect} from 'react'
import './App.css'
import { API_BASE_URL, APP_NAME } from './utils/constants';
import axiosInstance from './api/axiosInstance';
import { API_ENDPOINTS } from "./api/endpoints";
import { getEmployees } from './features/employee/employeeService';

function App() {
useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response =
        await getEmployees();
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
     <div>
      <h1>{APP_NAME}</h1>
      <p>{API_BASE_URL}</p>
    </div>
    </>
  )
}

export default App
