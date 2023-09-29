import { useContext, useState, useEffect } from "react";
import CarritoContext from "../../context/carritoContext";
import { Link } from "react-router-dom";
import './Carrito.css';

const Carrito = () => {
    const carrito = useContext(CarritoContext);
    const [total, setTotal] = useState(0);

    const eliminarProducto = producto => {
        carrito.setCarrito(carrito.carrito.filter(p => p !== producto));
    }

    const cambiarCantidad = (cant, producto) => {
        let carritoNuevo = carrito.carrito.map(p => 
        {
            if(p.id === producto.id && cant > 0)
            {
                return {...p, cantidad: cant, precioTotal: cant*p.price};
            }
            return p;
        });
        carrito.setCarrito(carritoNuevo)
    }

    useEffect(() => {
        let precio = 0;
        carrito.carrito.map(producto => (precio += producto.precioTotal));
        setTotal(precio);
    }, [carrito]);

    return(
        <div className="screen">
            {carrito.carrito.map(producto => (
                <>
                    <div className="row" key={producto.id}>
                        <div className="col-2"><img className="imagen" alt="..." src={producto.images[0]}></img></div>
                        <div className="col-4"><h4>{producto.title}</h4></div>
                        <div className="col-3"><button onClick={() => eliminarProducto(producto)} className="btn btn-danger">Eliminar</button></div>
                        <div className="col-2">
                            <div className="number-control">
                                <button className="botonC number-left" onClick={() => cambiarCantidad((producto.cantidad-1), producto)}></button>
                                <input type="number" name="number" className="number-quantity" value={producto.cantidad} onChange={(e) => cambiarCantidad(e.target.value, producto)}/>
                                <button className="botonC number-right" onClick={() => cambiarCantidad((producto.cantidad+1), producto)}></button>
                            </div>
                        </div>
                        <div className="col-1"><h5>${producto.price}</h5></div>
                    </div>
                    <div className="line"></div>
                </>
            ))}
            {carrito.carrito.length > 0?<div className="row">
                <div className="col-10"></div>
                <div className="col-2"><h3>Total: ${total}</h3><button className="btn btn-primary comprarC">Comprar</button></div>
            </div>:<><h1 className="text-center">Tu carrito está vacío</h1><br></br><Link to="/productos" className="btn btn-dark comprarC">Elegí un producto</Link></>}
        </div>
    );
}

export default Carrito;