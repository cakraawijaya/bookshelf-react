import { useState, useMemo } from "react";

function Katalog({ bookList }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data buku berdasarkan pencarian
  const filteredBooks = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return (bookList || []).filter(
      (book) =>
        book.judul?.toLowerCase().includes(query) ||
        book.pengarang?.toLowerCase().includes(query) ||
        book.publikasi?.toString().includes(query)
    );
  }, [searchQuery, bookList]);

  return (
    <section id="catalog-page">
      <div className={`container katalog-container mt-3 mb-3`}>
        <h1 className={`katalog-title mb-3 user-select-none`}>
          Katalog Buku
        </h1>

        <p className={`katalog-desc text-muted mb-2 user-select-none`}>
          Berikut adalah daftar koleksi buku perpustakaan yang tersedia untuk Anda baca.
        </p>

        <hr className={`katalog-divider mb-5`} />

        {/* 🔍 Bagian Search */}
        <div className="search-section mb-4">
          <div className={`input-group katalog-search-group mx-auto`}>
            <input
              type="text"
              className={`form-control search-box`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul / pengarang / tahun..."
            />
            <span
              className={`search-label d-flex align-items-center justify-content-center user-select-none`}
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-success table-striped table-bordered table-hover shadow-sm">
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
              </tr>
            </thead>
            <tbody>
              {filteredBooks && filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <tr key={index}>
                    <td className="align-middle text-center">{book.judul}</td>
                    <td className="align-middle text-center">{book.pengarang}</td>
                    <td className="align-middle text-center">{book.publikasi}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-muted align-middle text-center py-3">
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
          .katalog-container {
            margin: 0 auto;
            text-align: center;
            max-width: 100%;
          }

          .katalog-title {
            font-weight: 700;
            color: #212529;
            font-size: 2rem;
          }

          .katalog-desc {
            font-size: 1rem;
            line-height: 1.7;
            color: #495057;
          }

          .katalog-divider {
            border-top: 2px solid #5c5c5c;
            margin-bottom: 3rem;
          }

          .katalog-search-group {
            max-width: 500px;
            margin: 2.5rem auto;
          }

          .search-box {
            border: 2px solid #212529;
            background-color: #fff;
            color: #212529;
            font-weight: 500;
            padding: 0.6rem 1rem;
            border-radius: 0.5rem 0 0 0.5rem;
            transition: all 0.25s ease;
            font-size: 0.95rem;
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
            transition: all 0.3s ease;
            font-size: 1rem;
          }

          .search-label i {
            font-size: 1rem;
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

          .table thead th i {
            font-size: 0.9rem;
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

          @media (min-width: 768px) and (max-width: 1024px) {
            .katalog-title {
              font-size: 1.6rem;
            }

            .katalog-desc {
              font-size: 0.9rem;
            }

            .katalog-search-group {
              max-width: 100%;
            }

            .search-box {
              font-size: 0.85rem;
            }

            .search-box::placeholder {
              font-size: 0.8rem;
            }

            .search-label {
              font-size: 0.9rem;
            }

            .search-label i {
              font-size: 0.9rem;
            }

            .table {
              font-size: 0.8rem;
            }

            .table thead th i {
              font-size: 0.85rem;
            }
          }

          @media (max-width: 480px) {
            .katalog-title {
              font-size: 1.3rem;
            }

            .katalog-desc {
              font-size: 0.8rem;
            }

            .katalog-search-group {
              width: 100%;
              margin: 0.8rem auto;
            }

            .search-box {
              padding: 0.5rem;
              font-size: 0.8rem;
            }

            .search-box::placeholder {
              font-size: 0.75rem;
            }

            .search-label {
              padding: 0.5rem;
              font-size: 0.8rem;
            }

            .search-label i {
              font-size: 0.8rem;
            }

            .table-responsive {
              overflow-x: auto;
            }

            .table {
              font-size: 0.7rem;
            }

            .table thead th i {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Katalog;