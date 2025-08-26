import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./components/Signup";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ChatPage from "./components/ChatPage";
import NotificationPage from "./components/NotificationPage";

import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser } from "./redux/chatSlice";
import { setSocket } from "./redux/socketSlice";
import { setLikeNotification } from "./redux/notiSlice";

// ✅ 1. Define all routes using React Router
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/account/edit", element: <EditProfile /> },
      { path: "/chat", element: <ChatPage /> },
      { path: "/notification", element: <NotificationPage /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const { user } = useSelector((store) => store.auth);
  const { socket } = useSelector((store) => store.socketio);
  const dispatch = useDispatch();

  // ✅ 2. Initialize Socket.io and save socket in Redux
  useEffect(() => {
    if (user) {
      const socketio = io("https://connectify-app-a7vh.onrender.com", {
        query: { userId: user._id },
        transports: ["websocket"],
      });

      dispatch(setSocket(socketio));

      socketio.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
      });

      return () => {
        socketio.close();
        dispatch(setSocket(null));
      };
    }
  }, [user, dispatch]);

  // ✅ 3. Listen to notifications from socket
  useEffect(() => {
    if (socket) {
      socket.on("notification", (notification) => {
        dispatch(setLikeNotification(notification));
      });

      return () => {
        socket.off("notification");
      };
    }
  }, [socket, dispatch]);

  // ✅ 4. Render the router
  return <RouterProvider router={browserRouter} />;
}

export default App;
