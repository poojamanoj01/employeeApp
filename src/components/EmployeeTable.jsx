import React, { useState } from 'react';

function EmployeeTable({ employees, editEmployee, deleteEmployee }) {
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleUpdate = (updatedEmployee) => {
    editEmployee(editingEmployee.id, updatedEmployee);
    setEditingEmployee(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>
                {editingEmployee?.id === emp.id ? (
                  <input
                    type="text"
                    value={editingEmployee.userName}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, userName: e.target.value })
                    }
                  />
                ) : (
                  emp.userName
                )}
              </td>
              <td>
                {editingEmployee?.id === emp.id ? (
                  <input
                    type="email"
                    value={editingEmployee.email}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, email: e.target.value })
                    }
                  />
                ) : (
                  emp.email
                )}
              </td>
              <td>
                {editingEmployee?.id === emp.id ? (
                  <select
                    value={editingEmployee.status}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, status: e.target.value })
                    }
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                ) : (
                  emp.status
                )}
              </td>
              <td>
                {editingEmployee?.id === emp.id ? (
                  <>
                    <button onClick={() => handleUpdate(editingEmployee)}>Save</button>
                    <button onClick={() => setEditingEmployee(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(emp)}>Edit</button>
                    <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
