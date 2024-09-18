import React, { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import AddEmployeeModal from './components/AddEmployeeModal';
import './App.css';

function App() {
   const [employees, setEmployees] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false); 

   const addEmployee = (employee) => {
       setEmployees((prevEmployees) => [...prevEmployees, employee]);
   };

   const editEmployee = (id, updatedEmployee) => {
       const updatedEmployees = employees.map((emp) =>
           emp.id === id ? { ...emp, ...updatedEmployee } : emp
       );
       setEmployees(updatedEmployees);
   };

   const deleteEmployee = (id) => {
       setEmployees(employees.filter((emp) => emp.id !== id));
   };

   return (
    <div>
    <h1>Employee Management App</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Add Employee</h2>
      <button onClick={() => setIsModalOpen(true)}> +
        {/* <img src="/path/to/your/icon.png" alt="Add" style={{ width: '24px', height: '24px' }} /> */}
      </button>
    </div>
    <AddEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addEmployee={addEmployee} />
    <EmployeeList
      employees={employees}
      editEmployee={editEmployee}
      deleteEmployee={deleteEmployee}
    />
  </div>
);
}


export default App;




