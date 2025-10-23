import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a success message
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contacto consigo brevemente.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "962 814 314",
      link: "tel:962814314",
    },
    {
      icon: MapPin,
      title: "Morada",
      content: "Centro Comercial Santiago, R. Lúcio Borges da Costa, Loja 12, 2950-255 Palmela",
      // Usar um link real do Google Maps para a morada
      link: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Santiago,+R.+L%C3%BAcio+Borges+da+Costa,+Loja+12,+2950-255+Palmela",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 08:00 – 20:00\nSábado e Domingo: Encerrado",
      link: null,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contactos</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Entre em contacto connosco. Estamos prontos para o ajudar!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-10">
            {contactInfo.map((info, index) => (
              // MODIFICAÇÃO: Envolver o Cartão com a tag <a>
              // Usamos 'group' para poder estilizar o conteúdo interno no hover
              <a 
                key={index} 
                href={info.link || "#"}
                target={info.title === "Morada" ? "_blank" : undefined}
                rel={info.title === "Morada" ? "noopener noreferrer" : undefined} 
                // Classes de estilo neutro para evitar a alteração de cor/sublinhado do link, exceto no hover do cartão
                className={`block h-full no-underline text-inherit ${info.link ? 'cursor-pointer group' : 'cursor-default'}`} 
              >
                <Card className="h-full hover:shadow-lg transition-shadow animate-fade-in">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {/* O texto permanece com o estilo original, mesmo sendo um link */}
                    <p className="text-muted-foreground whitespace-pre-line group-hover:text-primary transition-colors">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </a>
              // FIM DA MODIFICAÇÃO
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="912 345 678"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Conte-nos sobre o seu projeto..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Como Chegar</h2>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    // ATENÇÃO: Usei um link de incorporação funcional para esta morada
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.1539660370428!2d-8.91977933973575!3d38.65345688583648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330206132473%3A0x86b02660a9206b0d!2sCentro%20Comercial%20Santiago!5e0!3m2!1spt-PT!2spt!4v1700685600000!5m2!1spt-PT!2spt"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização JAP Jardins com Vida"
                  />
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Outras Formas de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Ligar Agora</p>
                        <a href="tel:962814314" className="text-sm text-muted-foreground hover:text-primary">
                          962 814 314
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10">
                        <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a
                          href="https://wa.me/351962814314"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          Enviar mensagem
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;