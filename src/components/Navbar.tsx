import {Link} from 'react-router-dom'

//NAV IS STYLED IN INDEX.CSS

const Navbar: React.FC = () => {    
    return(
        <nav> 
            <ul>
                <li>
                    <Link to='Projects'>
                        <h2>Projects</h2>
                    </Link>
                </li>
                <li>
                    <Link to='About' >
                        <h2>About</h2>
                    </Link>
                </li>
                <li>
                    <Link to='Contact'>
                        <h2>Contact</h2>    
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;