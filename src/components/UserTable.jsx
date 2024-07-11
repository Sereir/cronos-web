import React from 'react';

const UserTable = ({ users, deleteUser }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th className="table-header">ID</th>
          <th className="table-header">Nom</th>
          <th className="table-header">Email</th>
          <th className="table-header">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="delete-button" onClick={() => deleteUser(user.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;