import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-garden.jpg";
import gardenService from "@/assets/garden-service.jpg";
import poolService from "@/assets/pool-service.jpg";
import landscaping from "@/assets/landscaping.jpg";

const Gallery = () => {
  const projects = [
    {
      image: heroImage,
      title: "Jardim Residencial Completo",
      category: "Jardinagem",
      description: "Projeto completo com relva, piscina e paisagismo",
    },
    {
      image: gardenService,
      title: "Manutenção de Jardim",
      category: "Manutenção",
      description: "Serviço regular de manutenção e corte de relva",
    },
    {
      image: poolService,
      title: "Piscina Cristalina",
      category: "Piscinas",
      description: "Tratamento e manutenção profissional",
    },
    {
      image: landscaping,
      title: "Projeto Paisagístico",
      category: "Paisagismo",
      description: "Criação de espaço verde com elementos decorativos",
    },
    {
      image: heroImage,
      title: "Espaço Verde Moderno",
      category: "Jardinagem",
      description: "Jardim moderno com design contemporâneo",
    },
    {
      image: gardenService,
      title: "Relva Profissional",
      category: "Instalação",
      description: "Instalação de relva natural em tapete",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Galeria de Projetos</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Veja alguns dos nossos trabalhos realizados e inspire-se para o seu próximo projeto
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Gostou do Que Viu?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contacto connosco para criar o jardim dos seus sonhos ou manter a sua piscina impecável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactos"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Pedir Orçamento Grátis
              </a>
              <a
                href="tel:962814314"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
