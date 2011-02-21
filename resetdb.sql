drop database if exists emasc;
create database emasc;

use emasc;
create table Person (id int auto_increment primary key, email varchar(512), pwhash varchar(1024));