import React from 'react';

function Footer() {
    return (
        <footer class="footer">
            <div class="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            <ul class="nav sosmed justify-content-center justify-content-md-end list-unstyled d-flex gap-3 order-1 order-md-2 user-select-none">
                <li><a href="#" class="sosmed-link"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#" class="sosmed-link"><i class="bi bi-instagram"></i></a></li>
                <li><a href="#" class="sosmed-link"><i class="bi bi-facebook"></i></a></li>
            </ul>

            <div class="copyright text-center text-md-start mb-md-0 order-2 order-md-1 user-select-none">
                <span class="text-muted monospace">
                    © 2022-{new Date().getFullYear()} <strong>Bookshelf-React</strong>. All Rights Reserved
                </span>
            </div>

            </div>
        </footer>
    );
}

export default Footer