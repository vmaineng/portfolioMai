import { useEffect, useState } from "react";
import githubIcon from "../assets/nav/github.png";
import linkedinIcon from "../assets/nav/linkedIn.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/nav/fav1.png";
import toggle_light from "../assets/nav/day.png";
import toggle_dark from "../assets/nav/night.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" id="logoBanner" />
          <span className="name"> Mai Vang - SWE </span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mai-vang-software-engineer/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/vmaineng"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="Github" />
              </a>
              <img
                onClick={() => {toggle_mode()}}
                src={theme === "light" ? toggle_light : toggle_dark}
                alt="brightness"
                className="toggle-icon"
              />
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
