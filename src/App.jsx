import { useEffect, useState } from 'react'
import { Header, About, Home, Skills, Footer, Contact, Works } from './layout'

const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [aboutP, setAboutP] = useState(0)
    const [projectsP, setProjectsP] = useState(0)
    const [contactP, setContactP] = useState(0)

    useEffect(() => {
        const CalculateHeights = () => {
            const aboutElement = document.getElementById('about')
            const projectsElement = document.getElementById('projects')
            const contactElement = document.getElementById('contact')

            if (aboutElement) {
                setAboutP(aboutElement.offsetHeight)
            }
            if (projectsElement) {
                setProjectsP(projectsElement.offsetHeight)
            }
            if (contactElement) {
                setContactP(contactElement.offsetHeight)
            }
        }

        CalculateHeights()

        window.addEventListener('scroll', CalculateHeights)

        return () => {
            window.removeEventListener('scroll', CalculateHeights)
        }
    }, [])

    return (
        <>
            <Header
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                aboutP={aboutP}
                projectsP={projectsP}
                contactP={contactP}
            />
            <main onClick={() => setShowMenu(false)}>
                <Home />
                <About id='about ' />
                <Works id='projects ' />
                <Contact id='contact ' />
            </main>
            <Footer />
        </>
    )
}
export default App
