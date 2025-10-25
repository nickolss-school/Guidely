import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidely",
  description: "Plataforma de Mentoria e Conexão Profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        {children}
      </body>
    </html>
  );
}
