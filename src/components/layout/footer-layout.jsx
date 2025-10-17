function Footer() {
    return (
        <footer class="footer">
            <div class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
            
                <ul class="nav sosmed justify-content-center justify-content-md-end list-unstyled d-flex gap-3 order-1 order-md-2 user-select-none">
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="sosmed-link">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="sosmed-link">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="sosmed-link">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </li>
                </ul>

                <div class="copyright text-center text-md-start mb-md-0 order-2 order-md-1 user-select-none">
                    <span class="text-muted monospace">
                        © 2022-{new Date().getFullYear()} <strong>Bookshelf-React</strong>. All Rights Reserved
                    </span>
                </div>

            </div>

            <style>
                {`
                    .footer {
                        background: linear-gradient(-180deg, #00f2fe, #1ac0fe, #4facfe);
                    }

                    .footer .container-fluid {
                        padding: 1.2rem 3rem;
                    }

                    .sosmed-link {
                        color: #00000085;
                        font-size: 1.5rem;
                        transition: all 0.3s ease;
                    }

                    .sosmed-link:hover {
                        color: #000;
                        transform: scale(1.2) rotate(5deg);
                        text-shadow: 0 0 5px rgba(0,0,0,0.3);
                    }

                    .copyright span {
                        font-size: 1rem;
                    }

                    @media (min-width: 768px) and (max-width: 1024px) {
                        .footer .container-fluid {
                            flex-direction: column;
                            text-align: center;
                            padding: 1rem 2.2rem;
                        }

                        .sosmed-link {
                            font-size: 1.5rem;
                        }

                        .copyright span {
                            font-size: 0.95rem;
                        }
                    }

                    @media (max-width: 767px) {
                        .footer .container-fluid {
                            flex-direction: column;
                            text-align: center;
                            padding: 0.8rem 1.2rem;
                        }

                        .sosmed {
                            order: 1;
                            margin-bottom: 8px;
                            gap: 1rem;
                        }

                        .sosmed-link {
                            font-size: 1.2rem;
                        }

                        .copyright {
                            order: 2;
                        }

                        .copyright span {
                            font-size: 0.85rem;
                        }
                    }
                `}
            </style>
        </footer>
    );
}

export default Footer;