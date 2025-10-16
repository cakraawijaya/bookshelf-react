const akses = require("express").Router();
const BookModel = require("./model.js");

akses.route("/").get((req, res) => {
    BookModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req, res) => {
    BookModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res) => {
    BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
    .then((deletedBook) => res.status(200).json(deletedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/search/:judul").post((req, res) => {
    BookModel.find(req.params.judul)
    .then((searchedBook) => res.status(200).json(searchedBook))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = akses;
