import React from 'react';
import EmployeeTable from './EmployeeTable';

function EmployeeList({ employees, editEmployee, deleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>
      <EmployeeTable
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default EmployeeList;
