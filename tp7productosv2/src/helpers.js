export const calificarProducto = puntuacion => {
    let estrellas = [];
    let i;

    for(i = 0;i<Math.round(puntuacion);i++)
    {
        estrellas.push(<div className="bi-star-fill"></div>);
    }
    for(let j = i;j<5;j++)
    {
        estrellas.push(<div className="bi-star"></div>);
    }
    return estrellas;
}