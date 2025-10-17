const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        judul: { type: String, required: true },
        pengarang: { type: String, required: true },
        publikasi: { type: String, required: true },
    },
    { collection: "catalog" }
);

module.exports = mongoose.model("BookModel", BookSchema);