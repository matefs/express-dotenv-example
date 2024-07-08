// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT // || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Secret: ${process.env.SECRET_KEY}`);
  console.log(`Servidor rodando na porta ${port}`);
});
