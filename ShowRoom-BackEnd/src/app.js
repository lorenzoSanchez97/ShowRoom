const express = require("express")
const app = express();

const path = require("path")
const publicPath = path.resolve(__dirname, "../public")

app.use(express.static(publicPath))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const methodOverride = require("method-override");
// app.use(methodOverride("_method"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));