import { useState } from "react";
import { FileText, Upload, Mail, Phone, ShieldCheck, Send, Briefcase } from "lucide-react";
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
  cvFile: File | null;
  coverFile: File | null;
  consent: boolean;
};

const MAX_FILE_MB = 10;
const ACCEPTED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const Curriculos = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    cvFile: null,
    coverFile: null,
    consent: false,
  });

  const reset = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
      cvFile: null,
      coverFile: null,
      consent: false,
    });

  const validateFile = (file: File | null, label: string) => {
    if (!file) return true;
    const sizeOk = file.size <= MAX_FILE_MB * 1024 * 1024;
    const typeOk = ACCEPTED.includes(file.type);
    if (!sizeOk) {
      toast({
        title: `Ficheiro muito grande (${label})`,
        description: `O limite é ${MAX_FILE_MB}MB.`,
        variant: "destructive",
      });
      return false;
    }
    if (!typeOk) {
      toast({
        title: `Tipo de ficheiro inválido (${label})`,
        description: "Aceitamos PDF, DOC ou DOCX.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeFile =
    (key: "cvFile" | "coverFile") => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      setFormData((prev) => ({ ...prev, [key]: file }));
    };

  const onChangeConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validações básicas
  if (!formData.consent) {
    toast({
      title: "Consentimento necessário",
      description:
        "Para submeter os seus dados, confirme o tratamento de dados pessoais.",
      variant: "destructive",
    });
    return;
  }

  if (!validateFile(formData.cvFile, "CV")) return;
  if (formData.coverFile && !validateFile(formData.coverFile, "Carta de Apresentação")) return;

  // Endereço de destino (coloca o e-mail real da empresa)
  const destinatario = "info@japjardins.pt";
  const assunto = encodeURIComponent("Candidatura - JAP Jardins com Vida");

  // Corpo do email
  const corpo = encodeURIComponent(
    `Olá JAP Jardins com Vida,

O meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone || "não indicado"}

Função/Área a que me candidato: ${formData.role || "não especificada"}

Mensagem:
${formData.message || "—"}

Anexei o meu currículo${formData.coverFile ? " e a minha carta de apresentação" : ""} a este e-mail.

Com os melhores cumprimentos,
${formData.name}`
  );

  // Abre o cliente de e-mail com os dados preenchidos
const mailtoLink = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

openMailSafely(mailtoLink, () => {
  toast({
    title: "Não abriu o cliente de e-mail?",
    description:
      "Clique aqui para abrir manualmente: " +
      `mailto:${destinatario}?subject=${assunto}&body=${corpo}`,
  });
});

  // Mostra um toast visual
  toast({
    title: "A preparar email…",
    description:
      "O seu cliente de email será aberto para enviar a candidatura. Lembre-se de anexar o seu CV antes de enviar!",
  });

  reset();
};

function openMailSafely(mailtoLink: string, onFail?: () => void) {
  try {
    // Tenta abrir o e-mail via navegador
    window.location.href = mailtoLink;

    // Alguns browsers bloqueiam — tentamos via click programático também
    const a = document.createElement("a");
    a.href = mailtoLink;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Se após ~1s o utilizador ainda está na mesma página, mostra fallback
    setTimeout(() => {
      onFail?.();
    }, 1200);
  } catch {
    onFail?.();
  }
}



  const prettyFileName = (file: File | null) => (file ? file.name : "Nenhum ficheiro selecionado");

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
                Lembre-se de anexar o seu CV (PDF, DOC ou DOCX – até {MAX_FILE_MB}MB) antes de enviar.
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

                {/* CV */}
                <div>
                  <label className="block text-sm font-medium mb-2">Currículo (CV) *</label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="cvFile"
                      name="cvFile"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={onChangeFile("cvFile")}
                      required
                    />
                    <Upload className="h-5 w-5 text-muted-foreground" aria-hidden />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {prettyFileName(formData.cvFile)}
                  </p>
                </div>

                {/* Carta de Apresentação (opcional) */}
                <div>
                  <label className="block text-sm font-medium mb-2">Carta de Apresentação (opcional)</label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="coverFile"
                      name="coverFile"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={onChangeFile("coverFile")}
                    />
                    <FileText className="h-5 w-5 text-muted-foreground" aria-hidden />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {prettyFileName(formData.coverFile)}
                  </p>
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

                <p className="text-xs text-muted-foreground">
                  Aceitamos ficheiros PDF, DOC ou DOCX até {MAX_FILE_MB}MB.
                </p>
              </form>
            </div>

            {/* Bloco lateral com “Dicas”/Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Dicas para uma boa candidatura</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Garanta que o seu CV está atualizado e legível (idealmente em PDF).</li>
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