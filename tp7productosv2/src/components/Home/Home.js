import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import axios from 'axios';

const Home = () => {
    const [productosRandom, setProductosRandom] = useState([]);

    const getProductos = () => {
        axios.get('https://dummyjson.com/products?limit=0')
            .then(res => { 
                let prod = [];
                for (let i = 0; i < 5; i++) {
                    prod.push(res.data.products[Math.floor(Math.random() * res.data.products.length)]);
                }
                setProductosRandom(prod); 
            });
    }

    useEffect(() => getProductos(), []);

    return (
        <>
            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">GZ Market</h1>
                        <p class="lead fw-normal text-white-50 mb-0">Todos los productos en un mismo lugar</p>
                    </div>
                </div>
            </header>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner tamañoFijo">
                    {
                        productosRandom.map(product => {
                            <Link to={"/producto/" + product.id}>
                               <div class="carousel-item">
                                    <img src={product.images[0]} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{product.title}</h5>
                                        <p>{product.description}</p>
                                    </div>
                                </div> 
                            </Link> 
                        })
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;