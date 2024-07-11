import React, { useState } from 'react';
import UserTable from './UserTable';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Utilisateurs</h2>
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default AdminUsersPage;