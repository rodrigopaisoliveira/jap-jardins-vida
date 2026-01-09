import { Heart, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom"; // Importação necessária para o roteamento// Certifica-te de ter esta importação no topo
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
  };
const About = () => {
  const values = [
  {
      icon: Heart,
      title: "Paixão pelo Verde",
      description: "Amamos o que fazemos e isso reflete-se na qualidade de cada projeto que realizamos.",
    },
    {
      icon: Target,
      title: "Compromisso com a Qualidade",
      description: "Utilizamos apenas produtos e equipamentos de alta qualidade para garantir os melhores resultados.",
    },
    {
      icon: Award,
      title: "+30 Anos de Experiência",
      description: "Três décadas de conhecimento técnico e dedicação constante a cuidar dos seus espaços.",
    },
    {
      icon: Users,
      title: "Satisfação do Cliente",
      description: "A sua satisfação é a nossa prioridade. Trabalhamos para criar relações de confiança duradouras.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2 animate-slide-up tracking-tight">
            Sobre Nós
          </h1>
          
          <div className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
            {/* Alterado para text-base (mobile) e text-lg (desktop) */}
            <span className="text-base md:text-lg font-semibold tracking-wide">
              +<Counter end={30} /> Anos de Experiência
            </span>
          </div>

          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-slide-up leading-relaxed">
            Especialistas em transformar e cuidar dos seus espaços verdes com a experiência de três décadas.
          </p>
        </div>

        {/* Elemento visual decorativo de fundo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-primary">A Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground text-left">
              <p>
                A <strong className="text-primary">JAP Serviços Manutenção Piscinas e Jardins</strong> é uma empresa com uma sólida trajetória de <strong className="text-primary">mais de 30 anos</strong>, especializada em serviços de jardinagem e manutenção de piscinas em Palmela. Nascemos da paixão pela natureza e do desejo de transformar espaços exteriores em verdadeiros oásis de tranquilidade e beleza.
              </p>
              <p>
                Com o conhecimento acumulado no mercado, a nossa <strong className="text-primary">equipa de profissionais qualificados</strong> está preparada para oferecer soluções completas e personalizadas. Desde a manutenção regular até projetos complexos, aplicamos o saber de quem conhece o setor com total dedicação.
              </p>
              <p>
                Utilizamos equipamentos modernos e produtos de <strong className="text-primary">qualidade certificada</strong>, garantindo resultados que superam as expectativas. O nosso compromisso é não apenas cuidar dos seus espaços verdes, mas dar-lhes verdadeira <strong className="text-primary">vida, longevidade e personalidade</strong>.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam o nosso trabalho e definem quem somos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Why Choose Us */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">Porquê Escolher-nos?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">+30 Anos de Experiência</h3>
              <p className="text-muted-foreground">
                Três décadas de excelência e conhecimento profundo no sector de jardinagem e piscinas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Equipa Qualificada</h3>
              <p className="text-muted-foreground">
                Profissionais formados e certificados para garantir a qualidade do serviço.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Equipamento Moderno</h3>
              <p className="text-muted-foreground">
                Utilizamos as mais recentes ferramentas e tecnologias do sector.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">
                Cada projeto é único e merece atenção e cuidado especiais.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Produtos de Qualidade</h3>
              <p className="text-muted-foreground">
                Apenas utilizamos produtos certificados e de marcas reconhecidas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Compromisso Ambiental</h3>
              <p className="text-muted-foreground">
                Práticas sustentáveis que respeitam o meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
      <p className="text-xl mb-8 opacity-90">
        Entre em contacto connosco e descubra como podemos transformar o seu espaço exterior
      </p>
      
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
  {/* Botão Solicitar Orçamento */}
  <Link
    to="/contactos" 
    onClick={() => window.scrollTo(0, 0)}
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 hover:scale-105 active:scale-95 h-11 px-8 w-full md:w-auto group shadow-md"
  >
    Solicitar Orçamento
    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
  </Link>
  
  {/* Botão Ligar */}
  <a
    href="tel:962814314"
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 hover:scale-105 active:scale-95 h-11 px-8 w-full md:w-auto shadow-md"
  >
    Ligar: 962 814 314
  </a>

  {/* Botão Email */}
  <a
    href="mailto:jap.jardinscomvida@hotmail.com"
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 hover:scale-105 active:scale-95 h-11 px-8 w-full md:w-auto shadow-md"
  >
    jap.jardinscomvida@hotmail.com
  </a>
</div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
