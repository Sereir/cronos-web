import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AdminPostsPage from './AdminPostsPage';
import AdminUsersPage from './AdminUsersPage';
import "../style/adminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1 className="panel-title">Panel Admin</h1>
      <ul>
        <li>
          <Link to="/admin" className="logout">Se déconnecter</Link>
        </li>
        <li>
          <Link to='/' className="back">Retour au site</Link>
        </li>
      </ul>

      <nav className="admin-nav">
        <li><Link to="/admin/posts">Posts</Link></li>
        <li><Link to="/admin/users">Utilisateurs</Link></li>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="posts" element={<AdminPostsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
