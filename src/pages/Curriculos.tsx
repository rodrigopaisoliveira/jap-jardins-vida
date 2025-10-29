import { useState } from "react";
import { FileText, Mail, Phone, ShieldCheck, Send, Briefcase, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
  consent: boolean;
};

const Curriculos = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    consent: false,
  });

  const reset = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
      consent: false,
    });

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  function openMailSafely(mailtoLink: string, onFail?: () => void) {
    try {
      window.location.href = mailtoLink;
      const a = document.createElement("a");
      a.href = mailtoLink;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => onFail?.(), 1200);
    } catch {
      onFail?.();
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description:
          "Para submeter os seus dados, confirme o tratamento de dados pessoais.",
        variant: "destructive",
      });
      return;
    }

    const destinatario = "info@japjardins.pt"; // <-- substitui se necessário
    const assunto = encodeURIComponent("Candidatura - JAP Jardins com Vida");
    const corpo = encodeURIComponent(
      `Olá JAP Jardins com Vida,

O meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone || "não indicado"}

Função/Área a que me candidato: ${formData.role || "não especificada"}

Mensagem:
${formData.message || "—"}

⚠️ Aqui anexo o meu CV (e carta de apresentação, se aplicável) no seguimento deste e-mail.

Com os melhores cumprimentos,
${formData.name}`
    );

    const mailtoLink = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    toast({
      title: "A preparar e-mail…",
      description:
        "Será aberto o seu cliente de e-mail. Anexe o seu CV antes de enviar.",
    });

    openMailSafely(mailtoLink, () => {
      toast({
        title: "Não abriu o cliente de e-mail?",
        description:
          "Verifique as definições do seu navegador ou copie o endereço info@japjardins.pt.",
        variant: "destructive",
      });
    });

    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Venha trabalhar connosco!</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Junte-se à equipa da JAP Jardins com Vida. Envie o seu currículo e conte-nos porque gostaria de trabalhar connosco.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-10">
            <Card className="h-full hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Funções</h3>
                <p className="text-muted-foreground">
                  Manutenção de jardins, construção de espaços verdes, sistemas de rega e muito mais.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Dúvidas?</h3>
                <p className="text-muted-foreground">
                  Fale connosco: <a href="tel:962814314" className="hover:text-primary">962 814 314</a>
                </p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Dados Pessoais</h3>
                <p className="text-muted-foreground">
                  Tratamos os seus dados com segurança e apenas para efeitos de recrutamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Submeter Candidatura</h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário — será aberto um e-mail já preparado para a JAP Jardins com Vida.
                <br />
                <span className="font-medium">Lembre-se de anexar o seu CV</span> (e carta de apresentação, se aplicável) antes de enviar.
              </p>

              {/* Aviso de anexos */}
              <Card className="mb-6 border-primary/30">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="mt-1">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Anexos no e-mail</p>
                    <p className="text-sm text-muted-foreground">
                      Por proteção de dados, o envio é feito diretamente por e-mail.
                      Quando submeter o formulário, será automaticamente aberto um e-mail preparado
                      para a JAP Jardins com Vida — basta anexar o seu <strong>CV</strong> e, se desejar, a sua
                      <strong> carta de apresentação</strong>.                    </p>
                  </div>
                </CardContent>
              </Card>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChangeText}
                    required
                    placeholder="O seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={onChangeText}
                        required
                        placeholder="seu@email.com"
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={onChangeText}
                        placeholder="912 345 678"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Área/Função a que se candidata
                  </label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={onChangeText}
                    placeholder="Ex.: Jardineiro, Encarregado de Obra, Técnico de Rega…"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChangeText}
                    rows={6}
                    placeholder="Fale-nos da sua experiência, disponibilidade, etc."
                  />
                </div>

                {/* Consentimento */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    checked={formData.consent}
                    onChange={onChangeConsent}
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    Autorizo o tratamento dos meus dados pessoais para efeitos de recrutamento,
                    nos termos da Política de Privacidade.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Candidatura
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Bloco lateral com “Dicas”/Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Dicas para uma boa candidatura</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Prepare o CV em PDF (ideal).</li>
                    <li>Resuma a experiência mais relevante para a função.</li>
                    <li>Indique disponibilidade e certificações (ex.: condução de máquinas, fitofármacos).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Também pode contactar-nos</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Email: <a className="hover:text-primary" href="mailto:info@japjardins.pt">info@japjardins.pt</a>
                    </p>
                    <p>
                      Telefone: <a className="hover:text-primary" href="tel:962814314">962 814 314</a>
                    </p>
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

export default Curriculos;
