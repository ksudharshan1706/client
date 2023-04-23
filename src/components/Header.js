import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";
import { LoginContext } from "./ContextProvider/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, NavLink, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";
import { API } from "../global.js";

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = await fetch(`http://localhost:3000/logout`, {
      // let API = API.replace("https", "http");
      // const res = await fetch(`${API}/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include",
    })
      // .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.message);
      });

    const data = await res.json();
    console.log(data);

    if (data.status == 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      history("/");
    } else {
      console.log("error");
    }
  };

  const goDash = () => {
    history("/dash");
  };

  const goError = () => {
    history("*");
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            {/* <h1>HP Cloud</h1> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
          </NavLink>
          <div className="header-middle">
            <div className="header-search-container">
              <SearchIcon />
              <input type="text" placeholder="search question" />
            </div>
          </div>
          <div className="avtar">
            {logindata.ValidUserOne ? (
              <Avatar
                style={{
                  background: "salmon",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={handleClick}
              >
                {logindata.ValidUserOne.fname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar style={{ background: "salmon" }} onClick={handleClick} />
            )}
          </div>
          <div className="header-right">
            <div className="header-right-container">
              {/* <InboxIcon />
              <HelpIcon /> */}
              <svg
                aria-hidden="true"
                class="svg-icon iconStackExchange"
                width="24"
                height="24"
                viewBox="0 0 18 18"
                fill="rgba(0,0,0,0.5)"
                style={{
                  cursor: "pointer",
                }}
              >
                <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
              </svg>
            </div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {logindata.ValidUserOne ? (
              <>
                <MenuItem
                  onClick={() => {
                    goDash();
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logoutuser();
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    goError();
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
              </>
            )}
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
