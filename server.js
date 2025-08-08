const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'meu_banco'
  });

  connection.connect(error => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados: ' + error.stack);
      return;
    }
    console.log('Conectado ao banco de dados com ID ' + connection.threadId);
  });

  app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
      if (error) return res.status(500).send('Erro ao adicionar usuário.');
      res.status(201).send('Usuário adicionado com sucesso.');
    });
  });

  app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
      if (error) return res.status(500).send('Erro ao obter usuários.');
      res.json(results);
    });
  });

  app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;npm 
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
      if (error) return res.status(500).send('Erro ao obter usuário.');
      res.json(results[0]);
    });
  });


