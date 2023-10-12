import { useState } from 'react'
import { Header, About, Home, Skills, Footer, Contact, Works } from './layout'

const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <Header showMenu={showMenu} setShowMenu={setShowMenu} />
            <main>
                <Home />
                <About />
                <Works />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
export default App
