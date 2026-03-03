create database MK_Competition;
use MK_Competition;

create table characters(
ID int auto_increment primary key,
character_name varchar(50) not null,
character_type varchar(20) check (character_type in ('fire','water','wind','poison')),
attack int not null
);