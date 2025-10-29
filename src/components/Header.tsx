import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // imagem local

// Função auxiliar para rolar suavemente para o topo
const scrollToTopSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Galeria", path: "/galeria" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Contactos", path: "/contactos" },
    { name: "Recrutamento", path: "/curriculos" },
  ];

  // Fecha o menu e faz scroll suave ao clicar num link
  const handleNavLinkClick = () => {
    scrollToTopSmooth();
    setIsMenuOpen(false);
  };

  // Faz scroll suave ao clicar no logo e volta à página principal
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToTopSmooth(), 100);
    } else {
      scrollToTopSmooth();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* LOGO - com scroll suave */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="JAP Jardins com Vida"
            className="h-14 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavLinkClick}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link to="/contactos" onClick={handleNavLinkClick}>
              Pedir Orçamento
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background px-4 py-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavLinkClick}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link to="/contactos" onClick={handleNavLinkClick}>
              Pedir Orçamento
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
