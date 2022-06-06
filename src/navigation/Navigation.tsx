import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from "react-router-dom";
import { routesPaths } from "../routes";

import './styles.css'

export const Navigation = () => {
    const [navVisible, setNavVisible] = useState<boolean>(true)
    const handleShowNav = () => {
        setNavVisible(!navVisible)
    }

    return (
        <div className="Navigation">
            <div>
                <LogoDevIcon />
                <div className="Nav-mobile">
                    <MenuIcon onClick={handleShowNav} />
                </div>

            </div>
            {navVisible && <div className="Nav-links">
                <Link className="App-link" to={'/'} >Home</Link>
                <Link className="App-link" to={`/${routesPaths.about}`}>About</Link>
                <Link className="App-link" to={`/${routesPaths.contact}`}>Contact</Link>
                <Link className="App-link" to={`/${routesPaths.mypage}`}>My page</Link>
            </div>}

        </div>

    )
}