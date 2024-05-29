import { useState, useEffect } from "react";
import apiClient from "./../utils/apiClient";

export default function usePost(postId) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const response = await apiClient.get(`/posts/${postId}`);
        setPost(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
        setPost(null); // Clear post data in case of error
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId]);

  return { post, error, loading };
}
