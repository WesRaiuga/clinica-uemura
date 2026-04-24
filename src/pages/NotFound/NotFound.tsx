import { Link } from "react-router-dom";
// import notFoundImage from "../../assets/img/page-not-found.svg";

const NotFound = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "flex-start",
      }}
    >
      <h2>Página não encontrada</h2>
      <p>Ops! A página que você tentou acessar não existe.</p>
      {/* <img
        src={notFoundImage}
        alt="Página não encontrada"
        style={{
          height: "250px",
        }}
      /> */}
      <Link to="/">Voltar para a página inicial</Link>
    </section>
  );
};

export default NotFound;
