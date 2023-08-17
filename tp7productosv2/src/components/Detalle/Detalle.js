import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Detalle.css';
import axios from 'axios';
import { calificarProducto } from "../../helpers";

const Detalle = () => {
    const { idProducto } = useParams();
    const [producto, setProducto] = useState({});

    const getProducto = () => axios.get('https://dummyjson.com/products/' + idProducto).then(res => setProducto(res.data));

    const agregarIndicadores = () => {
        let indicadores = [];
        let i = 0;
        producto.images.forEach(img => {
            indicadores.push(<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className="active" aria-current="true" aria-label={"Slide " + (i+1)}></button>);
            i++;
        });
        return indicadores;
    }

    const agregarImagenes = () => {
        let imagenes = [];
        let i = 0;
        producto.images.forEach(img => {
            imagenes.push(
                <div className={i===0?"carousel-item active":"carousel-item"}>
                    <img src={img} className="d-block w-100" alt="..."/>
                </div>
            );
            i++;
        });
        return imagenes;
    }

    useEffect(() => 
    {
        getProducto();
    }, []);

    return (
        <div className="row g-0">
            <div className="col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false">
                    <div className="carousel-indicators">{agregarIndicadores()}</div>
                    <div className="carousel-inner">{agregarImagenes()}</div>
                    {
                        producto.images.length > 1?
                        <>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </>:""
                    }
                </div>
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <button type="button" className="btn-close cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                    <br/>
                    <h2 className="card-title">{producto.title}</h2>
                    <div className="d-flex medium text-warning mb-2">{calificarProducto(producto.rating)}</div>
                    <p>{"$" + (producto.price*(100+producto.discountPercentage)/100).toFixed(2).strike()}</p>
                    <p className="precio">{"$" + producto.price}</p>
                    <p id="pDescu"></p>
                    <p className="card-text" id="pMarca"></p>
                    <p className="card-text" id="pDescri"></p>
                    <p className="card-text"><small className="text-muted" id="pCate"></small></p>
                    <button className="btn btn-primary comprar">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Detalle;