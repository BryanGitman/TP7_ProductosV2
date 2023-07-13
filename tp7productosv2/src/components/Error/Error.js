import { Link } from "react-router-dom";
import './Error.css';

const Error = () => {
    return (
        <div class="c1voot80 dir dir-ltr">
            <div class="t7ae5dl dir dir-ltr">
                <div class="h8i5hv0 dir dir-ltr">
                    <h1 tabindex="-1" class="hpipapi dir dir-ltr error" elementtiming="LCP-target">404</h1>
                    <h1 tabindex="-1" class="hpipapi dir dir-ltr" elementtiming="LCP-target">No podemos encontrar la página que buscás</h1>
                </div>
                <div class="d12u3ps5 dir dir-ltr">
                    Acá tenés algunos enlaces útiles:
                    <ul class="ljt9wxn dir dir-ltr">
                        <li class="lgydpc4 dir dir-ltr"><Link to="/" class="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Menú</Link></li>
                        <li class="lgydpc4 dir dir-ltr"><Link to="/productos" class="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Productos</Link></li>
                        <li class="lgydpc4 dir dir-ltr"><Link to="/contacto" class="l1ovpqvx b1uxatsa c1qih7tm dir dir-ltr">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div class="m94tuun dir dir-ltr">
                <div class="dqra4ro bmwtyu7 dir dir-ltr" style="--dls-liteimage-height:240px;--dls-liteimage-width:240px;--dls-liteimage-background-image:url('data:image/png;base64,null');--dls-liteimage-background-size:contain" role="img" aria-busy="false" aria-label="¡A la nena se le cayó el helado!">
                    <img class="i9if2t0 i1mla2as i1cqnm0r dir dir-ltr" style="--dls-liteimage-object-fit:contain" aria-hidden="true" alt="¡A la nena se le cayó el helado!" elementtiming="LCP-target" src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" data-original-uri="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" />
                    <div class="rsb5yse bmwtyu7 dqqltwe dir dir-ltr" style="--dls-liteimage-background-size:contain;--dls-liteimage-background-image:url(https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif)"></div>
                </div>
            </div>
        </div>
    );
}

export default Error;