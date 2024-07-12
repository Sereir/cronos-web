import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';

const AdminUsersPage = () => {
  const [users, setUsers] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS92MS9hdXRoL2FkbWluL2xvZ2luIiwiaWF0IjoxNzIwNzY5MDI3LCJleHAiOjE3NTIzMjY2MjcsIm5iZiI6MTcyMDc2OTAyNywianRpIjoiME9keWdLRXY5TUlVcnRDNSIsInN1YiI6IjEyMCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJwcml2YXRlX2tleSI6ImVkODJiNjM4OGQ1MDViOWU2MGQwZDUyNWM2NTJkZDQ1ZDU4Y2I1ODY3NzUyNzFlMWZiMjhhZDVhMTA5MjMwNzQifQ.HL0TY-2IIEv5P9eg4HJDGlDJCNQ7B8qyBoZHqrXBrC0';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://fjsavucckk.laravel-sail.site:8080/api/v1/admin/dashboard/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://fjsavucckk.laravel-sail.site:8080/api/v1/admin/dashboard/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setUsers((prevUsers) => ({
        data: prevUsers.data.filter(user => user.id !== id)
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  const updateUser = async (id, updatedUserData) => {
    try {
      const response = await fetch(`http://fjsavucckk.laravel-sail.site:8080/api/v1/admin/dashboard/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedUserData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedUser = await response.json();
      setUsers((prevUsers) => ({
        data: prevUsers.data.map(user => (user.id === id ? updatedUser : user))
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Utilisateurs</h2>
      <UserTable users={users} deleteUser={deleteUser} updateUser={updateUser} />
    </div>
  );
};

export default AdminUsersPage;
