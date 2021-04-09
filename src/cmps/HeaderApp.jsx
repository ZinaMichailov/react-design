import logo from '../assets/img/logo.svg'

export function HeaderApp() {
    return (
        <header>
            <div className="header-container main-layout">
                <img className="logo" src={logo} alt=""/>
                <div className="main-content">
                    <h1>Exquisite dining since 1989</h1>
                    <p>
                        Experience our seasonal menu in beautiful country surroundings. 
                        Eat the freshest produce from the comfort of our farmhouse.
                    </p>
                    <button className="dark-btn">Book a table</button>
                </div>

            </div>
        </header>
    )
}
