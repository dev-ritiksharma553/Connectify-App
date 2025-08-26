import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "@/redux/chatSlice";
import axios from "axios";

const UseGetAllMessages = () => {
  const { selectedUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.chat)

  useEffect(() => {
    if (!selectedUser?._id) return; // nothing to fetch

    const fetchAllMessages = async () => {
      try {
  const token = localStorage.getItem("token");

const response = await axios.get(
  `https://connectify-app-a7vh.onrender.com/message/getallmessage/${selectedUser._id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`, // token in header
    },
  }
);

        if (response.data.success) {
          dispatch(setMessages(response.data.messages || []));
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchAllMessages();
  }, [dispatch, selectedUser]); // ✅ include selectedUser
};

export default UseGetAllMessages;
