// hooks/useBlogs.js
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { conifgs } from "../../config";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${conifgs.BASE_URL}user/get_custom_blogs_data.php`
        );

        if (response.data.status === "success") {
          setBlogs(response.data.message.blogs);
          setKeywords(response.data.message.keywords);
          setError(null);
        } else {
          setError("Failed to load blogs");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, keywords, loading, error };
};
