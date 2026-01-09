import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o scroll para o topo (0,0) instantaneamente sempre que o caminho muda
    window.scrollTo(0, 0);
    
    // Backup para garantir em dispositivos mobile ou renders mais lentos
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;