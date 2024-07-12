import React, { useState } from "react";

const UserTable = ({ users, deleteUser, updateUser }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({
    username: "",
    email: "",
  });

  const handleUpdateClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedUserData({ username: user.username, email: user.email });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateSubmit = () => {
    updateUser(editingUserId, updatedUserData);
    setEditingUserId(null);
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th className="table-header">ID</th>
          <th className="table-header">Nom</th>
          <th className="table-header">Email</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              {editingUserId === user.id ? (
                <input
                  type="text"
                  name="username"
                  value={updatedUserData.username}
                  onChange={handleUpdateChange}
                />
              ) : (
                user.username
              )}
            </td>
            <td>
              {editingUserId === user.id ? (
                <input
                  type="email"
                  name="email"
                  value={updatedUserData.email}
                  onChange={handleUpdateChange}
                />
              ) : (
                user.email
              )}
            </td>
            <td>
              {editingUserId === user.id ? (
                <button onClick={handleUpdateSubmit}>Enregistrer</button>
              ) : (
                <>
                  <button
                    className="delete-button"
                    onClick={() => deleteUser(user.id)}
                    style={{ marginRight: "5px" }}
                  >
                    Supprimer
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleUpdateClick(user)}
                  >
                    Modifier
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
