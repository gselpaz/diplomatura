import React from 'react';

const ProyectosPage = (props) => {
    return (

        <main className="">
        <h1>Proyectos</h1>
        <p>A continuación pueden visualizar algunos de nuestros proyectos, diseños y trabajos en proceso.</p>
        <div className="galeria">

            <div className="foto">
                <img src="img/galeria/dino.jpg" alt="producto 1" className="proyecto_img"/>
            </div>
            <div className="foto">
                <img src="img/galeria/plano.jpg" alt="producto 2" className="proyecto_img"/>
            </div>        
            <div className="foto">
                <img src="img/galeria/pieza2.jpg" alt="producto 3" className="proyecto_img"/>
            </div>        
            <div className="foto">
                <img src="img/galeria/pieza.jpg" alt="producto 4" className="proyecto_img"/>
            </div>
            <div className="foto">
                <img src="img/galeria/3d.jpg" alt="producto 1" cclassName="proyecto_img"/>
            </div>
            <div className="foto">
                <img src="img/galeria/crypto.jpg" alt="producto 2" className="proyecto_img"/>
            </div>        
            <div className="foto">
                <img src="img/galeria/soporte.jpg" alt="producto 3" className="proyecto_img"/>
            </div>        
            <div className="foto">
                <img src="img/galeria/iron.jpg" alt="producto 4" className="proyecto_img"/>
            </div>
        
         </div>

    </main>
    );
}

export default ProyectosPage;