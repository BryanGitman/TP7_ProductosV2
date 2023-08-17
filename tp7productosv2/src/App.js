import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Productos from "./components/Productos/Productos";
import Detalle from "./components/Detalle/Detalle";
import Contacto from "./components/Contacto/Contacto";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
          <Route path="/productos/:categoria" element={<Productos/>}></Route>
          <Route path="/producto/:idProducto" element={<Detalle />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
