🐉 Mortal Kombat Competition
Uma aplicação web completa (Full Stack) inspirada na franquia Mortal Kombat, onde os usuários podem registrar seus próprios lutadores em um banco de dados e vê-los competir em um torneio de chaves gerado aleatoriamente.

📋 Sobre o Projeto
O projeto simula um torneio de artes marciais místicas. Ele utiliza Node.js com Express no backend para gerenciar a API e a comunicação com o banco de dados MySQL. A interface frontal (Frontend) permite a criação de personagens e a visualização dinâmica do torneio.

Como funciona:
Criação: O usuário define nome, tipo (elemento) e poder de ataque do personagem.

Persistência: Os dados são salvos em um banco de dados relacional.

Torneio: O sistema seleciona 8 lutadores aleatórios do banco de dados para preencher as chaves.

Combate: Através de lógica JavaScript, os vencedores avançam de fase até que um grande campeão seja coroado.

🛠️ Tecnologias Utilizadas
Frontend
HTML5 & CSS3: Estrutura e estilização (incluindo posicionamento fixo para as chaves do torneio).

JavaScript (Vanilla): Lógica de sorteio, manipulação de DOM e consumo da API via fetch.

Backend
Node.js: Ambiente de execução.

Express: Framework para criação da API e servidor de arquivos estáticos.

MySQL2: Driver de conexão com o banco de dados.

Banco de Dados
MySQL: Armazenamento dos personagens com restrições de tipos (fire, water, wind, poison).

🗄️ Estrutura do Banco de Dados
A tabela principal é definida da seguinte forma:

SQL
CREATE TABLE characters (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    character_name VARCHAR(50) NOT NULL,
    character_type VARCHAR(20) CHECK (character_type IN ('fire','water','wind','poison')),
    attack INT NOT NULL
);
🚀 Como Executar
Pré-requisitos
Node.js instalado.

Servidor MySQL (como XAMPP ou WampServer).

Passo a Passo
Configurar o Banco:

Execute o script MK_competition_DATABASE.sql no seu console MySQL ou PHPMyAdmin.

Instalar Dependências:

Bash
npm install express mysql2
Iniciar o Servidor:

Bash
node server.js
Acessar:
Abra o navegador em http://localhost:3000/mkc_title.html.

🕹️ Funcionalidades Detalhadas
Validação de Formulário: O sistema impede nomes vazios, nomes acima de 50 caracteres e garante que exatamente um tipo elemental seja selecionado.

Sorteio Inteligente: A função randomCharacters() garante que o mesmo personagem não seja sorteado duas vezes para o mesmo torneio.

Trilha Sonora: Sistema de autoplay para músicas temáticas de MK durante a navegação e o torneio.

Lógica de Torneio: O botão "Start Competition" processa as vitórias e move os dados dos vencedores para as próximas chaves (#character13, #character14, etc.) até a final.

📁 Estrutura de Arquivos
server.js: Servidor Express e rotas da API (GET e POST).

mkc.js: Toda a inteligência do lado do cliente (fetch, random, torneio).

mkc.css: Estilização visual e layout das chaves de luta.

create_character.html: Interface de cadastro.

mkc.html: A arena do torneio.

Nota: Este projeto foi desenvolvido para fins de estudo sobre integração de banco de dados e manipulação dinâmica de elementos via JavaScript.

Prepare-se para o combate! ⚔️