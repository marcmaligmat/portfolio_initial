import { useContext, useState } from "react";
import { WatsonContext } from "../context/Context";
import useClickOutside from "../useClickOutside";

const menus = [
  { id: 1, icon: "lnr lnr-home", name: "Home", href: "home" },
  { id: 2, icon: "lnr lnr-user", name: "About Me", href: "about" },
  { id: 3, icon: "lnr lnr-license", name: "Resume", href: "resume" },
  { id: 4, icon: "lnr lnr-briefcase", name: "Portfolio", href: "portfolio" },
  { id: 5, icon: "lnr lnr-book", name: "Blog", href: "blog" },
  { id: 6, icon: "lnr lnr-envelope", name: "Contact", href: "contact" },
];

const Sidebar = () => {
  const { changeSection, section } = useContext(WatsonContext);
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <header>
      <div className={`header-content ${toggle ? "on" : ""}`}>
        {/*Mobile Header*/}
        <div className="header-mobile">
          <a className="header-toggle" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars" />
          </a>
          <h2>Marc Maligmat</h2>
        </div>
        {/*Main Header*/}
        <div className="header-main" data-simplebar="" ref={domNode}>
          <div className="image-container">
            <h2 className="header-name">Marc Maligmat</h2>
            <img src="img/profile-img.jpg" alt="profile-pic" />
          </div>
          {/*Nav Menus*/}
          <nav className="nav-menu">
            <ul>
              {menus.map((menu, i) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => changeSection(menu.href)}
                    className={`pt-link ${
                      menu.href === section ? "active" : ""
                    }`}
                  >
                    <span className="nav-menu-icon">
                      <i className={menu.icon} />
                    </span>
                    {menu.name}{" "}
                  </a>{" "}
                </li>
              ))}
            </ul>
          </nav>
          {/*Nav Footer*/}
          <div className="nav-footer">
            {/*Social Links*/}
            <ul className="social">
              <li>
                <a href="#">
                  <i className="fab fa-twitter-square" target="_blank" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/miks-m-2a3b5816b/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/marcmaligmat" target="_blank">
                  <i className="fab fa-github-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://join.skype.com/invite/ldM0ohArYalU"
                  target="_blank"
                >
                  <i className="fab fa-skype" />
                </a>
              </li>
            </ul>
            {/*Copyright Text*/}
            <div className="copy">
              <p>
                2023 © Stellarleads.io
                <br />
                All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Sidebar;
