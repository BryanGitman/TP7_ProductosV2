import { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import './Productos.css';
import axios from 'axios';
import { calificarProducto } from "../../helpers";
import CarritoContext from "../../context/carritoContext";

const Productos = () => {
    const { categoria } = useParams();
    const [skip, setSkip] = useState(0);
    const [productos, setProductos] = useState([]);
    const carrito = useContext(CarritoContext);

    const skipear = () =>
    {
        getProductos("https://dummyjson.com/products?skip=" + (skip + 30)).then(res => {
            setProductos([...productos, ...res.data.products])
        });

        setSkip(skip + 30);
    }

    const getProductos = url => {
        if(categoria)
        {
            setSkip(100);
            if(categoria[0] !== 'x')
            {
                url += "/category/" + categoria
            }
            else
            {
                url += "/search?q=" + categoria.slice(1, categoria.length)
            }
        }
        return axios.get(url);
    }

    useEffect(() => {
        setSkip(0);
        getProductos('https://dummyjson.com/products').then(res => {
            setProductos(res.data.products)
        });
    }, [categoria]);

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {   
                            productos.map(producto => (
                                <div key={producto.id} className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={producto.images[0]} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{producto.title}</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">{calificarProducto(producto.rating)}</div>
                                                <p className="precio">${producto.price}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><Link to={"/producto/" + producto.id} className="btn btn-outline-dark mt-auto">Ver detalles</Link></div>
                                            {carrito.carrito.find((p) => p.id === producto.id)?<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-check-circle-fill checked" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                            </svg>:""}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div>{skip<100?<button className="btn btn-outline-dark mt-auto verMas" onClick={skipear}>Ver más</button>:""}</div>
        </>
    );
}

export default Productos;