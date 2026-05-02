import { Link } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";
import { WHATSAPP_LINK } from "../../utils/constants";

interface MenuLinksProps {
  className?: string;
}

const MenuLinks = ({ className }: MenuLinksProps) => {
  return (
    <nav className={`${className ? " " + className : ""}`}>
      <Link to="/" state={{ scrollTo: "about" }}>
        Sobre
      </Link>

      <Link to="/" state={{ scrollTo: "services" }}>
        Serviços
      </Link>

      <Link to="/" state={{ scrollTo: "contact" }}>
        Contato
      </Link>

      <Link to="/" state={{ scrollTo: "faq" }}>
        Dúvidas
      </Link>

      <div>
        <LinkButton href={WHATSAPP_LINK}>
          Agendar Consulta
        </LinkButton>
      </div>
    </nav>
  );
};

export default MenuLinks;
