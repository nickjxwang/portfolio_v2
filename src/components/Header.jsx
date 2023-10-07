const Header = () => {
    return (
        <header>
            <nav className='container-c'>
                <a href='index.html'>Nick</a>
                <div>
                    <ul className='grid-c'>
                        <li>
                            <a href='/'>
                                <i className='uil uil-estate'>Home</i>
                            </a>
                        </li>
                        <li>
                            <a href='#about'>
                                <i className='uil uil-user'></i>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#project'>
                                <i className='uil uil-scenery'>Projects</i>
                            </a>
                        </li>
                        <li>
                            <a href='#project'>
                                <i className='uil uil-file-alt'>Skills</i>
                            </a>
                        </li>
                        <li>
                            <a href='#contact'>
                                <i className='uil uil-message'>Contact</i>
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times'></i>
                </div>
                <div>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}
export default Header
