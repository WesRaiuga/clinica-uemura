import { Link } from 'react-router-dom';

import LinkButton from '@/components/LinkButton/LinkButton';
import { cn } from '@/utils/cn';
import { WHATSAPP_LINK } from '@/utils/constants';

interface MenuLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

const MenuLinks = ({ className, onLinkClick }: MenuLinksProps) => {
  return (
    <nav className={cn(className)}>
      <Link to="/" state={{ scrollTo: 'about' }} onClick={onLinkClick}>
        Sobre
      </Link>

      <Link to="/" state={{ scrollTo: 'services' }} onClick={onLinkClick}>
        Serviços
      </Link>

      <Link to="/" state={{ scrollTo: 'contact' }} onClick={onLinkClick}>
        Contato
      </Link>

      <Link to="/" state={{ scrollTo: 'faq' }} onClick={onLinkClick}>
        Dúvidas
      </Link>

      <div>
        <LinkButton href={WHATSAPP_LINK} onClick={onLinkClick}>Agendar Consulta</LinkButton>
      </div>
    </nav>
  );
};

export default MenuLinks;
