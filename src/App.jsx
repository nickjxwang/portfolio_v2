import { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleProject from './components/singleProject'
import ScrollToTop from './components/ScrollToTop'
import Home from './layout/Home'

const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')

    return (
        <Router>
            {/* <ScrollToTop /> */}

            <main onClick={() => setShowMenu(false)}>
                <Routes>
                    <Route
                        path='/'
                        exact
                        element={
                            <Home
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                                setActiveNav={setActiveNav}
                                activeNav={activeNav}
                                isScrolled={isScrolled}
                                setIsScrolled={setIsScrolled}
                            />
                        }
                    />
                    <Route
                        path='/:category/:id'
                        element={<SingleProject isScrolled={isScrolled} />}
                    />
                </Routes>
            </main>
        </Router>
    )
}
export default App
