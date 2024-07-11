import React, { useState } from 'react';
import "../style/adminPanel.css";

const AdminPanel = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'Content of post 1' },
    { id: 2, title: 'Post 2', content: 'Content of post 2' },
    { id: 3, title: 'Post 3', content: 'Content of post 3' },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="admin-panel">
      <div>
      <a className="delete-button" href="/">Page d'accueil</a>
      </div>
      <h1 className="panel-title">Panel Admin</h1>
      <section className="section">
        <h2>Posts</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th className="table-header">ID</th>
              <th className="table-header">Titre</th>
              <th className="table-header">Contenu</th>
              <th className="table-header">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button className="delete-button" onClick={() => deletePost(post.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="section">
        <h2>Utilisateurs</h2>
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
      </section>
    </div>
  );
};

export default AdminPanel;
