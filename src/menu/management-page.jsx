import { useState } from 'react';

function ManajemenBuku({ bookList, store, update, remove, search }) {
    const [form, setForm] = useState([]);
    const [inputBook, setInputBook] = useState([]);
    const [searchBook, setSearchBook] = useState([]);

    function showCreate(){
        setForm("create");
    }

    function showEdit(book){
        setInputBook(book);
        setForm("edit");
    }

    function handleJudul(event) {
        setInputBook({ ...inputBook, judul: event.target.value })
    }

    function handlePengarang(event) {
        setInputBook({ ...inputBook, pengarang: event.target.value })
    }

    function handlePublikasi(event) {
        setInputBook({ ...inputBook, publikasi: event.target.value })
    }

    function submitAdd(event) {
        event.preventDefault();
        store(inputBook);        
        setForm("");
    }

    function submitChange(event) {
        event.preventDefault();
        update(inputBook);
        setForm("");
    }

    function deleteBook(book){
        remove(book);
    }

    function handleSearch(event) {
        setSearchBook({ ...searchBook, judul: event.target.value })
    };

    function submitSearch() {
        search(searchBook);
    }

    return (
        <div className="container manajemen-container mt-5 mb-5">
            <h1 className="manajemen-title mb-3 user-select-none">Manajemen Buku</h1>
            <p className="manajemen-desc text-muted mb-2 user-select-none">
                Menu ini menampilkan daftar koleksi buku perpustakaan yang tersedia saat ini, serta memungkinkan 
                Anda menambah, mengubah, atau menghapus data buku secara mudah dan cepat.
            </p>

            <hr className="manajemen-divider mb-5" />

            {/* Bagian Tombol Tambah dan Pencarian */}
            <div className="row align-items-stretch justify-content-between mb-3 flex-column flex-md-row">
                <div className="col-md-4 text-start mb-2 mb-md-0 d-flex">
                <button
                    type="button"
                    className="btn btn-warning w-70 w-md-auto flex-fill-md user-select-none"
                    onClick={showCreate}
                >
                    <i className="bi bi-journal-plus me-1"></i> Tambah Buku
                </button>
                </div>

                <div className="col-md-4 text-end d-flex justify-content-md-end">
                <form className="input-group manajemen-search-group w-100 w-md-auto" onSubmit={submitSearch}>
                    <input
                    id="inSearchManbuk"
                    onChange={handleSearch}
                    value={searchBook.judul}
                    type="search"
                    className="form-control search-box"
                    aria-label="Search"
                    placeholder="Cari judul / pengarang / tahun..."
                    />
                    <button type="submit" className="btn btn-warning user-select-none">
                    <i className="bi bi-search me-1"></i>
                    </button>
                </form>
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
                            onChange={handleJudul}
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
                            onChange={handlePengarang}
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
                            onChange={handlePublikasi}
                        />
                        </div>
                    </div>

                    <div className="col-12 col-md-2 d-grid">
                        <button type="submit" className="btn btn-sm btn-warning col-12 user-select-none">
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
                            onChange={handleJudul}
                            value={inputBook.judul}
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
                            onChange={handlePengarang}
                            value={inputBook.pengarang}
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
                            onChange={handlePublikasi}
                            value={inputBook.publikasi}
                        />
                        </div>
                    </div>

                    <div className="col-12 col-md-2 d-grid">
                        <button type="submit" className="btn btn-sm btn-info col-12 user-select-none">
                        <i className="bi bi-check2-square me-1"></i>Edit
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            )}

            {/* DAFTAR BUKU */}
            <div className="table-responsive mt-4">
                <table className="table table-bordered table-striped table-hover shadow-sm">
                <thead className="table-dark user-select-none">
                    <tr>
                    <th className="align-middle text-center">
                        <i className="bi bi-journal-text me-1"></i> Judul Buku
                    </th>
                    <th className="align-middle text-center">
                        <i className="bi bi-people me-1"></i> Pengarang
                    </th>
                    <th className="align-middle text-center">
                        <i className="bi bi-calendar me-1"></i> Tahun
                    </th>
                    <th className="align-middle text-center">
                        <i className="bi bi-activity me-1"></i> Aksi
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.length > 0 ? (
                    bookList.map((book, index) => (
                        <tr key={index}>
                        <td className="align-middle text-center">{book.judul}</td>
                        <td className="align-middle text-center">{book.pengarang}</td>
                        <td className="align-middle text-center">{book.publikasi}</td>
                        <td className="d-flex flex-column flex-md-row justify-content-center gap-1 gap-md-2 align-middle text-center user-select-none">
                            <button
                            type="button"
                            className="btn btn-sm btn-info"
                            onClick={() => showEdit(book)}
                            >
                            <i className="bi bi-pencil"></i> Edit
                            </button>
                            <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteBook(book)}
                            >
                            <i className="bi bi-trash"></i> Hapus
                            </button>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="4" className="text-muted align-middle text-center py-3">
                        Tidak ada data ditemukan...
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
    );
}

export default ManajemenBuku