import React from "react";
import illu from "../../assets/images/illu_register.svg";

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique de gestion de la soumission du formulaire
  };
  return (
    <div className="bg-darkBlue h-screen flex">
      <div className="flex flex-col w-1/3 h-full px-12 justify-center items-center">
        <div className="text-6xl font-bold text-white ">Respondr</div>
        <img src={illu} alt="register illustartion"></img>
        <div className="text-4xl font-normal text-white">
          Streamline Your Communication,
          <br /> Supercharge Your Efficiency.
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-red-100 to-cyan-200 w-2/3 h-full rounded-l-[50px] flex flex-col px-20 py-35">
        <div className="text-6xl font-bold text-darkBlue ">Sign In</div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-around h-[40vh] w-[70%] mt-10">
          <input placeholder="Enter Your Email" type="email" className="h-[7vh] pl-4 rounded-lg shadow-[0px_0px_2px_0px_#013A66]  outline-darkBlue" />

          <input placeholder="Enter Your Password" type="password" className="h-[7vh]  pl-4 rounded-lg  shadow-[0px_0px_2px_0px_#013A66] outline-darkBlue"/>
          <div className="w-full h-1/4 px-20">
          <button
            type="submit"
            className="h-[7vh] w-full bg-darkBlue px-20 text-2xl font-bold text-white font-semibold rounded-3xl hover:shadow-[0px_0px_16px_0px_#013A66] "
          >          
            Login
          </button>
          <div className="flex flex-row justify-center mt-3">
            <p>Don’t have an account? </p>
            <button className="text-darkBlue font-bold">Signup</button>

          </div>
          </div>
          
        </form>
       

      </div>
    </div>
  );
}

export default SignIn;
