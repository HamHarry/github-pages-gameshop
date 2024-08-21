import { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import "./Dropdown.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: number;
  fname: string;
  lname: string;
  username: string;
  avatar: string;
}

const Navbar = () => {
  const [users, setUsers] = useState<User>();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchuser = useCallback(async () => {
    const res = await axios.get(`https://www.melivecode.com/api/users/${id}`);
    const user = res.data.user;
    console.log(user);
    setUsers(user);
  }, [id]);
  useEffect(() => {
    fetchuser();
  }, [fetchuser]);

  return (
    <div className="container-navbar">
      <i
        className="fa-brands fa-steam"
        onClick={() => {
          window.location.reload();
        }}
      ></i>
      <div className="navbar-right">
        <i className="fa-solid fa-cart-shopping"></i>
        <img
          src={users?.avatar}
          alt="logo"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            {users?.fname} {users?.lname}
          </h3>
          <ul>
            <li>
              <i className="fa-solid fa-user"></i>
              <p>Profile</p>
            </li>
            <li>
              <i className="fa-solid fa-user-pen"></i>
              <p>Edit Profile</p>
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              <p>Setting</p>
            </li>
            <li>
              <i className="fa-solid fa-right-from-bracket"></i>
              <p
                onClick={() => {
                  navigate("/");
                }}
              >
                Log out
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
