import { Link } from 'react-router-dom';

function beranda() {
    return (
        <section class="home-container">
            <div class="home-text user-select-none">
                <h1>Selamat Datang di <span>Bookshelf-React</span></h1>
                <p>
                    Bookshelf-React adalah media pustaka digital modern berbasis 
                    <strong>React.js</strong>, tempat untuk mengelola dan menjelajahi koleksi buku favoritmu.
                </p>
            </div>

            <div class="features user-select-none">
                <Link to="/katalog" class="feature-card">
                    <i class="bi bi-journal-bookmark"></i>
                    <h3>Katalog Buku</h3>
                    <p>Telusuri berbagai koleksi buku menarik dalam satu tempat.</p>
                </Link>

                <Link to="/manajemen-buku" class="feature-card">
                    <i class="bi bi-book-half"></i>
                    <h3>Manajemen Buku</h3>
                    <p>Tambah, ubah, atau hapus data buku dengan mudah dan cepat.</p>
                </Link>
            </div>
        </section>
    );
}

export default beranda