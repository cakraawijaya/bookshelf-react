import { useState, useMemo } from "react";

function ManajemenBuku({ bookList, store, update, remove }) {
  const [form, setForm] = useState("");
  const [inputBook, setInputBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return (bookList || []).filter(
      (book) =>
        book.judul?.toLowerCase().includes(query) ||
        book.pengarang?.toLowerCase().includes(query) ||
        book.publikasi?.toString().includes(query)
    );
  }, [searchQuery, bookList]);

  function showCreate() {
    setForm("create");
  }

  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputBook({ ...inputBook, [name]: value });
  }

  function submitAdd(e) {
    e.preventDefault();
    store(inputBook);        
    setForm("");
    setInputBook({});
  }

  function submitChange(e) {
    e.preventDefault();
    update(inputBook);
    setForm("");
    setInputBook({});
  }

  function deleteBook(book) {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus buku "${book.judul}"?`
    );
    if (!confirmDelete) return;
    remove(book);
  }

  return (
    <section id="management-page">
      <div className={`container manajemen-container mt-3 mb-3`}>
        <h1 className={`manajemen-title mb-3 user-select-none`}>
          Manajemen Buku
        </h1>

        <p className={`manajemen-desc text-muted mb-2 user-select-none`}>
          Menu ini menampilkan daftar koleksi buku perpustakaan yang tersedia
          saat ini, serta memungkinkan Anda menambah, mengubah, atau menghapus
          data buku secara mudah dan cepat.
        </p>

        <hr className={`manajemen-divider mb-5`} />

        {/* Tombol Tambah & Pencarian */}
        <div className="row align-items-stretch justify-content-between mb-3 flex-column flex-md-row">
          <div className="col-md-4 text-start mb-2 mb-md-0 d-flex">
            <button
              type="button"
              className="btn btn-success w-70 w-md-auto flex-fill-md user-select-none"
              onClick={showCreate}
            >
              <i className="bi bi-journal-plus me-1"></i> Tambah Buku
            </button>
          </div>

          <div className="col-md-4 text-end d-flex justify-content-md-end">
            <div className={`input-group manajemen-search-group w-100 w-md-auto`}>
              <input
                type="text"
                className={`form-control search-box`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari judul / pengarang / tahun..."
              />
              <span className={`search-label user-select-none`}>
                <i className="bi bi-search me-1"></i>
              </span>
            </div>
          </div>
        </div>

        {/* FORM TAMBAH */}
        {form === "create" && (
          <div id="formTambah" className="mt-5 mb-4">
            <form className="form-row" onSubmit={submitAdd}>
              <div className="row">
                <div className="col-12 col-md-3 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-create user-select-none">
                      <i className="bi bi-journal-richtext me-1"></i>Judul
                    </span>
                    <input
                      type="text"
                      name="judul"
                      className="form-control form-control-sm"
                      placeholder="Isi data.."
                      value={inputBook.judul}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-create user-select-none">
                      <i className="bi bi-people-fill me-1"></i>Pengarang
                    </span>
                    <input
                      type="text"
                      name="pengarang"
                      className="form-control form-control-sm"
                      placeholder="Isi data.."
                      value={inputBook.pengarang}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-3 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-create user-select-none">
                      <i className="bi bi-calendar-range-fill me-1"></i>Tahun
                    </span>
                    <input
                      type="text"
                      name="publikasi"
                      className="form-control form-control-sm"
                      placeholder="Isi data.."
                      value={inputBook.publikasi}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-2 d-grid">
                  <button
                    type="submit"
                    className="btn btn-sm btn-success col-12 user-select-none"
                  >
                    <i className="bi bi-check2-square me-1"></i>Tambah
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* FORM EDIT */}
        {form === "edit" && (
          <div id="formEdit" className="mt-5 mb-4">
            <form className="form-row" onSubmit={submitChange}>
              <div className="row">
                <div className="col-12 col-md-3 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-update user-select-none">
                      <i className="bi bi-journal-richtext me-1"></i>Judul
                    </span>
                    <input
                      type="text"
                      name="judul"
                      className="form-control form-control-sm"
                      placeholder="Ubah judul buku..."
                      value={inputBook.judul}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-update user-select-none">
                      <i className="bi bi-people-fill me-1"></i>Pengarang
                    </span>
                    <input
                      type="text"
                      name="pengarang"
                      className="form-control form-control-sm"
                      placeholder="Ubah pengarang buku..."
                      value={inputBook.pengarang}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-3 mb-2 mb-md-0">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bginput-update user-select-none">
                      <i className="bi bi-calendar-range-fill me-1"></i>Tahun
                    </span>
                    <input
                      type="text"
                      name="publikasi"
                      className="form-control form-control-sm"
                      placeholder="Ubah tahun..."
                      value={inputBook.publikasi}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-2 d-grid">
                  <button
                    type="submit"
                    className="btn btn-sm btn-warning col-12 user-select-none"
                  >
                    <i className="bi bi-check2-square me-1"></i>Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* DAFTAR BUKU */}
        <div className="table-responsive mt-4">
          <table className="table table-success table-striped table-bordered table-hover shadow-sm">
            <thead className="table-dark user-select-none text-center">
              <tr>
                <th className="align-middle text-center">Judul Buku</th>
                <th className="align-middle text-center">Pengarang</th>
                <th className="align-middle text-center">Tahun</th>
                {filteredBooks.length > 0 && (
                  <th className="align-middle text-center">Aksi</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book._id}>
                    <td className="align-middle text-center">{book.judul}</td>
                    <td className="align-middle text-center">{book.pengarang}</td>
                    <td className="align-middle text-center">{book.publikasi}</td>
                    <td className="align-middle text-center d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => showEdit(book)}
                      >
                        <i class="bi bi-pencil"></i> Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteBook(book)}
                      >
                        <i class="bi bi-trash"></i> Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="align-middle text-center text-muted">
                    Tidak ada data ditemukan...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <style>
        {`
          .manajemen-container {
            margin: 0 auto;
            text-align: center;
            max-width: 100%;
          }

          .manajemen-title {
            font-weight: 700;
            font-size: 2rem;
            color: #212529;
          }

          .manajemen-desc {
            font-size: 1rem;
            line-height: 1.7;
            color: #495057;
          }

          .manajemen-divider {
            border-top: 2px solid #5c5c5c;
          }

          .manajemen-search-group {
            max-width: 500px;
          }

          .search-box {
            border: 2px solid #212529;
            background-color: #fff;
            color: #212529;
            font-weight: 500;
            padding: 0.6rem 1rem;
            border-radius: 0.5rem 0 0 0.5rem;
            font-size: 0.95rem;
            transition: all 0.25s ease;
          }

          .search-box::placeholder {
            color: #6c757d;
            opacity: 0.8;
            font-size: 0.9rem;
          }

          .search-box:focus {
            outline: none;
            border-color: #6c757d;
            box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
          }

          .search-label {
            background-color: #212529;
            color: #fff;
            font-weight: 600;
            border: 2px solid #212529;
            padding: 0.6rem 1.2rem;
            border-radius: 0 0.5rem 0.5rem 0;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .search-label i {
            font-size: 1rem;
          }

          .form-control.form-control-sm {
            background-color: #fff;
            color: #212529;
            font-weight: 500;
            transition: all 0.25s ease;
            font-size: 0.9rem;
          }

          .form-control.form-control-sm::placeholder {
            color: #6c757d;
            opacity: 0.8;
            font-size: 0.9rem;
          }

          .form-control.form-control-sm:focus,
          .form-control.form-control-sm:hover {
            outline: none;
            border-color: #6c757d;
            box-shadow: 0 0 0 0.05rem rgba(0, 0, 0, 0.25);
          }

          .input-group-text {
            font-size: 0.9rem;
            font-weight: 500;
          }

          .input-group-text i {
            font-size: 0.9rem;
            margin-right: 0.3rem;
          }

          .table {
            border-radius: 0.5rem;
            font-size: 0.9rem;
            overflow: hidden;
          }

          .table thead {
            background-color: #212529 !important;
            color: #fff !important;
            font-weight: 700;
          }

          .table thead th {
            text-align: center;
            font-size: 0.9rem;
          }

          .table thead th i {
            font-size: 0.9rem;
            margin-right: 0.3rem;
          }

          .table tbody tr:nth-child(even) {
            background-color: #fff8e1;
          }

          .table tbody tr:nth-child(odd) {
            background-color: #fdf6da;
          }

          .table tbody tr:hover {
            background-color: #fff3cd;
            transition: background-color 0.3s ease;
          }

          .table tbody td {
            text-align: center;
            font-size: 0.9rem;
            font-weight: 500;
            color: #212529;
          }

          .btn {
            font-size: 0.9rem;
            font-weight: 500;
          }

          @media (min-width: 768px) and (max-width: 1024px) {
            .manajemen-title {
              font-size: 1.6rem;
            }

            .manajemen-desc {
              font-size: 0.9rem;
            }

            .col-md-4.text-end {
              flex: 1 1 50%;
              max-width: 100%;
            }

            .manajemen-search-group {
              display: flex;
              width: 100%;
              max-width: 100%;
            }

            .search-box {
              font-size: 0.85rem;
              flex: 1;
              width: 100%;
              max-width: 100%;
            }

            .search-box::placeholder {
              font-size: 0.8rem;
            }

            .search-label {
              font-size: 0.9rem;
              flex-shrink: 0;
            }

            .search-label i,
            .input-group-text,
            .input-group-text i,
            .table thead th i {
              font-size: 0.85rem;
            }

            .table {
              font-size: 0.8rem;
              margin-top: 20px;
            }

            .table tbody td,
            .btn,
            .form-control.form-control-sm {
              font-size: 0.85rem;
            }

            #formTambah .row,
            #formEdit .row {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
            }

            #formTambah .row > div:nth-child(1),
            #formEdit .row > div:nth-child(1),
            #formTambah .row > div:nth-child(2),
            #formEdit .row > div:nth-child(2) {
              flex: 1 1 calc(50% - 0.5rem);
              margin-bottom: 1rem;
            }

            #formTambah .row > div:nth-child(3),
            #formEdit .row > div:nth-child(3) {
              flex: 0 0 100%;
              margin-bottom: 1rem;
            }

            #formTambah .row > div.d-grid,
            #formEdit .row > div.d-grid {
              flex: 0 0 100%;
            }

            #formTambah .row > div.d-grid button,
            #formEdit .row > div.d-grid button {
              width: 100%;
              box-sizing: border-box;
              line-height: 2;
            }
          }

          @media (max-width: 540px) {
            .manajemen-desc {
              margin-top: 35px;
            }

            .manajemen-container > .row .btn.btn-success {
              width: 100% !important;
              text-align: left;
              line-height: 2.5;
              margin-bottom: 10px;
            }

            .manajemen-search-group {
              margin-bottom: 10px;
            }

            .table {
              margin-top: 20px;
            }

            .table thead th i {
              display: none;
            }
          }

          @media (max-width: 480px) {
            .manajemen-title {
              font-size: 1.3rem;
            }

            .manajemen-desc {
              font-size: 0.8rem;
              margin-top: 30px;
            }

            .manajemen-container > .row .btn.btn-success {
              width: 100% !important;
              text-align: left;
              line-height: 2.4;
              margin-bottom: -5px;
            }

            .manajemen-search-group {
              width: 100%;
              margin: 0.8rem auto;
            }

            #formTambah .row > div,
            #formEdit .row > div {
              width: 100% !important;
              margin-bottom: 0.5rem;
            }

            #formTambah button,
            #formEdit button {
              width: 100% !important;
            }

            .table td.d-flex {
              flex-direction: column !important;
              gap: 0.25rem !important;
              align-items: stretch !important;
            }

            .table td.d-flex button {
              width: 100% !important;
            }

            .table-responsive {
              overflow-x: auto;
            }

            .table thead th {
              font-size: 0.7rem;
            }

            .table thead th i {
              display: none;
            }

            .form-control.form-control-sm,
            .search-box,
            .input-group-text,
            .btn {
              font-size: 0.75rem;
              padding: 0.5rem !important;
            }

            .input-group-text i {
              font-size: 0.75rem;
            }

            .input-group-text.bginput-create,
            .input-group-text.bginput-update {
              font-size: 0.75rem;
            }

            .search-box::placeholder,
            .form-control.form-control-sm::placeholder {
              font-size: 0.75rem;
            }

            .table tbody td {
              font-size: 0.75rem;
            }
          }
        `}
      </style>
    </section>
  );
}

export default ManajemenBuku;