🐉 Mortal Kombat Competition
A full-stack web application inspired by the Mortal Kombat franchise, where users can register their own fighters in a database and watch them compete in a randomly generated tournament bracket.

📋 About the Project
This project simulates a mystical martial arts tournament. It uses Node.js with Express on the backend to manage the API and communication with a MySQL database. The frontend interface allows for character creation and dynamic visualization of the tournament progress.

How it works:
Creation: The user defines the name, type (element), and attack power of the character.

Persistence: Data is saved in a relational database.

Tournament: The system selects 8 random fighters from the database to fill the brackets.

Combat: Using JavaScript logic, winners advance through stages until a grand champion is crowned.

🛠️ Technologies Used
Frontend
HTML5 & CSS3: Structure and styling (including fixed positioning for the tournament brackets).

JavaScript (Vanilla): Randomization logic, DOM manipulation, and API consumption via fetch.

Backend
Node.js: Runtime environment.

Express: Framework for API creation and static file serving.

MySQL2: Connection driver for the database.

Database
MySQL: Character storage with type constraints (fire, water, wind, poison).

🗄️ Database Structure
The main table is defined as follows:

SQL
CREATE DATABASE MK_Competition;
USE MK_Competition;

CREATE TABLE characters (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    character_name VARCHAR(50) NOT NULL,
    character_type VARCHAR(20) CHECK (character_type IN ('fire','water','wind','poison')),
    attack INT NOT NULL
);
🚀 How to Run
Prerequisites
Node.js installed.

MySQL Server (such as XAMPP or WampServer).

Step by Step
Set up the Database:

Run the MK_competition_DATABASE.sql script in your MySQL console or PHPMyAdmin.

Install Dependencies:

Bash
npm install express mysql2
Start the Server:

Bash
node server.js
Access the App:
Open your browser at http://localhost:3000/mkc_title.html.

🕹️ Detailed Features
Form Validation: The system prevents empty names, names exceeding 50 characters, and ensures exactly one elemental type is selected.

Smart Randomization: The randomCharacters() function ensures that the same character is not drawn twice for the same tournament.

Soundtrack: Autoplay system for thematic MK music during navigation and the tournament.

Tournament Logic: The "Start Competition" button processes victories and moves the winners' data to the next brackets until the final.

📁 File Structure
server.js: Express server and API routes (GET and POST).

mkc.js: All client-side intelligence (fetch, random, tournament logic).

mkc.css: Visual styling and layout for the fight brackets.

create_character.html: Character registration interface.

mkc.html: The tournament arena.

Note: This project was developed for educational purposes to study database integration and dynamic element manipulation via JavaScript.

Prepare for battle! ⚔️
