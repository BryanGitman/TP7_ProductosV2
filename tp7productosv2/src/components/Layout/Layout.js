import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import axios from 'axios';

const Layout = () => {
    const [listaCategorias, setCategorias] = useState([]);

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
                                <input id="busqueda" className="form-control me-2" type="search" placeholder="Buscá un producto" aria-label="Search"/>
                                    <button className="btn btn-outline-danger" id="buscar">Buscar</button>
                            </form>
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