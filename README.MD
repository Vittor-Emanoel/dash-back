### DashSA - Sistema Administrativo para Igreja

**Introdução:**

O "DashSA" é um sistema administrativo que estou desenvolvendo para a igreja à qual congrego. Este projeto surgiu devido a uma série de desafios e necessidades que identificamos no gerenciamento e administração da nossa congregação. Com o "DashSA", nossa igreja terá uma solução personalizada para enfrentar esses desafios.

**Motivações do Desenvolvimento:**

1. **Dificuldade de Acesso Remoto aos Dados Cadastrais dos Membros e Congregados:**

   - Atualmente, enfrentamos problemas para acessar os dados cadastrais de nossos membros e congregados quando necessário, especialmente quando se trata de acesso remoto. O "DashSA" irá fornecer um sistema seguro e prático para acessar e atualizar esses dados a partir de qualquer local, simplificando a administração de informações cruciais.

2. **Gerenciamento de Novos Membros:**

   - À medida que nossa congregação cresce, o gerenciamento eficaz de novos membros se torna uma prioridade. O "DashSA" oferecerá recursos que facilitam a inclusão e o acompanhamento de novos membros, garantindo que eles se sintam bem-vindos e parte integrante de nossa comunidade religiosa.

3. **Realização de Chamadas para Membros nas Reuniões Ordinárias:**

   - As reuniões ordinárias são um aspecto fundamental de nossa igreja. O "DashSA" simplificará a realização de chamadas dos membros presentes, tornando esse processo mais eficiente e preciso. Isso contribuirá para um melhor acompanhamento da frequência e engajamento dos membros em nossas atividades.

**Outras Funcionalidades:**

Além dessas motivações principais, o "DashSA" também incluirá outras funcionalidades importantes, como:

- Gestão de eventos e programações da igreja.
- Acompanhamento de contribuições financeiras.
- Comunicação interna e envio de mensagens.
- Relatórios e análises para auxiliar na tomada de decisões.

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

Para garantiar a qualidade do software nessa primeira versão foi definido alguns requisitos funcionais, e inicialmente esse software deve:

- [x] Ter rotas de acesso restrito para usuários com a função de ADMIN;
- [x] Gerenciar membros, incluindo a capacidade de criar, deletar, editar e buscar informações sobre eles.
- [x] Gerenciar igrejas, permitindo a criação, exclusão, edição e busca de informações;
- [x] Capacitar a criação de eventos e registrar a presença dos membros;
- [ ] Fornecer documentos, como cartas e requerimentos, entre outros.
- [ ] Gerar relatórios em formato PDF que apresentem informações sobre a quantidade de membros e listas de presença.

## 💻 Tecnologias utilizadas

As Técnologias definas para o back-end foram:

- NestJS
- PostgreSQL
- PrismaORM
- Supabase
- Nodemailer

## Informações finais

A data prevista para a entregar a primeira versão do projeto é: 31/12/2023.
