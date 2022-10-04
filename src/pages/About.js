import { Link } from "react-router-dom";

import "./styles/about.css";

export default function About() {
  return (
    <div>
      <header>
        <div className="themes">
          <div
            className="colors"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <span style={{ backgroundColor: "#bf616a" }}></span>
            <span style={{ backgroundColor: "#ebcb8b" }}></span>
            <span style={{ backgroundColor: "#a3be8c" }}></span>
          </div>
          <div className="title" data-aos="fade-left" data-aos-duration="2000">
            <h1>felipe_soares</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> _home</Link>
            </li>

            <li className="selected">
              <Link to="/sobre"> _sobre</Link>
            </li>

            <li>
              <Link to="/projetos"> _projetos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
