import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartTotal } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Pizzería Mamma Mía
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registro</Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/cart" className="btn btn-warning fw-bold">
              🛒 Carrito: ${cartTotal.toLocaleString()}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
