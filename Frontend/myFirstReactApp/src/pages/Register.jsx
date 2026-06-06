import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email , setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
    console.log("email: ", email);
    
  };

  return (
    
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Registration!!!</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Full Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <br />
             <label htmlFor="email">Email</label>
            <input
              type="email"
              name="usermail"
              className="form-control"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <div className=" text-end" >
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <hr />
           <p>
            Don't have an account? <Link to ="/login" >Login</Link>
          </p>
        </div>
      </div>
    
  );
}
export default Register;