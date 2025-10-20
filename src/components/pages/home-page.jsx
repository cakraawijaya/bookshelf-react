import { Link } from 'react-router-dom';

function Beranda() {
    return (
        <section id="home-page">
            <div class="home-container">
                <div class="home-text user-select-none">
                    <h1>Selamat Datang di <span>Bookshelf-React</span></h1>
                    <p>
                        Bookshelf-React adalah media pustaka digital modern berbasis <strong>React.js</strong>, tempat untuk mengelola dan menjelajahi koleksi buku favoritmu.
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
            </div>

            <style>
                {`
                    .home-container {
                        background: linear-gradient(180deg, #f0f9ff 0%, #dff4ff 50%, #e6f7ff 100%);
                        min-height: 100vh;
                        padding: 80px 40px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border-radius: 40px;
                        max-width: 1200px;
                        margin: 0 auto;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }

                    .home-text {
                        max-width: 900px;
                        margin-bottom: 40px;
                    }

                    .home-text h1 {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: #2f2b3a;
                    }

                    .home-text h1 span {
                        color: rgba(0, 90, 180, 1);
                    }

                    .home-text p {
                        margin-top: 15px;
                        color: #4d4d4d;
                        font-size: 1.05rem;
                        line-height: 1.6;
                        max-width: 700px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .features {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 40px;
                        width: 100%;
                    }

                    .feature-card {
                        background-color: #fff;
                        border-radius: 20px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        width: 260px;
                        padding: 25px 20px;
                        text-align: center;
                        text-decoration: none;
                        color: inherit;
                        cursor: pointer;
                        position: relative;
                        overflow: hidden;
                        transition: all 0.35s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .feature-card:hover {
                        transform: translateY(-6px) scale(1.02);
                        box-shadow: 0 5px 15px rgba(184, 179, 194, 0.25);
                        background: linear-gradient(145deg, #ffffff 0%, #f4ecff 100%);
                    }

                    .feature-card::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%) scaleX(0);
                        width: 80%;
                        height: 2px;
                        background: linear-gradient(90deg, #005ea0 0%, #003366 60%, #000000 100%);
                        border-radius: 3px;
                        transition: all 0.4s ease;
                    }

                    .feature-card:hover::after {
                        transform: translateX(-50%) scaleX(1);
                    }

                    .feature-card i {
                        font-size: 2rem;
                        color: rgba(0, 90, 180, 1);
                        margin-bottom: 10px;
                        transition: transform 0.3s ease;
                    }

                    .feature-card:hover i {
                        transform: scale(1.1) rotate(2deg);
                    }

                    .feature-card h3 {
                        font-size: 1.4rem;
                        font-weight: 600;
                        margin-bottom: 8px;
                        color: #2f2b3a;
                    }

                    .feature-card p {
                        color: #555;
                        font-size: 0.95rem;
                    }

                    @media (min-width: 768px) and (max-width: 1024px) {
                        .home-container {
                            padding: 50px 25px;
                            border-radius: 25px;
                        }

                        .home-text h1 {
                            font-size: 2rem;
                        }

                        .home-text p {
                            font-size: 1.2rem;
                        }

                        .feature-card {
                            width: 78%;
                            padding: 20px 18px;
                        }

                        .feature-card i {
                            font-size: 2.5rem;
                        }

                        .feature-card h3 {
                            font-size: 1.5rem;
                        }

                        .feature-card p {
                            font-size: 1.2rem;
                        }
                    }

                    @media (max-width: 480px) {
                        .home-container {
                            padding: 40px 20px;
                            min-height: 100vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            box-shadow: none;
                            border-radius: 20px;
                        }

                        .home-text {
                            margin-bottom: 25px;
                        }

                        .home-text h1 {
                            font-size: 1.4rem;
                            line-height: 1.4;
                        }

                        .home-text p {
                            font-size: 0.8rem;
                            line-height: 1.5;
                            margin-top: 10px;
                            padding: 0 5px;
                        }

                        .features {
                            flex-direction: column;
                            gap: 20px;
                            width: 100%;
                            align-items: center;
                            justify-content: center;
                        }

                        .feature-card {
                            width: 100%;
                            max-width: 420px;
                            padding: 25px 20px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                        }

                        .feature-card i {
                            font-size: 1.3rem;
                        }

                        .feature-card h3 {
                            font-size: 0.9rem;
                        }

                        .feature-card p {
                            font-size: 0.8rem;
                        }
                    }
                `}
            </style>
        </section>
    );
}

export default Beranda;