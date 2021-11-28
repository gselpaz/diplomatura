// import { Link } from 'react-router-dom';
import NavLink from '../NavLink';

import '../../styles/components/layout/Nav.css'


const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink activeClassName="activo" exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/proyectos">Proyectos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;