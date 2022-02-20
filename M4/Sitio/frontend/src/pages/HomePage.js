import React from 'react';
import '../../src/styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main>     
            <img src="img/banner.jpg" className="img-fluid" alt="banner"/>
            <div className="holder2">
                <div className="izquierda">
                  <h1>Bienvenidos</h1>
                  <p>Somos un grupo de amigos que se reunieron con la intención de llevar adelante ciertas iniciativas relacionadas con Ingenieria, entre las cuáles se encuentran algunas relacionadas con Impresión 3D, Minería de Cryptomonedas, Desarrollo WEB, entre otros.</p>
                </div>
                <div className="derecha">
                    <div className="testimonio">
                    <h1>Por qué elegirnos</h1>
                    <ul>
                        <li><h4>Nuestra prioridad son clientes satisfechos.</h4></li>
                        <li><h4>Gran compromiso con los plazos de entrega.</h4></li>
                        <li><h4>Productos de primedad calidad, y una continua mejora.</h4></li>
                    </ul>
                    </div>
                </div>
            </div>
    </main>
    );
}

export default HomePage;