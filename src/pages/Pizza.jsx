import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pizza = ({ addToCart }) => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => setPizza(response.data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!pizza) return (
    <div className="container my-5 text-center">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">{pizza.name}</h1>
          <p className="lead mb-4">{pizza.desc}</p>
          
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Ingredientes</h3>
              <ul className="list-group list-group-flush">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-danger mb-0">${pizza.price.toLocaleString()}</h2>
            <button 
              onClick={() => addToCart(pizza)}
              className="btn btn-danger btn-lg"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;