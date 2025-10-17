import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar-layout";
import Beranda from "./components/pages/home-page";
import Katalog from './components/pages/catalog-page';
import ManajemenBuku from './components/pages/management-page';
import Footer from "./components/layout/footer-layout";

function App() {
  const baseURL = "http://localhost:5000";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get(`${baseURL}/book`)
      .then((response) => { setBooks(response.data); })
      .catch(function (error) { console.log(error.response.data); });
  }
  
  function storeData(inputBook) {
    axios
      .post(`${baseURL}/book/add`, inputBook)
      .then(() => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert("Data berhasil ditambahkan!");
        retrieveData();
      })
      .catch((error) => { console.log(error.response.data); })
  }

  function updateData(inputBook){
    axios
      .put(`${baseURL}/book/update/` + inputBook._id, inputBook)
      .then(() => {
        alert("Data berhasil diperbarui!");
        retrieveData();
      })
      .catch((error) => { console.log(error.response.data); })
  }
  
  function deleteData(book) {
    axios
      .delete(`${baseURL}/book/delete/` + book._id)
      .then(() => {
        alert("Data berhasil dihapus!");
        retrieveData();
      })
      .catch((error) => { console.log(error.response.data); })
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Beranda /> } />
        <Route path="/katalog" exact element={ <Katalog bookList={books} /> } />
        <Route path="/manajemen-buku" exact element={ <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} /> } />
      </Routes>
      <Footer />
      </BrowserRouter>

      <style>
        {`
          main {
            padding: 60px;
            flex: 1;
          }

          @media (min-width: 768px) and (max-width: 1024px) {
            main {
              padding: 50px;
            }
          }

          @media (max-width: 480px) {
            main {
              padding: 35px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;