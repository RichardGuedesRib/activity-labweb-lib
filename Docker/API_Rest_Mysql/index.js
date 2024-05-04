const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const port = 8081;

const editora = require("./controllers/editoraController.js");
const categoria = require("./controllers/categoriaController.js");
const autor = require("./controllers/autorController.js");
const livro = require("./controllers/livroController.js");

app.use(bodyParser.json());

app.use(cors());
app.get("/", (req, res) => res.send("Estou aqui"));
app.use("/editora", editora);
app.use("/categoria", categoria);
app.use("/autor", autor);
app.use("/livro", livro);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`));
