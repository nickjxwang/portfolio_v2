import { Hero, Header, Works, About, Contact, Footer } from '../layout'

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
            <div onClick={() => setShowMenu(false)}>
                <Hero />
                <About />
                <Works />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
export default Home
