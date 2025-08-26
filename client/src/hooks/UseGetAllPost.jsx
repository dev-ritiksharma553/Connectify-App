import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPostSlice } from "@/redux/postSlice";
import axios from "axios";

const useGetAllPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return; // stop if no token

        const response = await axios.get("https://connectify-app-a7vh.onrender.com/post/all", {
          headers: {
            Authorization: `Bearer ${token}`, // token in header
          },
        });

        if (response.data.success) {
          dispatch(setPostSlice(response.data.posts));
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchAllPost();
  }, [dispatch]);
};

export default useGetAllPost;
