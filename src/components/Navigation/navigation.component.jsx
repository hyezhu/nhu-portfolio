import "./navigation.styles.scss";

export default function Navigation() {
  return (
    <div className="nav-bar">
      <a className="nav-link" href="#about-me">
        About Me
      </a>
      <a className="nav-link" href="#portfolio">
        Portfolio
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </div>
  );
}
