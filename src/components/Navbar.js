import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-xl">
                <Link className="navbar-brand" to="/" onClick={() => handlePageChange("Home")}>
                    <p className="m-0 h1">HAI DUONG</p>
                </Link>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarHaiDuong"
                    aria-controls="navbarHaiDuong"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarHaiDuong">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link
                                className={
                                    currentPage === "Home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/"
                                onClick={() => handlePageChange("Home")}
                            >
                                About Me
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                className={
                                    currentPage === "Portfolio"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/portfolio"
                                onClick={() => handlePageChange("Portfolio")}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                className={
                                    currentPage === "Contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/contact"
                                onClick={() => handlePageChange("Contact")}
                            >
                                Contact
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                className={
                                    currentPage === "Resume"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/resume"
                                onClick={() => handlePageChange("Resume")}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
