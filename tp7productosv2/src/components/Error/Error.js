import { Link } from "react-router-dom";
import './Error.css';

const Error = () => {
    return (
        <div className="c1voot80 dir dir-ltr">
            <div className="t7ae5dl dir dir-ltr">
                <div className="h8i5hv0 dir dir-ltr">
                    <h1 tabIndex="-1" className="hpipapi dir dir-ltr error" elementtiming="LCP-target">404</h1>
                    <h1 tabIndex="-1" className="hpipapi dir dir-ltr" elementtiming="LCP-target">No podemos encontrar la página que buscás</h1>
                </div>
                <div className="d12u3ps5 dir dir-ltr">
                    Acá tenés algunos enlaces útiles:
                    <ul className="ljt9wxn dir dir-ltr">
                        <li className="lgydpc4 dir dir-ltr"><Link to="/" className="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Menú</Link></li>
                        <li className="lgydpc4 dir dir-ltr"><Link to="/productos" className="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Productos</Link></li>
                        <li className="lgydpc4 dir dir-ltr"><Link to="/contacto" className="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="m94tuun dir dir-ltr">
                <div className="dqra4ro bmwtyu7 dir dir-ltr style1" role="img" aria-busy="false" aria-label="¡A la nena se le cayó el helado!">
                    <img className="i9if2t0 i1mla2as i1cqnm0r dir dir-ltr style2" aria-hidden="true" alt="¡A la nena se le cayó el helado!" elementtiming="LCP-target" src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" data-original-uri="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" />
                    <div className="rsb5yse bmwtyu7 dqqltwe dir dir-ltr style3"></div>
                </div>
            </div>
        </div>
    );
}

export default Error;