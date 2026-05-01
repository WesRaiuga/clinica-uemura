import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface MenuLinksProps {
  className?: string;
}

const MenuLinks = ({ className }: MenuLinksProps) => {
  return (
    <nav className={`${className ? " " + className : ""}`}>
      <Link to="/" state={{ scrollTo: "about-us" }}>
        Sobre Nós
      </Link>

      <Link to="/" state={{ scrollTo: "services" }}>
        Serviços
      </Link>

      <Link to="/" state={{ scrollTo: "contact" }}>
        Contato
      </Link>

      <Link to="/" state={{ scrollTo: "questions" }}>
        Dúvidas
      </Link>

      <Button >Agendar Consulta</Button>
    </nav>
  );
};

export default MenuLinks;
