import { Link } from 'react-router-dom';
import Logo from '../assets/favicon/favicon-16x16.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex align-items-center">
            
            <a class="navbar-brand d-flex align-items-center user-select-none" href="#">
                <img
                src={ Logo }
                alt="Logo"
                class="logo me-2"
                />
                <span class="brand-text">Bookshelf-Vue</span>
            </a>

            <button
                class="navbar-toggler custom-toggler user-select-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse user-select-none" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/" class="nav-link" aria-current="page">
                        <i class="bi bi-house-fill me-1"></i>Beranda
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/katalog" class="nav-link" aria-current="page">
                        <i class="bi bi-journal-bookmark-fill me-1"></i>Katalog
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/manajemen-buku" class="nav-link" aria-current="page">
                        <i class="bi bi-book-half me-1"></i>Manajemen Buku
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar