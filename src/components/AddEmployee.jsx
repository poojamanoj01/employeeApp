import React, { useState } from 'react';

function AddEmployee({ addEmployee }) {
  const [employee, setEmployee] = useState({
    id: '',
    userName: '',
    email: '',
    status: 'active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ ...employee, id: Date.now() });
    setEmployee({ id: '', userName: '', email: '', status: 'active' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={employee.userName}
        onChange={handleChange}
        placeholder="User Name"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select name="status" value={employee.status} onChange={handleChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
