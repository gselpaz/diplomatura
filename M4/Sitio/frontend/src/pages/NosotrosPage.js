import React from 'react';

const NosotrosPage = (props) => {
    return (

        <main>
        <div>
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptates, iusto atque omnis officia voluptate repellendus minima ipsam deleniti. Esse laboriosam porro ea doloremque maiores vel reprehenderit perferendis, eligendi debitis.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam inventore eius sequi aliquid aperiam iusto, sint vitae voluptatibus reprehenderit quod. Quasi qui velit fuga possimus commodi quae quisquam, dolorum fugiat.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam inventore eius sequi aliquid aperiam iusto, sint vitae voluptatibus reprehenderit quod. Quasi qui velit fuga possimus commodi quae quisquam, dolorum fugiat.</p>
        </div>
        <div>
            <h2>Staff</h2>   
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="juangomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, sed enim commodi corrupti in tempora pariatur iusto nemo tempore omnis itaque est repellat eveniet nesciunt inventore numquam quo alias temporibus?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="dianareyes"/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis sunt esse necessitatibus vitae aliquid asperiores voluptates ducimus! Quod ut amet doloremque eos corporis! Cupiditate, ipsa dolore! Hic, dicta provident.</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="robertozaptos" />
                    <h5>Roberto Zaptos</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum ex, at ab maiores itaque doloribus porro amet illum quisquam quasi. Cum vero doloremque voluptatibus ad, possimus placeat. Illum, nemo!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="sandramastropiero"/>
                    <h5>Sandra Mastropiero</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus, temporibus voluptas tempore recusandae eos architecto maxime, voluptatum perferendis facilis totam sint ducimus laudantium quia aperiam ipsam. Quidem, tenetur rerum!</p>
                </div>
            </div>
        </div>

    </main>

    );
}

export default NosotrosPage;