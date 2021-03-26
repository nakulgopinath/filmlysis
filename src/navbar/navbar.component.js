import React from "react";
import "./navbar.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamBurgerMenuHidden: true,
    };
  }

  hamBurgerMenu = () => {
    const currentState = this.state.hamBurgerMenuHidden;
    this.setState({ hamBurgerMenuHidden: !currentState });
  };
  render() {
    return (
      <div className="navbar-image">
        <div className="navbar-menu">
          <div id="menu-links">
            <a
              id={"mobile-view-menu"}
              href="javascript:void(0);"
              onClick={this.hamBurgerMenu}
            >
              <i class="fa fa-bars"></i>
            </a>
          </div>
          <ul>
            {/* <li id='home-logo'><a href="#home"><i class="fa fa-film" font-size={80}></i> FILMLYSIS </a></li> */}
            <div
              className={
                this.state.hamBurgerMenuHidden
                  ? "menu-items-hidden"
                  : "menu-items-display"
              }
            >
              <li>
                <Link to="/" exact onClick={this.hamBurgerMenu}>
                  HOME{" "}
                </Link>
              </li>
              <li>
                <Link to="/closeup" onClick={this.hamBurgerMenu}>
                  CLOSE UP{" "}
                </Link>
              </li>
              <li>
                <Link to="/home2" onClick={this.hamBurgerMenu}>
                  EDITS{" "}
                </Link>
              </li>
              <li>
                <Link to="/home3" onClick={this.hamBurgerMenu}>
                  CAMERA{" "}
                </Link>
              </li>
              <li>
                <Link to="/hom4" onClick={this.hamBurgerMenu}>
                  DEBUTS AND FINALE{" "}
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
