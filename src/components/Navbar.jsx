import reactLogoSmall from '../assets/imgs/react-icon-small.png'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={reactLogoSmall}/>
                <h2>ReactFacts</h2>
            </div>
            <h4>React Course - Project 1</h4>
        </nav >
    )
}