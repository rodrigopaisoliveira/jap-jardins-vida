import { Heart, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      title: "Profissionalismo",
      description: "Equipa qualificada e experiente, sempre pronta para superar as suas expectativas.",
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
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Conheça a empresa que cuida dos seus espaços verdes com dedicação e profissionalismo
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-primary">A Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground text-left">
                <p>
                  A <strong className="text-foreground">JAP Jardins com Vida</strong> é uma empresa especializada em serviços de jardinagem
                  e manutenção de piscinas, localizada em Palmela. Nascemos da paixão pela natureza e do desejo de
                  transformar espaços exteriores em verdadeiros oásis de tranquilidade e beleza.
                </p>
                <p>
                  Com anos de experiência no sector, a nossa equipa de profissionais qualificados está preparada para
                  oferecer soluções completas e personalizadas para cada cliente. Desde a manutenção regular de jardins
                  até à construção de piscinas, passando por projetos paisagísticos complexos, fazemos tudo com a mesma
                  dedicação e atenção ao detalhe.
                </p>
                <p>
                  Utilizamos equipamentos modernos e produtos de qualidade certificada, garantindo resultados que
                  superam as expectativas. O nosso compromisso é não apenas cuidar dos seus espaços verdes, mas dar-lhes
                  verdadeira vida e personalidade.
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
                    <h3 className="font-semibold text-lg mb-1">Experiência Comprovada</h3>
                    <p className="text-muted-foreground">
                      Anos de experiência no sector de jardinagem e manutenção de piscinas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Equipa Qualificada</h3>
                    <p className="text-muted-foreground">
                      Profissionais formados e certificados para garantir a qualidade do serviço
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Equipamento Moderno</h3>
                    <p className="text-muted-foreground">
                      Utilizamos as mais recentes ferramentas e tecnologias do sector
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
                      Cada projeto é único e merece atenção e cuidado especiais
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Produtos de Qualidade</h3>
                    <p className="text-muted-foreground">
                      Apenas utilizamos produtos certificados e de marcas reconhecidas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Compromisso Ambiental</h3>
                    <p className="text-muted-foreground">
                      Práticas sustentáveis que respeitam o meio ambiente
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contacto connosco e descubra como podemos transformar o seu espaço exterior
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contactos"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 px-8"
              >
                Pedir Orçamento
              </a>
              <a
                href="tel:962814314"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/30 text-white hover:bg-white/10 h-11 px-8"
              >
                Ligar: 962 814 314
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
