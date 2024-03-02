import React from "react";
import illu from "../../assets/images/illu_register.svg";
import { Divider } from "@mui/material";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";


function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique de gestion de la soumission du formulaire
  };
  
  return (
    <div className="bg-darkBlue h-screen flex">
      
      <div className="flex justify-center items-center bg-gradient-to-r from-red-100 to-cyan-200 w-2/3 h-full rounded-r-[50px] flex flex-col px-20 py-35">
        <div className="text-6xl font-bold text-darkBlue ">Sign Up</div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around h-[60vh] w-[70%] mt-10">
          <input placeholder="Enter Your Full Name" type="text" className="h-[7vh] pl-4 rounded-lg shadow-[0px_0px_2px_0px_#013A66]  outline-darkBlue" />
          <input placeholder="Enter Your Email" type="email" className="h-[7vh]  pl-4 rounded-lg  shadow-[0px_0px_2px_0px_#013A66] outline-darkBlue"/>
          <input placeholder="Enter Your Password" type="password" className="h-[7vh]  pl-4 pr-4 rounded-lg  shadow-[0px_0px_2px_0px_#013A66] outline-darkBlue"/>

          <input placeholder="Confirm Your Password" type="password" className="h-[7vh]  pl-4 pr-4 rounded-lg  shadow-[0px_0px_2px_0px_#013A66] outline-darkBlue"/>
          <div className="w-full h-1/4 px-20">
          <button
            type="submit"
            className="h-[7vh] w-full bg-darkBlue px-20 text-2xl font-bold text-white font-semibold rounded-3xl hover:shadow-[0px_0px_16px_0px_#013A66] "
          >          
            Sign In
          </button>
          <div className="flex flex-row justify-center mt-3">
            <p>Don’t have an account? </p>
            <button className="text-darkBlue font-bold"  >Signin</button>

          </div>
          </div>
          
        </form>
       <p className="font-bold ">- Or -</p>
       <div className="divider"></div>
       <div className="flex flex-row w-full justify-evenly px-14 mt-5">
       <div className="flex flex-row items-center justify-evenly  font-bold w-1/3 rounded-lg px-6 py-2 shadow-[0px_0px_2px_0px_#013A66]">
        <button> <img src={google} alt="" className="src" /></button>
        <p> With Google</p>
       </div>
       <div className="flex flex-row items-center justify-evenly  font-bold w-1/3  rounded-lg px-6 py-2 shadow-[0px_0px_2px_0px_#013A66]">
        <button> <img src={facebook} alt="" className="src" /></button>
        <p> With Facebook</p>

       </div>
       </div>
    
       <button><img></img></button>
      </div>
      <div className="flex flex-col w-1/3 h-full px-12 justify-center items-center">
        <div className="text-6xl font-bold text-white ">Respondr</div>
        <img src={illu} alt="register illustartion"></img>
        <div className="text-4xl font-normal text-white">
          Streamline Your Communication,
          <br /> Supercharge Your Efficiency.
        </div>
      </div>
    </div>
  );
}

export default SignUp;
