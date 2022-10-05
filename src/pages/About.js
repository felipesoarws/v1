import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import "./styles/about.scss";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    document.title = "Sobre | @felipesoarws";

    AOS.init();
  }, []);

  // conteudos dos arquivos

  const bioDescRef = useRef();
  const interestsDescRef = useRef();
  const educationDescRef = useRef();
  const DescsRefs = useRef();

  const filesFolder = (e) => {
    // conteudo do clique nas pastas
    const fileValue = e.target.textContent;

    const bioDesc = bioDescRef.current;
    const interestsDesc = interestsDescRef.current;
    const educationDesc = educationDescRef.current;

    checkFile(fileValue, bioDesc, interestsDesc, educationDesc);
  };

  const checkFile = (fileValue, bio, interests, education) => {
    if (fileValue === "bio") {
      viewFileSelected(bio);
    } else if (fileValue === "interesses") {
      viewFileSelected(interests);
    } else if (fileValue === "educação") {
      viewFileSelected(education);
    } else {
      return;
    }
  };

  const viewFileSelected = (file) => {
    resetFiles();
    openFile(file);
  };

  const resetFiles = () => {
    const Descs = DescsRefs.current.querySelectorAll(".file");

    Descs.forEach((desc) => {
      closeFile(desc);
    });
  };
  const openFile = (file) => {
    file.classList.remove("closed");
  };

  const closeFile = (file) => {
    file.classList.add("closed");
  };

  return (
    <div>
      <header className="style-about">
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
      <main className="style-about">
        <div className="interests-mobile">
          <div className="lines">
            <div className="line bio">
              <div className="about_me">
                <div className="tag-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <span className="open_tab">sobre mim</span>
                </div>
              </div>
            </div>

            <div className="folder me">
              <div
                className="bio"
                data-aos="fade-right"
                data-aos-duration="2800"
              >
                <div className="folder_n_name bio">
                  <i className="fa-solid fa-folder-closed "></i>
                  <span className="open_folder" onClick={filesFolder}>
                    bio
                  </span>
                </div>
              </div>
              <div
                className="interests"
                data-aos="fade-right"
                data-aos-duration="2400"
              >
                <div className="folder_n_name interests">
                  <i className="fa-solid fa-folder-closed "></i>
                  <span className="open_folder" onClick={filesFolder}>
                    interesses
                  </span>
                </div>
              </div>
              <div
                className="education"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="folder_n_name education">
                  <i className="fa-solid fa-folder-closed "></i>
                  <span className="open_folder" onClick={filesFolder}>
                    educação
                  </span>
                </div>
              </div>
            </div>

            <div className="line hobbies">
              <div className="hobbies">
                <div className="tag-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <span className="open_tab">hobbies</span>
                </div>
              </div>
            </div>

            <div className="folder hobbies ">
              <div className="music">
                <div className="folder_n_name">
                  <i className="fa-solid fa-headphones"></i>
                  <span className="open_folder">ouvir_musica.mp3</span>
                </div>
              </div>
              <div className="series">
                <div className="folder_n_name">
                  <i className="fa-solid fa-tv"></i>
                  <span className="open_folder">
                    assistir_filmes_e_séries.mp4
                  </span>
                </div>
              </div>
              <div className="soccer">
                <div className="folder_n_name">
                  <i className="fa-solid fa-futbol"></i>
                  <span className="open_folder">jogar_futebol.exe</span>
                </div>
              </div>
              <div className="coding">
                <div className="folder_n_name">
                  <i className="fa-solid fa-laptop-code"></i>
                  <span className="open_folder">programar.js</span>
                </div>
              </div>
              <div className="games">
                <div className="folder_n_name">
                  <i className="fa-solid fa-keyboard"></i>
                  <span className="open_folder">jogar_games.exe</span>
                </div>
              </div>
            </div>
            <div className="line stacks">
              <div className="stacks">
                <div className="tag-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <span className="open_tab">conhecimentos</span>
                </div>
              </div>
            </div>

            <div className="folder stacks ">
              <div className="js">
                <div className="folder_n_name">
                  <i className="fa-brands fa-js"></i>
                  <span className="open_folder">javascript</span>
                </div>
              </div>
              <div className="html">
                <div className="folder_n_name">
                  <i className="fa-brands fa-html5"></i>

                  <span className="open_folder">html</span>
                </div>
              </div>
              <div className="css">
                <div className="folder_n_name">
                  <i className="fa-brands fa-css3-alt"></i>

                  <span className="open_folder">css3</span>
                </div>
              </div>
              <div className="sass">
                <div className="folder_n_name">
                  <i className="fa-brands fa-sass"></i>
                  <span className="open_folder">sass</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contents" ref={DescsRefs}>
          <div
            className="about-me"
            data-aos="fade-right"
            data-aos-duration="2800"
          >
            <div className="file bio" ref={bioDescRef}>
              <div className="title">
                <h3>
                  &nbsp;// sobre mim <span className="section"> / bio</span>
                </h3>
              </div>
              <div className="content">
                <p>
                  Olá! Me chamo Felipe, nasci em São Paulo/SP, tenho 20 anos e
                  estudo programação desde junho de 2021.
                </p>

                <p>
                  Eu comecei na programação quando eu estava navegando pela
                  internet certo dia, e conheci um site chamado&nbsp;
                  <a
                    target="_blank"
                    className="grasshopper"
                    href="https://grasshopper.app/"
                    rel="noreferrer"
                  >
                    grasshopper
                  </a>
                  , onde é ensinado programação para iniciantes.
                </p>

                <p>
                  Mesmo eu não sabendo de absolutamente nada, eu decidi dar uma
                  olhada porque eu tinha achado interessante.
                </p>

                <p>
                  A partir daí, fui recomendado a fazer outros cursos mais
                  introdutórios para pegar o básico e ter mais noção em lógica
                  de progamação, HTML, CSS e etc. A partir daí, sigo estudando
                  até os dias de hoje. &#128516;
                </p>
              </div>
            </div>
            <div
              className="file interests closed"
              data-aos="fade-right"
              data-aos-duration="2800"
              ref={interestsDescRef}
            >
              <div className="title">
                <h3>
                  &nbsp;// sobre mim{" "}
                  <span className="section"> / interesses</span>
                </h3>
              </div>
              <div className="content">
                <p>
                  Dentro das stacks que foram citadas acima e que eu ja tenho um
                  certo conhecimento, segue abaixo outras que eu pretendo me
                  aprofundar mais para elevar meu conhecimento durante essa
                  jornada!
                </p>
                <div className="stacks">
                  <i
                    style={{ color: "#f6d839" }}
                    className="fa-brands fa-js"
                  ></i>
                  <i
                    style={{ color: "#23DDFF" }}
                    className="fa-brands fa-react"
                  ></i>
                  <i
                    style={{ color: "#85BE47" }}
                    className="fa-brands fa-node"
                  ></i>
                  <i
                    style={{ color: "#3E2E00" }}
                    className="fa-brands fa-git"
                  ></i>
                </div>
              </div>
            </div>
            <div
              className="file education closed"
              data-aos="fade-right"
              data-aos-duration="2800"
              ref={educationDescRef}
            >
              <div className="title">
                <h3>
                  &nbsp;// sobre mim{" "}
                  <span className="section"> / educação</span>
                </h3>
              </div>
              <div className="content">
                <p>
                  Atualmente estou cursando Análise e Desenvolvimento de
                  Sistemas na UNIP, onde comecei em janeiro/2022 e com previsão
                  de término em dezembro/2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="style-about">
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
