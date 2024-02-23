import React from "react";
import Navbar from "../../components/Navbar";
import FirstImage from '../../assets/images/istockphoto-1335050732-1024x1024.jpg'
import SecondImage from '../../assets/images/istockphoto-1349390515-1024x1024 (1).jpg'
import ThirdImage from '../../assets/images/istockphoto-1349390515-1024x1024.jpg'
import ForthImage from '../../assets/images/istockphoto-1368237807-1024x1024.jpg'


const Hero = () => {
  return (
    <main className=" px-8">
      <section className=" flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 flex justify-center items-center text-center">
          <div className=" space-y-5">
            <div className=" flex flex-col items-center mb-6">
              <p className=" font-medium">simplify</p>
              <h1 className=" text-6xl font-bold max-w-xl ">
                Streamline Your Correspondence
              </h1>
            </div>
            <div>
              <p className=" max-w-xl">
                Introducing a platform that simplifies the handling of large
                volumes of correspondence across multiple channels.
              </p>
            </div>
            <div className=" space-x-2">
              <button className=" px-3 py-2 border-2 border-gray-950 bg-gray-950 text-slate-200">
                Learn more
              </button>
              <button className=" px-5 py-2 border-2 border-slate-900">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen  flex flex-row items-center my-10">
        <div className=" w-1/2 px-4">
          <div className=" mb-2">
            <h2 className=" text-4xl font-bold">
              Streamline your document management with our powerful Electronic
              Document Management (EDM) integration.
            </h2>
          </div>
          <div>
            <p className=" font-semibold">
              Our EDM integration feature allows you to seamlessly manage and
              organize your documents across multiple channels and platforms.
            </p>
          </div>
          <div className="mt-8 ml-10">
              <ul className=" flex flex-col text-lg">
                <li>
                  <p>Efficiently store and retrieve important documents.</p>
                </li>
                <li>
                  <p>Automate document routing and approval processes.</p>
                </li>
                <li>
                  <p>Ensure compliance with industry regulations and standards.</p>
                </li>
              </ul>
          </div>
        </div>
        <div className="w-1/2">
            <div>
              <img src={FirstImage} alt=""  className=" rounded-xl"/>
            </div>
        </div>
      </section>
      <section className="">
        <div className=" flex justify-center">
          <h2 className=" text-center text-4xl font-bold px-10 max-w-4xl">Intelligent routing for efficient handling of incoming mails</h2>
        </div>
        <div>

        </div>
      </section>
    </main>
  );
};

export default Hero;
