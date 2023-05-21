import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import "./header.styles.scss";
import Navigation from "../Navigation/navigation.component";

export default function Header() {
    return (
      <div className="section-header">
        <Navigation />
          <div className="header-text">
            <h1>Hello, my name is Nhu</h1>
            <p className="sub-heading">Junior Front-end Developer</p>
            <div className="icons-box">
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/dao-huyen-nhu-3497841a/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn fontSize="large" className="icon" />
              </a>
              <a
                className="icon-link"
                href="https://github.com/hyezhu"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub fontSize="large" className="icon" />
              </a>
              <a
                className="icon-link"
                href="https://instagram.com/nailsbyzhu"
                rel="noreferrer"
                target="_blank"
              >
                <Instagram fontSize="large" className="icon" />
              </a>
            </div>
          </div>
      </div>
    );
}