# Back-end - DashSA

O "DashSA" é o sistema adminstrativo para a igreja aonde congrego.

O Desenvolvimento desse sistema surgiu por alguns principais motivos:

- Dificuldade de acesso remoto aos dados cadastrais dos membros e congregados.
- Gerenciar os novos membros.
- Realizar a chamada dos membros presentes nas reuniões ordinárias.

Esses não são todos os motivos, mas são os que me fizeram começar a desenvolver um software próprio.

### Diagrama ERD - Entity Relationship Diagram

Essa é a estrutura inicial do banco de dados. E as entidades funcionam assim:

- User: Representa os usuários do sistema e contém informações como nome, email, senha, papel, avatar, data de criação e relacionamentos com a igreja e membros (por que um User pode ser um pastor).

- Church: Representa igrejas e inclui nome, ID do pastor e relacionamentos com membros.

- Member: Representa membros da igreja, incluindo nome completo, telefone, endereço, código postal, relacionamentos com a igreja, escritório, pastor e participações.

- Office: Representa cargos e contém o nome e relacionamentos com membros.

- Event: Representa eventos com nome e data, juntamente com uma relação com participações.

- Attendance: Representa registros de participação em eventos, incluindo o status de participação, membros e eventos associados.

  <img src="./assets/ERD.png" alt="Exemplo imagem">

> Esse diagrama está sofrendo algumas alterações!.

### Requisitos Funcionais

Para garantiar a qualidade do software foi definido os requisitos funcionais, e inicialmente esse software deve:

- [x] Ter rotas privadas para o User com o papel de ADMIN;
- [x] Gerenciar dos membros (Criar, Deletar, Editar, e Buscar);
- [x] Gerenciar das igrejas (Criar, Deletar, Editar, e Buscar);
- [x] Realizar a criação de eventos e criar a chamada dos membros presentes;
- [ ] Prover documentos como (Cartas, Requerimentos e Etc).
- [ ] Gerar relatórios em PDF sobre a quantidade de membros e lista de chamada.

## 💻 Tecnologias utilizadas

As Técnologias definas para o back-end foram:

- NESTJS
- POSTGRESQL
- PRISMAORM
- SUPABASE
- NODEMAILER

## Informações finais

A data prevista para a entregar a primeira versão do projeto é: 31/12/2023.
