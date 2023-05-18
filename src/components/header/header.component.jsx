import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import "./header.styles.scss";

export default function Header() {
    return (
      <div className="section-header">
        <header>
          <h1>Hello, my name is Nhu</h1>
          <p className="sub-heading">Junior Front-end Developer</p>
          <div className="icons-box">
            <a className="icon-link" href="https://www.linkedin.com/in/dao-huyen-nhu-3497841a/">
              <LinkedIn fontSize="large" className="icon"/>
            </a>
            <a className="icon-link" href="https://github.com/hyezhu">
              <GitHub fontSize="large" className="icon"/>
            </a>
            <a className="icon-link" href="https://instagram.com/nailsbyzhu">
              <Instagram fontSize="large" className="icon"/>
            </a>
          </div>
        </header>
      </div>
    );
}