import React, { useState, useEffect } from 'react';
import PostTable from './PostTable';

const AdminPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS92MS9hdXRoL2FkbWluL2xvZ2luIiwiaWF0IjoxNzIwNzY5MDI3LCJleHAiOjE3NTIzMjY2MjcsIm5iZiI6MTcyMDc2OTAyNywianRpIjoiME9keWdLRXY5TUlVcnRDNSIsInN1YiI6IjEyMCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJwcml2YXRlX2tleSI6ImVkODJiNjM4OGQ1MDViOWU2MGQwZDUyNWM2NTJkZDQ1ZDU4Y2I1ODY3NzUyNzFlMWZiMjhhZDVhMTA5MjMwNzQifQ.HL0TY-2IIEv5P9eg4HJDGlDJCNQ7B8qyBoZHqrXBrC0';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://fjsavucckk.laravel-sail.site:8080/api/v1/admin/dashboard/posts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`http://fjsavucckk.laravel-sail.site:8080/api/v1/admin/dashboard/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setPosts((prevPosts) => ({
        data: prevPosts.data.filter(post => post.id !== id)
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
      <h2>Posts</h2>
      <PostTable posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default AdminPostsPage;
