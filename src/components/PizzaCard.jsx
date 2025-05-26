import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={pizza.img} 
        className="card-img-top" 
        alt={pizza.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text text-muted">
          <small>{pizza.ingredients.join(', ')}</small>
        </p>
        <div className="mt-auto">
          <h4 className="text-danger">${pizza.price.toLocaleString()}</h4>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link 
              to={`/pizza/${pizza.id}`} 
              className="btn btn-outline-primary me-md-2"
            >
              Ver más
            </Link>
            <button 
              onClick={() => addToCart(pizza)}
              className="btn btn-danger"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;