const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/info-201901758', (req, res) => {
    return res.status(200).json({"Erick Ivan Mayorga Rodriguez": "201901758"});
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
  });