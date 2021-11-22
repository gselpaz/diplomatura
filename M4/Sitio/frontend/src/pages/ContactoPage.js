import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">

        <div className="columna left">
            <h2>Dejanos tu mensaje</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="">Teléfono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="comentario">Mensaje</label>
                    <textarea name="" id="comentario" cols="30" rows="10"></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>

        <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Para compras o propuestas de negocio también nos podes contactar a través de:</p>
                <ul>
                    <li>Teléfono: ________</li>
                    <li>Email: ________</li>
                    <li>Instagram: _______</li>
                </ul>
        </div>

        {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.9742106497047!2d-58.27146328423177!3d-34.806590675768575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a329662a27d839%3A0x9f376ef65948e570!2sSan%20Juan%20548%2C%20B1888IML%20Florencio%20Varela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1635710897350!5m2!1sen!2sar" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div> */}





    </main>
    );
}

export default ContactoPage;