import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployees } from "../features/employee/employeeSlice";

function EmployeePage() {
  const dispatch = useDispatch();

  const {
    employees,
    loading,
    error,
  } = useSelector(
    (state) => state.employee
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>Employees</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>
            {employee.firstName}{" "}
            {employee.lastName}
          </h3>
        </div>
      ))}
    </>
  );
}

export default EmployeePage;