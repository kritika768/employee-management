import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees } from "./employeeService";
import { act } from "react";

export const fetchEmployees = createAsyncThunk("employee.fetchEmployess",
    async () =>{
        const response = await getEmployees()
        return response.data.users;
    }
)
const initialState = {
    employees: [],
    loading: false,
    error: null,
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers:{},

    extraReducers: (builder) =>{
        builder
        .addCase(
            fetchEmployees.pending,
            (state) =>{
                state.loading = true;
                state.error = null
            }
        )
        .addCase(
            fetchEmployees.fulfilled,
            (state,action) =>{
                state.loading = false;
                state.employees = action.payload
            }
        )
        .addCase(
            fetchEmployees.rejected,
            (state,action) =>{
                state.loading = false;
                state.error = action.error.message;
            }
        )
    }
    
})

export const {addEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;