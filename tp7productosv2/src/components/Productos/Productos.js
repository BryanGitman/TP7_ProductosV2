import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './Productos.css';
import axios from 'axios';

const Productos = () => {
    const { categoria } = useParams();
    const [skip, setSkip] = useState(0);
    const [productos, setProductos] = useState([]);

    const skipear = () =>
    {
        setSkip(skip + 30);
        getProductos("https://dummyjson.com/products?skip=" + skip)
    }

    const calificarProducto = puntuacion => {}

    const getProductos = url => {
        if(categoria)
        {
            setSkip(100);
            url += "/category/" + categoria
        }
        axios.get(url).then(res => {setProductos([...productos, ...res.data.products])});
    }

    useEffect(() => {
        setSkip(0);
        setProductos([]);
        getProductos('https://dummyjson.com/products');
    }, [categoria]);

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {   
                            productos.map(producto => (
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={producto.images[0]} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{producto.title}</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    {calificarProducto(producto.rating)}
                                                </div>
                                                <p className="precio">${producto.price}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><Link to={"/producto/" + producto.id} className="btn btn-outline-dark mt-auto">Ver detalles</Link></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div>{skip<100?<a className="btn btn-outline-dark mt-auto verMas" onclick={skipear()}>Ver más</a>:""}</div>
        </>
    );
}

export default Productos;