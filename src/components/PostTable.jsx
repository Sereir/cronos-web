import React from 'react';

const PostTable = ({ posts, deletePost }) => {
  return (
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
  );
};

export default PostTable;
