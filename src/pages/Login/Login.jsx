import assets from "../../assets/assets"
import '../../styles/login.css'

const Login = () => {
    return (
        <div className="login">
           <img src={assets.logo_big} alt="" />
           <form action="">
               <h2>Login</h2>
               <input type="text" placeholder="Username" className="form-input" required/>
               <input type="email" placeholder="email address"  className="form-input"  required/>
               <input type="password" placeholder="password"  className="form-input"  required/>
               <button>Login</button>
               <div className="login-term">
                   <input type="checkbox" />
                   <p>Agree to the terms of use & privacy policy</p>
               </div>
               <div className="login-forget">
                   <p className="login-toggle">Already have an account <span>click here</span></p>
               </div>
           </form>
            
        </div>
    );
};

export default Login;