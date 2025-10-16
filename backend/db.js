const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/db_bookshelf_react");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
    console.log("Koneksi database berhasil!");
});
