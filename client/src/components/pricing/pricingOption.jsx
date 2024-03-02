import React from "react";

const PricingOption = ({ title, price, description, features, buttonText }) => {
  return (
    <div className="flex flex-col px-6 py-0 mx-auto w-3/4 max-w-lg text-center text-darkBlue bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transform transition-transform duration-300 hover:scale-110  hover:shadow-[0px_0px_10px_0px_#ffffff]">
      <h3 className="mb-2 text-2xl font-extrabold">{title}</h3>
      <p className="font-semibold  transition-colors text-darkBlue hover:text-white sm:text-xl ">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold transition-colors duration-300 hover:text-white">{price}</span>
        <span className="text-darkBlue transition-colors duration-300 hover:text-white">/month</span>
      </div>
      <ul role="list" className="space-y-0 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="text-white font-extrabold bg-primary rounded-2xl hover:bg-darkBlue  mb-8 sm:mb-0 mt-8 focus:ring-4 focus:ring-primary-200  rounded-lg text-sm px-5 py-2 text-center dark:text-white dark:focus:ring-primary-900"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingOption;
