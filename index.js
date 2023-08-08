const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/info-201901758', (req, res) => {
    return res.status(200).json({"Erick Ivan Mayorga Rodriguez": "201901758"});
});

app.post('calculadora/201901758', (req, res) => {
    const { numero1, numero2, operacion } = req.body;
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return res.status(400).json({ error: 'Los números Debe ingresar un valor numerico.' });
      }
    
      let resultado;
      switch (operacion) {
        case 'suma':
          resultado = numero1 + numero2;
          break;
        case 'resta':
          resultado = numero1 - numero2;
          break;
        case 'multiplicacion':
          resultado = numero1 + numero2;
          break;
        case 'division':
          if (numero2 === 0) {
            return res.status(400).json({ error: 'No se puede dividir por cero.' });
          }
          resultado = numero1 / numero2;
          break;
        default:
          return res.status(400).json({ error: 'Operación no válida. Las opciones son: suma, resta, multiplicacion, division.' });
      }
    
      res.json({ resultado });
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
  });