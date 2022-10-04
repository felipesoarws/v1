import "../pages/styles/projects.scss";

export default function About({ title, image, url, data_duration }) {
  return (
    <div class="project" data-aos="fade-up" data-aos-duration={data_duration}>
      <div class="title">
        <h2>{title}</h2>
      </div>
      <div class="bg">
        <img src={image} alt="demonstração imagem" />
        <div class="live">
          <a target="_blank" href={url} rel="noreferrer">
            veja o projeto
          </a>
        </div>
      </div>
    </div>
  );
}
