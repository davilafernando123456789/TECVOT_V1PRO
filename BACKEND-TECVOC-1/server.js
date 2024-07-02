const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { jsPDF } = require("jspdf");
const userRoutes = require("./routes/userRoutes"); // Ajusta la ruta según la estructura de tu proyecto
const usuario = require("./routes/usuarioRoutes");
const conectarMongoDB = require("./config/db");
const testVocacionalRouter = require("./routes/testVocacional");
const preguntaRoutes = require("./routes/preguntaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const resultadoRoutes = require("./routes/resultadoRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Conectar a la base de datos antes de iniciar el servidor
conectarMongoDB()
  .then(() => {
    // Usar las rutas de usuario
    app.use("/api", userRoutes); // Puedes cambiar '/api' al prefijo que prefieras
    app.use("/usuarios", usuario);
    app.use("/api/test", testVocacionalRouter);
    app.use("/api/preguntas", preguntaRoutes);
    app.use("/api/resultados", resultadoRoutes);
    app.use("/api/users", usuarioRoutes);
    // Simular una base de datos en memoria para este ejemplo
    let respuestasDb = {};

    // Ruta para guardar respuestas
    app.post("/guardar-respuestas", (req, res) => {
      const respuestas = req.body;
      const userId = Date.now(); // Usar una identificación única para cada conjunto de respuestas
      respuestasDb[userId] = respuestas;
      res
        .status(200)
        .json({ message: "Respuestas guardadas con éxito", userId });
    });

    // Ruta para obtener respuestas por ID de usuario
    app.get("/obtener-respuestas/:userId", (req, res) => {
      const { userId } = req.params;
      const respuestas = respuestasDb[userId];
      if (respuestas) {
        res.status(200).json(respuestas);
      } else {
        res.status(404).json({ message: "Respuestas no encontradas" });
      }
    });

    // Ruta para descargar respuestas en PDF
    app.get("/descargar-pdf/:userId", (req, res) => {
      const { userId } = req.params;
      const respuestas = respuestasDb[userId];
      if (respuestas) {
        const doc = new jsPDF();
        doc.text(`Respuestas del Usuario ${userId}`, 10, 10);
        Object.entries(respuestas).forEach(([preguntaId, respuesta], index) => {
          doc.text(
            `Pregunta ${preguntaId}: Respuesta ${respuesta}`,
            10,
            20 + index * 10
          );
        });
        const pdfBuffer = doc.output("arraybuffer");
        res.setHeader("Content-Type", "application/pdf");
        res.send(Buffer.from(pdfBuffer));
      } else {
        res.status(404).json({ message: "Respuestas no encontradas" });
      }
    });

    // Iniciar el servidor una vez la base de datos está conectada
    app.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { jsPDF } = require('jspdf');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());  // Enable CORS for cross-origin requests

// // Simular una base de datos en memoria para este ejemplo
// let respuestasDb = {};

// // Ruta para guardar respuestas
// app.post('/guardar-respuestas', (req, res) => {
//   const respuestas = req.body;
//   const userId = Date.now();  // Usar una identificación única para cada conjunto de respuestas
//   respuestasDb[userId] = respuestas;
//   res.status(200).json({ message: 'Respuestas guardadas con éxito', userId });
// });

// // Ruta para obtener respuestas por ID  dhjsjsdde usuario
// app.get('/obtener-respuestas/:userId', (req, res) => {
//   const { userId } = req.params;
//   const respuestas = respuestasDb[userId];
//   if (respuestas) {
//     res.status(200).json(respuestas);
//   } else {
//     res.status(404).json({ message: 'Respuestas no encontradas' });
//   }
// });

// // Ruta para descargar respuestas en PDF
// app.get('/descargar-pdf/:userId', (req, res) => {
//   const { userId } = req.params;
//   const respuestas = respuestasDb[userId];
//   if (respuestas) {
//     const doc = new jsPDF();
//     doc.text(`Respuestas del Usuario ${userId}`, 10, 10);
//     Object.entries(respuestas).forEach(([preguntaId, respuesta], index) => {
//       doc.text(`Pregunta ${preguntaId}: Respuesta ${respuesta}`, 10, 20 + index * 10);
//     });
//     const pdfBuffer = doc.output('arraybuffer');
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(Buffer.from(pdfBuffer));
//   } else {
//     res.status(404).json({ message: 'Respuestas no encontradas' });
//   }
// });

// // Iniciar el servidor
// app.listen(3000, () => {
//   console.log('Servidor escuchando en el puerto 3000');
// });
