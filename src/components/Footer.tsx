import { Link, useNavigate } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react"; 
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  // Função para rolar suavemente até ao topo
  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Função genérica para navegar e fazer scroll
  const handleNavigation = (path: string) => {
    navigate(path);
    // Um pequeno timeout garante que a mudança de rota começou antes do scroll
    setTimeout(() => {
      scrollToTopSmooth();
    }, 100);
  };

  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={() => handleNavigation("/")} 
                className="flex items-center gap-2 outline-none"
              >
                <img
                  src={logo}
                  alt="JAP Serviços Manutencão Piscinas e Jardins"
                  className="h-14 w-auto object-contain cursor-pointer"
                />
              </button>
            </div>
            <p className="text-muted-foreground mb-4">
              Empresa especializada em serviços de jardinagem e manutenção de piscinas em Palmela.
              Profissionalismo, qualidade e dedicação aos seus espaços verdes.
            </p>
          </div>

          {/* Quick Links - ATUALIZADOS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation("/")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/servicos")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/galeria")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/sobre")} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Sobre Nós
                </button>
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
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:jap.jardinscomvida@hotmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  jap.jardinscomvida@hotmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com"
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
          <p>© {new Date().getFullYear()} JAP Serviços Manutencão Piscinas e Jardins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;