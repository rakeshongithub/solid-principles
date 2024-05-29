// usePostComment.js
import { useState } from "react";
import apiClient from "./../utils/apiClient";

const usePostComment = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (data) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, isLoading };
};

export default usePostComment;
