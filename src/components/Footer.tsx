import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-primary">JAP Jardins com Vida</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empresa especializada em serviços de jardinagem e manutenção de piscinas em Palmela.
              Profissionalismo, qualidade e dedicação aos seus espaços verdes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contactos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:962814314" className="text-muted-foreground hover:text-primary transition-colors">
                  962 814 314
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Centro+Comercial+Santiago,+R.+Lúcio+Borges+da+Costa,+Loja+12,+2950-255+Palmela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Centro Comercial Santiago<br />
                  R. Lúcio Borges da Costa, Loja 12<br />
                  2950-255 Palmela
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Seg-Sex: 08:00 – 20:00<br />
                  Sáb-Dom: Encerrado
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} JAP Jardins com Vida. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
