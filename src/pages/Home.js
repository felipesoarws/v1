import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/home.scss";

// images
import notebook_screen from "./assets/notebook.png";

export default function Home() {
  const submitRef = useRef();

  useEffect(() => {
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
      <main>
        <div className="content">
          <div className="texts" data-aos="fade-up" data-aos-duration="2000">
            <span> Olá! Eu sou </span>
            <h1>
              Felipe <span className="name">Soares</span>
            </h1>
            <p>
              Estudante de programação <span className="color">front-end</span>
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
      <footer></footer>
    </div>
  );
}
