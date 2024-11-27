import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
    return(
        <main class="holder">
        <div class="contacto">
            <section>
                <h2>Contactanos</h2>
                <form class="formulario" action="inicio.html" method="post">
                    <p>
                        <label for="nombreyapellido">Nombre y apellido:</label>
                        <input type="text" name="nombreyapellido" placeholder="Ingrese su nombre y apellido"/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" name="telefono" id="telefono" placeholder="+54 (11) 15 1234-5678"/>
                    </p>
                        <label for="masinfo">Cuéntenos más:</label>
                        <textarea name="masinfo" id="masinfo" placeholder="Ingrese aquí el motivo de su contacto"></textarea>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </section>
            <section class="datos">
                <h2>Canales de contacto</h2>
                <ul>
                    <li>
                        <b>Teléfono</b>: +54 (11) 4000-0000
                    </li>
                    <li>
                        <b>Correo electrónico</b>: info@insumosit.com
                    </li>
                    <li>
                        <b>Facebook</b>: <a href="https://www.facebook.com">Insumos IT</a>
                    </li>
                    <li>
                        <b>X (Twitter)</b>: <a href="https://x.com">@insumosit</a>
                    </li>
                </ul>
            </section>
        </div>
        <div class="mapa">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.565620601521!2d-58.37209545893945!3d-34.608943930821866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadb57fd1e5f%3A0xcc737c4eb0a8614b!2sPlaza%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1725219920142!5m2!1ses-419!2sar" width="800" height="175" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>
    );
}

export default ContactoPage;