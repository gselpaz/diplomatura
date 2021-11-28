import React from 'react';
import '../../src/styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main>     
            <img src="img/banner.jpg" className="img-fluid" alt="banner"/>
            <div className="holder2">
                <div className="izquierda">
                  <h1>Bienvenidos</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quasi maxime, et ex voluptate, ipsam cupiditate dolorem nostrum quia sapiente cum inventore illum laboriosam dolore odio odit consequatur tenetur optio!</p>
                </div>
                <div className="derecha">
                      <h1>Testimonios</h1>
                    <div className="testimonio">
                    <h2>Simplemente excelente</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quasi maxime, et ex voluptate, ipsam cupiditate dolorem nostrum quia sapiente cum inventore illum laboriosam dolore odio odit consequatur tenetur optio!</p>
                    </div>
                </div>
            </div>
    </main>
    );
}

export default HomePage;