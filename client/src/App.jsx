import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// lazy, allow only to render component(s) that is being used currently.
const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessagesManagement = lazy(() => import("./pages/admin/MessagesManagement"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));

import ProtectRoute from "./components/auth/ProtectRoute"; // open the neccessary path only
import { LayoutLoader } from "./components/layout/Loaders";

const user = true;

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          {/* wrapping Route, allow to run first Route in case multiple same(path) */}
          {/* <Route path='/' element = {<ProtectRoute user={user}>
          <Home />
        </ProtectRoute>}></Route> */}

          <Route element={<ProtectRoute user={user} />}> {/* user={user} is nothing but we giving ProtectRoute true/false */}
            {" "}
            {/* only logged in user can go to these urls' */}
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/chat" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/admin/messages" element={<MessagesManagement />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
