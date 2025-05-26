const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container my-5">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <div className="list-group mb-3">
            {cartItems.map(item => (
              <div key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{item.name}</h5>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div>
                    <h5>${(item.price * item.quantity).toLocaleString()}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end">
            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="btn btn-danger btn-lg">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;