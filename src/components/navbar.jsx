import './navbar.css'

export default function NavBar(props){
    return (
        <div className='nav-bar'>
            <div className='logo-container'>
                <h3>RENTALS</h3>
            </div>
            <div className="navigation">
                <a href="/">Home</a>
                <a href="/movies">Movies</a>
                <a href="/favorites">Favorites</a>
                <a href="/rentals">My Rentals</a>
            </div>
            <div className='options'>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}