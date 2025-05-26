const Header = () => {
    return (
      <header 
        className="bg-dark text-white py-5 mb-4 text-center"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), url(https://images.unsplash.com/photo-1513104890138-7c749659a591) center/cover'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Pizzería Mamma Mía</h1>
          <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>
    );
  };
  
  export default Header;