import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import axios from 'axios';

const Layout = () => {
    const [listaCategorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
      };

    useEffect(() => {
        let ignore = false;
        axios.get("https://dummyjson.com/products/categories").then(res => {
            if (!ignore) {
                setCategorias(res.data);
            }
        });
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <>
            <Outlet />
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <div className="container px-4 px-lg-5">
                    <img className="logo" src="favicon.png" alt="..."/>
                        <Link to="/" className="navbar-brand">GZ Market</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><Link to="/productos" className="nav-link">Productos</Link></li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle boton" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Categorías</button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="listaCategorias">
                                        <li><Link to="/productos" className="dropdown-item">Todos los productos</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        {listaCategorias.map(categoria => <li key={categoria}><Link to={"/productos/" + categoria} className="dropdown-item">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Link></li>)}
                                    </ul>
                                </li>
                                <li className="nav-item"><Link to="/contacto" className="nav-link">Contacto</Link></li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscá un producto" aria-label="Search" onChange={handleChange} />
                                <Link to={"/productos/x" + busqueda} className="btn btn-outline-danger">Buscar</Link>
                            </form>
                            <Link to="/carrito" className="nav-link carrito">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </Link>
                        </div>
                </div>
            </nav>
            
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; GZ Market 2023</p></div>
            </footer>
        </>
    );
}

export default Layout;