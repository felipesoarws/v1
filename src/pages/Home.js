import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import "./styles/home.scss";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// images
import notebook_screen from "./assets/notebook.png";

export default function Home() {
  const submitRef = useRef();

  useEffect(() => {
    document.title = "Hello World! | @felipesoarws";
    AOS.init();

    const submit = submitRef.current;

    submit.addEventListener("keypress", () => {
      const check = submit.value.toLowerCase();

      if (check === "sobre" || check === "about") {
        window.location.href = "/sobre";
      } else if (check === "projetos" || check === "projects") {
        window.location.href = "/projetos";
      } else {
        return;
      }
    });
  }, []);

  return (
    <div>
      <header className="style-home">
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
            <li className="selected">
              <Link to="/"> _home</Link>
            </li>

            <li>
              <Link to="/sobre"> _sobre</Link>
            </li>

            <li>
              <Link to="/projetos"> _projetos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="style-home">
        <div className="content">
          <div className="texts" data-aos="fade-up" data-aos-duration="2000">
            <span> Olá! Eu sou </span>
            <h1>
              Felipe <span className="name">Soares</span>
            </h1>
            <p>
              <span className="text first-text"> Estudante de programação</span>{" "}
              <span className="text sec-text color">front-end</span>
            </p>
          </div>

          <div className="code" data-aos="fade-up" data-aos-duration="2300">
            <p>⌠⌠ escreva o código abaixo e confirme para continuar:</p>
            <div className="input">
              <span> ⇏ </span>
              <input
                type="text"
                placeholder="sobre || projetos"
                id="submit"
                autoComplete="off"
                ref={submitRef}
              ></input>
            </div>
            <span className="line"></span>
          </div>
        </div>
        <div className="bg" data-aos="fade-up" data-aos-duration="2000">
          <img src={notebook_screen} alt="" />
        </div>
      </main>
      <footer className="style-home">
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
