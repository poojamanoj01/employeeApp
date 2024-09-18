import React, { useState } from 'react';

const AddEmployeeModal = ({ isOpen, onClose, addEmployee }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(), // Simple ID generation
      userName,
      email,
      status,
    };
    addEmployee(newEmployee);
    onClose(); // Close modal after adding employee
    setUserName('');
    setEmail('');
    setStatus('active');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required placeholder='username'
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required placeholder='email'
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button type="submit">Add Employee</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
