import React from 'react';
import '../styles/components/pages/ProductosPage.css';

const ProductosPage = (props) =>{
    return(
        <main class="holder">
            <h2>Productos</h2>
            <div class="producto">
                <span class="contenedor">
                    <img src="img/productos/AMD RX580 8GB.jpg" alt="AMD RX580"/>
                    <h4>AMD RX580</h4>
            </span>       
            <p>
                <b>Ficha técnica</b>:<br/>
                VRAM 8Gb<br/>
                Chipset AM4</p>
            <p><b>Precio</b>: $320.000.-</p>
            <p><a class="consultar" href="mailto:info@insumosit.com?subject=AMD RX580 8GB">Consultar</a></p>
        </div>
        <div class="producto">
            <span class="contenedor">
                <img src="img/productos/GeForce RTX 3050 6GB.png" alt="GeForce RTX 3050"/>
                <h4>GeForce RTX 3050</h4>
            </span>
            <p>
                <b>Ficha técnica</b>:<br/>
                VRAM 6Gb<br/>
                Chipset AM4</p>
            <p><b>Precio</b>: $570.000.-</p>
            <p><a class="consultar" href="mailto:info@insumosit.com?subject=GeForce RTX 3050 6GB">Consultar</a></p>
        </div>
        <div class="producto">
            <span class="contenedor">
                <img src="img/productos/GeForce RTX 3080 10GB.jpg" alt="GeForce RTX 3080"/>
                <h4>GeForce RTX 3080</h4>
            </span>
            <p>
                <b>Ficha técnica</b>:<br/>
                VRAM 10Gb<br/>
                Chipset AM4
            </p>
            <p><b>Precio</b>: $750.000.-</p>
            <p><a class="consultar" href="mailto:info@insumosit.com?subject=GeForce RTX 3080 10GB">Consultar</a></p>
        </div>
    </main>
    );
}

export default ProductosPage;