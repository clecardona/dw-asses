//NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import down from "../../assets/icns/down.png";
import calendar from "assets/icns/calendar.png";
import logout from "assets/icns/logout.png";
import userIcon from "assets/icns/userIcon.png";

export default function Toolbar({ onLogout }) {
  //Global
  const [isOpen, setIsOpen] = useState(false);
  const urlCalendar = "https://calendar.google.com/";
  const { user } = useAuth();

  return (
    <div className={isOpen ? "toolbar toolbar-open" : "toolbar"}>
      <div className="buttons">
        <div className="open">
          <h4>Menu</h4>
          <button
            type="button"
            className="btn "
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={down} alt="." />
          </button>
        </div>

        <a
          href={urlCalendar}
          target="_blank"
          rel="noreferrer"
          className="btn toolbar-item calendar"
        >
          <h4>Calendar</h4>
          <img src={calendar} alt="." />
        </a>

        <Link to={`/profile/${user.id}`} className="btn toolbar-item profile">
          <h4>My profile</h4>
          <img src={userIcon} alt="." />
        </Link>

        <button
          type="button"
          className="btn toolbar-item logout"
          onClick={onLogout}
        >
          <h4>Logout</h4>
          <img src={logout} alt="." />
        </button>
      </div>
    </div>
  );
}