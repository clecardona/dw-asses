//@ts-nocheck
import Admin from "components/AdminPages/Admin";
import Login from "components/AuthPages/Login";
import SignUp from "components/AuthPages/Signup";
import Home from "components/Home";

import { Route } from "react-router-dom";
import { useAuth } from "state/AuthProvider";

// Project files

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      {user.role === "admin" && <Route component={Admin} path="/admin" />}
    </>
  );
}
