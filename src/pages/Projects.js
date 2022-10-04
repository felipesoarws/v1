import { Link } from "react-router-dom";
import { useEffect } from "react";

import Project from "../components/Project";

import "./styles/projects.scss";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// images
import timetracking_screen from "./assets/timetracking_screen.png";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

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

            <li>
              <Link to="/sobre"> _sobre</Link>
            </li>

            <li className="selected">
              <Link to="/projetos"> _projetos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div class="content">
          <div class="title" data-aos="fade-right" data-aos-duration="2000">
            <h1>⌠⌠ Meus projetos favoritos</h1>
          </div>
        </div>
        <div class="projects">
          {/* <div class="project" data-aos="fade-up" data-aos-duration="1500">
            <div class="title">
              <h2>Desafio | Timetracking</h2>
            </div>
            <div class="bg">
              <img src={timetracking_screen} alt="demonstração imagem" />
              <div class="live">
                <a
                  target="_blank"
                  href="https://time-tracking-dashboard-main-omega.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div> */}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />{" "}
          <Project
            title={""}
            image={timetracking_screen}
            url={""}
            data_duration={1500}
          />
          {/* <div class="project" data-aos="fade-up" data-aos-duration="1700">
            <div class="title">
              <h2>Jogo da Velha</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/tictactoe_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://tic-tac-toe-bice-five.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="1900">
            <div class="title">
              <h2>Clone | SpaceX</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/spacex_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://spacex-clone-fs.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="2100">
            <div class="title">
              <h2>Hackathon | Webtivo</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/webtivo_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://webtivo.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="2300">
            <div class="title">
              <h2>Clone | Disney+</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/disneyplus_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://disney-plus-clone-wine.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="2500">
            <div class="title">
              <h2>Desafio | Calculadora</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/calc_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://calculator-app-main-seven.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="2700">
            <div class="title">
              <h2>Desafio | Lista de tarefas</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/todoapp_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://to-do-app-blue.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div>
          <div class="project" data-aos="fade-up" data-aos-duration="2900">
            <div class="title">
              <h2>Landing Page | God of War</h2>
            </div>
            <div class="bg">
              <img
                src="../projetos/images/gow_screen.png"
                alt="demonstração imagem"
              />
              <div class="live">
                <a
                  target="_blank"
                  href="https://god-of-war-ragnarok-landing-page.vercel.app/"
                  rel="noreferrer"
                >
                  veja o projeto
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <footer>
        <div class="contact">
          <div class="f-line">
            <p>Contate-me em:</p>
            <div class="sms">
              <a
                href="https://github.com/felipesoarws"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/felipesoarws/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-soares-aa7ba3200/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="s-line">
            <p>ou em </p>
            <span>felipesoarwz@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
