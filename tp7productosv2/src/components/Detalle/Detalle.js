import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import './Detalle.css';
import axios from 'axios';
import { calificarProducto } from "../../helpers";
import CarritoContext from "../../context/carritoContext";

const Detalle = () => {
    const { idProducto } = useParams();
    const [producto, setProducto] = useState({ images: [] });
    const carrito = useContext(CarritoContext);
    const [agregado, setAgregado] = useState("");

    const getProducto = () => axios.get('https://dummyjson.com/products/' + idProducto).then(res => setProducto(res.data));

    const agregarIndicadores = () => {
        let indicadores = [];
        let i = 0;
            producto.images.forEach(img => {
                indicadores.push(<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + (i + 1)}></button>);
                i++;
            });
        return indicadores;
    }

    const agregarImagenes = () => {
        let imagenes = [];
        let i = 0;
            producto.images.forEach(img => {
                imagenes.push(
                    <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                );
                i++;
            });
        return imagenes;
    }

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const agregarAlCarrito = async() => {
        carrito.setCarrito([...carrito.carrito, producto]);
        setAgregado(<img className="check" alt="..." src="https://i.gifer.com/7efs.gif"></img>);
        await timeout(2000);
        setAgregado("");
    }

    useEffect(() => {
        getProducto();
    }, []);

    return (
        <div className="row g-0 containerD">
            <div className="col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false">
                    <div className="carousel-indicators">{agregarIndicadores()}</div>
                    <div className="carousel-inner">{agregarImagenes()}</div>
                    {
                        producto.images.length > 1 ?
                            <>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </> : ""
                    }
                </div>
            </div>
            <div className="col-md-6">
                <div className="card-body detalles">
                    <br />
                    <h2 className="card-title">{producto.title}</h2>
                    <div className="d-flex medium text-warning mb-2">{calificarProducto(producto.rating)}</div>
                    <p class="tachado">{"$" + (producto.price * (100 + producto.discountPercentage) / 100).toFixed(2)}</p>
                    <p className="precio">{"$" + producto.price}</p>
                    <p style={{color : 'green'}}>{producto.discountPercentage + "% OFF"}</p>
                    <p className="card-text">{"Marca: " + producto.brand}</p>
                    <p className="card-text">{"Descripción: " + producto.description}</p>
                    <p className="card-text"><small className="text-muted">{producto.category?.charAt(0).toUpperCase() + producto.category?.slice(1)}</small></p>
                    <button className="btn btn-primary comprar">Comprar</button>
                    <br></br>
                    <button onClick={() => agregarAlCarrito()} className="btn btn-secondary comprar">Agregar al carrito</button>
                    {agregado}
                </div>
            </div>
        </div>
    );
}

export default Detalle;