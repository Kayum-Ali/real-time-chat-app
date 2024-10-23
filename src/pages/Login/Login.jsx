import { useState } from "react";
import assets from "../../assets/assets"
import '../../styles/login.css'
import { signUp,login } from "../../config/firebase.config";

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit= (e) =>{
    e.preventDefault()
    if(currentState === 'Sign Up'){
      signUp(userName,email, password, )
    }else{
      // login code here
      login(email, password)
    }
   
  }
    return (
        <div className="login flex-col lg:flex-row gap-10 py-12 lg:py-0 px-5">
           <img className="logo " src={assets.logo_big} alt="" />
           <form onSubmit={handleSubmit} className="login-form bg-white py-5 px-[30px] flex flex-col gap-5 rounded-[10px] text-black">
               <h2 className="font-semibold text-2xl">{currentState}</h2>
               {
                currentState === 'Sign Up' ?
                <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder="Username" className="form-input  outline-none bg-slate-200 px-5 py-2.5 rounded-lg placeholder-gray-500 text-[#077EFF] outline focus:outline-[#077EFF]" required/> : null
               }
              

               <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="email address"  className="form-input  outline-none bg-slate-200 px-5 py-2.5 rounded-lg placeholder-gray-500 text-[#077EFF] outline focus:outline-[#077EFF]"  required/>

               <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password"  className="form-input form-input  outline-none bg-slate-200 px-5 py-2.5 rounded-lg placeholder-gray-500 text-[#077EFF] outline focus:outline-[#077EFF]"  required/>
               <button className="btn bg-[#077EFF] text-white outline-none border-none">{currentState === 'Sign Up' ? 'Create account' : 'Login now'}</button>
               <div className="login-term flex gap-2">
                   <input type="checkbox" className="checkbox checkbox-info" />
                   <p className="opacity-80">Agree to the terms of use & privacy policy</p>
               </div>
               <div className="login-forget text-center">
                  {
                    currentState === 'Sign Up' ?
                    <p className="login-toggle text-[#5c5c5c]">Already have an account <span onClick={()=> setCurrentState('Login')} className="text-[#077EFF] cursor-pointer underline">Login here</span></p>
                    :
                    <p className="login-toggle text-[#5c5c5c]">Create  an account <span onClick={()=> setCurrentState('Sign Up')} className="text-[#077EFF] cursor-pointer underline">click here</span></p>
                  }
               </div>
           </form>
            
        </div>
    );
};

export default Login;