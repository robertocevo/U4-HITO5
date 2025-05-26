import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5 text-center">
      <div className="card shadow">
        <div className="card-body py-5">
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">Página no encontrada</h2>
          <p className="lead mb-4">La página que buscas no existe o ha sido movida.</p>
          <Link to="/" className="btn btn-danger btn-lg">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;