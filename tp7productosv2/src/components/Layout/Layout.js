import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import axios from 'axios';

const Layout = () => {
    const [listaCategorias, setCategorias] = useState([]);

    useEffect(() => axios.get("https://dummyjson.com/products/categories").then(res => {setCategorias(res.data)}), []);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
                <div class="container px-4 px-lg-5">
                    <img class="logo" src="favicon.png"/>
                        <Link to="/" class="navbar-brand">GZ Market</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item"><Link to="/productos" class="nav-link">Productos</Link></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="listaCategorias">
                                        <li><Link to="/productos" class="dropdown-item">Todos los productos</Link></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        {listaCategorias.map(categoria => <li><Link to={"/productos/" + categoria} class="dropdown-item">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Link></li>)}
                                    </ul>
                                </li>
                                <li class="nav-item"><Link to="/contacto" class="nav-link">Contacto</Link></li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input id="busqueda" class="form-control me-2" type="search" placeholder="Buscá un producto" aria-label="Search"/>
                                    <button class="btn btn-outline-danger" id="buscar">Buscar</button>
                            </form>
                        </div>
                </div>
            </nav>
            <Outlet />
            <footer class="py-5 bg-dark">
                <div class="container"><p class="m-0 text-center text-white">Copyright &copy; GZ Market 2023</p></div>
            </footer>
        </>
    );
}

export default Layout;