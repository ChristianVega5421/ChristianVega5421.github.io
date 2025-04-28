import {Link} from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav>
                <Link smooth spy duration={500} offset={-80} to="about">Home</Link>
                <Link smooth spy duration={500} offset={-80} to="projects">Projects</Link>
                <Link smooth spy duration={500} offset={-80} to="contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header
