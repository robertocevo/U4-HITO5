import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, cartTotal } = useCart();

  const handleIncrease = (pizza) => {
    addToCart(pizza);
  };

  const handleDecrease = (pizza) => {
    if (pizza.quantity > 1) {
      addToCart({ ...pizza, quantity: -1 });
    } else {
      removeFromCart(pizza.id);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu Carrito</h2>
      
      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío
        </div>
      ) : (
        <>
          <div className="list-group mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p className="mb-1 text-muted">
                      ${item.price.toLocaleString()} c/u
                    </p>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <button 
                      onClick={() => handleDecrease(item)}
                      className="btn btn-outline-danger btn-sm me-2"
                    >
                      -
                    </button>
                    
                    <span className="mx-2">{item.quantity}</span>
                    
                    <button 
                      onClick={() => handleIncrease(item)}
                      className="btn btn-outline-success btn-sm ms-2"
                    >
                      +
                    </button>
                    
                    <span className="ms-3 fw-bold">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body text-end">
              <h4 className="card-title">
                Total: <span className="text-danger">${cartTotal.toLocaleString()}</span>
              </h4>
              <button className="btn btn-danger btn-lg mt-3">
                Realizar Pedido
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;