import React from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-6">
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" />

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
