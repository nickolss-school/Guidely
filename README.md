# Guidely - Plataforma de Mentoria e Conexão Profissional

<p align="center">
<img src="./docs/icon.png" alt="Guidely Logo" width="200">
</p>

**Guidely** é uma plataforma web moderna desenvolvida para conectar profissionais experientes (mentores) a pessoas que buscam orientação e desenvolvimento de carreira (mentorados). O sistema permite que mentorados encontrem mentores em diversas áreas de atuação, agendem sessões e gerenciem suas jornadas de aprendizado.

Este projeto foi desenvolvido como parte das disciplinas de **Técnicas Avançadas de Programação** e **Técnicas Avançadas de Banco de Dados Relacional e Não Relacional** para Fatec da Zona Leste.

## Funcionalidades (MVP)

O escopo do MVP (Minimum Viable Product) inclui as seguintes funcionalidades essenciais:

*   **Autenticação de Usuários:** Sistema de cadastro e login com perfis distintos para **Mentores** e **Mentorados**.
*   **Gerenciamento de Perfis:** Usuários podem criar e atualizar seus perfis, adicionando informações como biografia, área de atuação e especialidades.
*   **Busca de Mentores:** Mentorados podem pesquisar mentores por área de conhecimento (ex: Tecnologia, Marketing, Finanças).
*   **CRUD de Áreas de Conhecimento:** Administradores do sistema podem gerenciar as categorias e especialidades disponíveis na plataforma.
*   **Sistema de Agendamento:**
    *   Mentorados podem solicitar um agendamento com um mentor.
    *   Mentores podem aprovar ou recusar solicitações de agendamento.
*   **Dashboard de Agendamentos:** Usuários podem visualizar seus agendamentos futuros e passados.

## Funcionalidades Futuras (Roadmap)

Além do MVP, o projeto foi concebido com uma visão de expansão, que inclui:

*   **Sistema de Anúncios:** Espaços na plataforma para que empresas ou profissionais possam anunciar serviços e produtos relevantes para o público (ex: cursos, ferramentas, eventos).
*   **Sistema de Avaliações:** Mentorados poderão avaliar as sessões e deixar feedbacks para os mentores.
*   **Integração de Pagamentos:** Processamento de pagamentos para sessões de mentoria premium.
*   **Mensageria em Tempo Real:** Um chat para facilitar a comunicação entre mentores e mentorados.

## Tecnologias Utilizadas

Este projeto foi construído utilizando uma stack de tecnologias modernas, separando claramente as responsabilidades entre backend e frontend.

### Backend
*   **Java 25**
*   **Spring Boot:** Framework para construção da API REST.
*   **JUnit 5 & Mockito:** Para testes unitários e de integração.

### Frontend
*   **Next.js:** Framework React para renderização no servidor (SSR) e geração de sites estáticos (SSG).
*   **React:** Biblioteca para construção da interface de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **shadcn/ui:** Biblioteca de componentes de UI reusáveis e acessíveis.
*   **Tailwind CSS:** Framework de CSS utility-first para estilização.

### Banco de Dados
*   **MySQL:** Banco de dados relacional principal para dados estruturados.
*   **MongoDB:** Banco de dados NoSQL para dados semiestruturados, como logs ou configurações de anúncios.
*   
## 👥 Equipe

| Nome do Integrante | Responsabilidades                               | GitHub                                    |
| :----------------- | :---------------------------------------------- | :---------------------------------------- |

| Nickolas Maia de Araujo  | Desenvolvedor Full Stack   | [Link para o GitHub](https://github.com/nickolss) |
