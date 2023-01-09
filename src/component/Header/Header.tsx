import { Container } from "react-bootstrap";
import "../../App.css";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const user: { email: string; firstname: string; lastname: string } =
    JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  return (
    <header>
      <div className="navbar">
        <Container>
          <div className="icon"></div>
          <div className="right-side">
            <p>{user.firstname} {user.lastname}</p>
            <button className="logout" onClick={() => logout()}>
              LOG OUT
            </button>
          </div>
          <Link to="account">
            <VscAccount />
          </Link>
        </Container>
      </div>
    </header>
  );
};

export default Header;
