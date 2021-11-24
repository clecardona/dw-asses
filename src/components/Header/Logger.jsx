import { useAuth } from "state/AuthProvider";
import { useHistory } from "react-router-dom";

export default function Logger() {
  const { user, loggedIn, setLoggedIn } = useAuth();
  const history = useHistory();

  function logout() {
    setLoggedIn(false);
    localStorage.setItem("uid", "");
    history.push("/");
  }
  return (
    <div className="logger">
      <button className="btn btn-logger">
        <h4>Sign in </h4>
      </button>
      <button className="btn btn-logger">
        <h4>Sign up </h4>
      </button>

      <button className="btn btn-logger" onClick={() => logout()}>
        <h4>Logout </h4>
      </button>
    </div>
  );
}
