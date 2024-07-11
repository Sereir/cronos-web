import React, { useState } from 'react';
import PostTable from './PostTable';

const AdminPostsPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'Contenu du post 1' },
    { id: 2, title: 'Post 2', content: 'Contenu du post 2' },
    { id: 3, title: 'Post 3', content: 'Contenu du post 3' },
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h2>Posts</h2>
      <PostTable posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default AdminPostsPage;
