import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Scissors, Trees, Sparkles, Wrench } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-garden.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Função para scroll suave
  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Lidar com clique no botão "Solicitar Orçamento"
  const handleSolicitarOrcamento = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/contactos");
    setTimeout(() => scrollToTopSmooth(), 100);
  };

  const featuredServices = [
    {
      icon: Scissors,
      title: "Manutenção de Jardins",
      description: "Corte de relva, escarificação e limpeza completa dos seus espaços verdes.",
    },
    {
      icon: Droplets,
      title: "Tratamento de Piscinas",
      description: "Manutenção completa, limpeza e tratamento químico da sua piscina.",
    },
    {
      icon: Trees,
      title: "Poda e Jardinagem",
      description: "Poda profissional de árvores e arbustos, mantendo a saúde das plantas.",
    },
    {
      icon: Leaf,
      title: "Instalação de Relva",
      description: "Colocação de tapetes de relva natural ou artificial com garantia.",
    },
    {
      icon: Sparkles,
      title: "Projetos Paisagísticos",
      description: "Criação e remodelação de espaços verdes personalizados.",
    },
    {
      icon: Wrench,
      title: "Construção de Piscinas",
      description: "Projeto e construção de piscinas com materiais de qualidade.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              JAP Serviços Manutencão <br />
              <span className="text-accent">Piscinas e Jardins</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Especialistas em jardinagem e manutenção de piscinas em Palmela.
              Transformamos o seu espaço exterior num verdadeiro paraíso verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link to="/contactos">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                <Link to="/servicos">Ver Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Os Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços profissionais para cuidar dos seus jardins e piscinas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Transformar o Seu Jardim?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contacto connosco hoje mesmo e solicite um orçamento gratuito.
              Estamos prontos para dar vida ao seu espaço exterior!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 👇 Atualizado: agora faz scroll suave para o topo da página de contactos */}
              <Button
                size="lg"
                variant="secondary"
                onClick={handleSolicitarOrcamento}
                className="text-lg"
              >
                Solicitar Orçamento
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-lg bg-transparent border-white text-white hover:bg-white/20 hover:border-white"
              >
                <a href="tel:962814314">Ligar: 962 814 314</a>
              </Button>   
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Profissionalismo</h3>
              <p className="text-muted-foreground">
                Equipa experiente e qualificada para garantir resultados de excelência
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-muted-foreground">
                Utilizamos produtos e equipamentos de alta qualidade em todos os serviços
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                <Droplets className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicação Total</h3>
              <p className="text-muted-foreground">
                Comprometidos com a satisfação e confiança dos nossos clientes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
