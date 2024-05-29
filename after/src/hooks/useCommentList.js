import { useState, useEffect } from "react";
import apiClient from "./../utils/apiClient";

export default function useCommentList(postId) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      try {
        const response = await apiClient.get(
          `/posts/${postId}/comments?_limit=2`
        );
        setComments(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
        setComments([]); // Clear comments in case of error
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postId]);

  return { comments, error, loading };
}
