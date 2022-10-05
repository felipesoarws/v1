import { Link } from "react-router-dom";
import { useEffect } from "react";

import Project from "../components/Project";

import "./styles/projects.scss";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// images
import timetracking_screen from "./assets/timetracking_screen.png";
import tictactoe_screen from "./assets/tictactoe_screen.png";
import spacex_screen from "./assets/spacex_screen.png";
import webtivo_screen from "./assets/webtivo_screen.png";
import todoapp_screen from "./assets/todoapp_screen.png";
import gow_screen from "./assets/gow_screen.png";
import disneyplus_screen from "./assets/disneyplus_screen.png";
import calc_screen from "./assets/calc_screen.png";

export default function About() {
  document.title = "Projetos | @felipesoarws";
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <header className="style-projects">
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

            <li>
              <Link to="/sobre"> _sobre</Link>
            </li>

            <li className="selected">
              <Link to="/projetos"> _projetos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="style-projects">
        <div className="content">
          <div className="title" data-aos="fade-right" data-aos-duration="2000">
            <h1>⌠⌠ Meus projetos favoritos</h1>
          </div>
        </div>
        <div className="projects">
          <Project
            title={"Desafio | Timetracking"}
            image={timetracking_screen}
            url={"https://time-tracking-dashboard-main-omega.vercel.app/"}
            data_duration={1500}
          />

          <Project
            title={"Jogo da Velha"}
            image={tictactoe_screen}
            url={"https://tic-tac-toe-bice-five.vercel.app/"}
            data_duration={1700}
          />

          <Project
            title={"Clone | SpaceX"}
            image={spacex_screen}
            url={"https://spacex-clone-fs.vercel.app/"}
            data_duration={1900}
          />

          <Project
            title={"Hackathon | Webtivo"}
            image={webtivo_screen}
            url={"https://webtivo.vercel.app/"}
            data_duration={2100}
          />

          <Project
            title={"Clone | Disney+"}
            image={disneyplus_screen}
            url={"https://disney-plus-clone-wine.vercel.app/"}
            data_duration={2300}
          />

          <Project
            title={"Desafio | Calculadora"}
            image={calc_screen}
            url={"https://calculator-app-main-seven.vercel.app/"}
            data_duration={2500}
          />

          <Project
            title={"Desafio | Lista de tarefas"}
            image={todoapp_screen}
            url={"https://to-do-app-blue.vercel.app/"}
            data_duration={2700}
          />

          <Project
            title={"Landing Page | God of War"}
            image={gow_screen}
            url={"https://god-of-war-ragnarok-landing-page.vercel.app/"}
            data_duration={2900}
          />
        </div>
      </main>
      <footer className="style-projects">
        <div className="contact">
          <div className="f-line">
            <p>Contate-me em:</p>
            <div className="sms">
              <a
                href="https://github.com/felipesoarws"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/felipesoarws/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-soares-aa7ba3200/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="s-line">
            <p>ou em </p>
            <span>felipesoarwz@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
