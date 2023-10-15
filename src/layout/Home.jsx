import { Hero, Header, Works, About, Contact } from '../layout'

const Home = ({
    showMenu,
    setShowMenu,
    setActiveNav,
    isScrolled,
    setIsScrolled,
    activeNav,
}) => {
    return (
        <>
            <Header
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                setActiveNav={setActiveNav}
                activeNav={activeNav}
                isScrolled={isScrolled}
                setIsScrolled={setIsScrolled}
            />
            <Hero />
            <About />
            <Works />
            <Contact />
        </>
    )
}
export default Home
