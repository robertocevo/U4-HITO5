const Register = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-danger text-white">
              <h2 className="mb-0">Registro</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre Completo:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Ingresa tu email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña:</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Crea una contraseña"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirmar Contraseña:</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Repite tu contraseña"
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Registrarse
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>¿Ya tienes cuenta? <a href="/login" className="text-danger">Inicia sesión</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;