import { useContext } from "react";
import CarritoContext from "../../context/carritoContext";
import './Carrito.css';

const Carrito = () => {
    const carrito = useContext(CarritoContext);

    const eliminarProducto = (producto) => {
        carrito.setCarrito(carrito.carrito.filter(p => p !== producto));
    }

    return(
        <div className="screen">
            {carrito.carrito.map(producto => (
                <div className="row">
                    <div className="col-2"><img className="imagen" alt="..." src={producto.images[0]}></img></div>
                    <div className="col-4">{producto.title}</div>
                    <div className="col-3"><button onClick={() => eliminarProducto(producto)} className="btn btn-danger">Eliminar</button></div>
                    <div className="col-3">${producto.price}</div>
                </div>
            ))}
        </div>
    );
}

export default Carrito;