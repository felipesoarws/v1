import "../pages/styles/projects.scss";

export default function About({ title, image, url, data_duration }) {
  return (
    <div
      className="project"
      data-aos="fade-up"
      data-aos-duration={data_duration}
    >
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="bg">
        <img src={image} alt="demonstração imagem"></img>
        <div className="live">
          <a target="_blank" href={url} rel="noreferrer">
            veja o projeto
          </a>
        </div>
      </div>
    </div>
  );
}
