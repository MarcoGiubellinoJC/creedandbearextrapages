import React, { useState } from "react";

//Components
import { navbarPaths } from "../../../Data/routes";

// Libraries
import { useLocation, Link } from "react-router-dom";

// Icons
import CreedLogo from "../../../Assets/logos/CreedLogo.svg";
import EnglandFlag from "../../../Assets/icons/EnglandFlag.svg";

// Utils
import classNames from "../../../Utils/classNames";

// Styles
import Style from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <header className={Style.header}>
      <div className={Style.mainContainer}>
        <div className={Style.content}>
          {/* Logo */}
          <Link to="/" className={Style.navBarLogo}>
            {/* <img alt="logo" src={CreedLogo} /> */}
            <div
              className={Style.logo}
              style={{
                backgroundImage: `url(${CreedLogo})`,
              }}
            ></div>
          </Link>
          {/* NavbarMenu Desktop  */}
          <div className={Style.navLinksWrapper}>
            <NavbarMenu navbarPaths={navbarPaths} location={location} />
          </div>

          <div className={Style.languageWrapper}>
            <div className={Style.language}>
              <div
                className={Style.flag}
                style={{
                  backgroundImage: `url(${EnglandFlag})`,
                }}
              ></div>
              EN
            </div>
            {/* NavbarMenu Mobile */}
            <div className={Style.navBarIcon}>
              <div
                className={classNames(
                  Style.navBarIconMobile,
                  open ? Style.active : Style.notActive
                )}
                onClick={() => {
                  setOpen(!open);
                  if (!open) {
                    document.body.classList.add(Style.bodyScrollDisabled);
                  } else {
                    document.body.classList.remove(Style.bodyScrollDisabled);
                  }
                }}
              >
                <span className={Style.iconPartOne}></span>
                <span className={Style.iconPartTwo}></span>
                <span className={Style.iconPartThree}></span>
                <span className={Style.iconPartFour}></span>
              </div>
            </div>
          </div>

          <MobileMenu
            navbarPaths={navbarPaths}
            location={location}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </header>
  );
};
const NavbarMenu = ({ navbarPaths, location }) => {
  return (
    <nav>
      <ul className={Style.navBarMenu}>
        {navbarPaths.map((item, index) => {
          return (
            <li key={index} className={Style.navBarMenuItem}>
              <Link
                className={classNames(
                  Style.navBarMenuLink,
                  location.pathname === item.path && Style.navBarMenuLinkActive
                )}
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
const MobileMenu = ({ navbarPaths, location, open, setOpen }) => {
  return (
    <div className={classNames(Style.mobileMenu, open && Style.mobileMenuOpen)}>
      <nav>
        <ul className={Style.navBarMenuMobile}>
          {navbarPaths.map((item, index) => {
            return (
              <li
                key={index}
                className={classNames(
                  location.pathname === item.path
                    ? Style.navBarMenuItemActive
                    : Style.navBarMenuItem
                )}
              >
                <Link
                  className={classNames(
                    Style.navBarMenuLink,
                    location.pathname === item.path &&
                      Style.navBarMenuLinkActive
                  )}
                  onClick={() => {
                    setOpen(false);
                    document.body.classList.remove(Style.bodyScrollDisabled);
                  }}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
