const Profile = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-danger text-white">
              <h2 className="mb-0">Mi Perfil</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" value="Usuario Ejemplo" readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value="usuario@example.com" readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label">Dirección:</label>
                <input type="text" className="form-control" value="Calle Falsa 123" readOnly />
              </div>
              <button className="btn btn-danger mt-3">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;