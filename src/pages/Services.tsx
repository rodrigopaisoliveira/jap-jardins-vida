import { Scissors, Leaf, Trees, Sprout, Droplets, Flower, Wrench, Waves, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const gardenServices = [
    {
      icon: Scissors,
      title: "Manutenção de Jardins",
      description: "Serviço completo de manutenção regular do seu jardim, incluindo corte, limpeza e cuidados gerais.",
    },
    {
      icon: Leaf,
      title: "Limpeza de Terrenos",
      description: "Limpeza profissional de terrenos e espaços exteriores, remoção de vegetação indesejada.",
    },
    {
      icon: Scissors,
      title: "Corte e Escarificação de Relvados",
      description: "Corte profissional e escarificação para manter o seu relvado saudável e viçoso.",
    },
    {
      icon: Sprout,
      title: "Colocação de Tapetes de Relva",
      description: "Instalação profissional de relva natural em tapete com garantia de qualidade.",
    },
    {
      icon: Leaf,
      title: "Instalação de Relva Artificial",
      description: "Aplicação de relva artificial de alta qualidade, baixa manutenção e aspeto natural.",
    },
    {
      icon: Droplets,
      title: "Instalação de Sistemas de Rega",
      description: "Projeto e instalação de sistemas de rega automática eficientes e económicos.",
    },
    {
      icon: Trees,
      title: "Poda de Árvores e Arbustos",
      description: "Poda técnica e estética de árvores e arbustos, respeitando a saúde das plantas.",
    },
    {
      icon: Flower,
      title: "Aplicação de Produtos Fitofarmacêuticos",
      description: "Tratamento profissional com produtos certificados para proteger as suas plantas.",
    },
    {
      icon: Sparkles,
      title: "Projetos e Remodelação de Espaços Verdes",
      description: "Criação de projetos paisagísticos personalizados e remodelação de jardins existentes.",
    },
  ];

  const poolServices = [
    {
      icon: Waves,
      title: "Construção de Piscinas",
      description: "Projeto e construção de piscinas personalizadas com materiais de qualidade premium.",
    },
    {
      icon: Droplets,
      title: "Tratamento e Manutenção de Piscinas",
      description: "Manutenção regular, limpeza completa e tratamento químico da água da piscina.",
    },
    {
      icon: Wrench,
      title: "Reparação de Sistemas de Filtração",
      description: "Reparação e manutenção de bombas, filtros e sistemas de circulação de água.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Os Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Oferecemos uma gama completa de serviços profissionais de jardinagem e manutenção de piscinas,
            adaptados às suas necessidades específicas.
          </p>
        </div>
      </section>

      {/* Garden Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Jardinagem e Espaços Verdes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serviços completos para manter o seu jardim sempre bonito e saudável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gardenServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pool Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-accent">Piscinas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Construção, tratamento e manutenção profissional de piscinas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poolServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Precisa de um Serviço Personalizado?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contacte-nos para discutir as suas necessidades específicas e receber um orçamento à medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:962814314"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Ligar: 962 814 314
              </a>
              <a
                href="/contactos"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Pedir Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
