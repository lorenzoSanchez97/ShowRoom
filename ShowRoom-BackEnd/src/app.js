const express = require("express")
const app = express();

const path = require("path")
const publicPath = path.resolve(__dirname, "../public")

const cors = require("cors");
app.use(cors());

app.use(express.static(publicPath))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const methodOverride = require("method-override");
// app.use(methodOverride("_method"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

// Rutas
const adminsRoutes = require("./routes/adminsRoutes")
const productsRoutes = require("./routes/productsRoutes")
const usersRoutes = require("./routes/usersRoutes")

app.use("/products", productsRoutes);
app.use("/users", usersRoutes)