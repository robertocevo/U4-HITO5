import { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';
import Header from '../components/Header';

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizzas')
      .then(response => setPizzas(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="col">
              <PizzaCard pizza={pizza} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;