import { Outlet } from 'react-router-dom'
import Header from './Header'

const Navbar = ({ showMenu, setShowMenu, aboutP, projectsP, contactP }) => {
    return (
        <>
            <Header
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                aboutP={aboutP}
                projectsP={projectsP}
                contactP={contactP}
            />
            <Outlet />
        </>
    )
}
export default Navbar
