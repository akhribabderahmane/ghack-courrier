import React from "react";
import PricingOption from "../pricing/pricingOption";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center align-middle lg:h-svh w-full mt-12 sm:mt-24 bg-darkBlue ">
      <h1 className="align-middle text-5xl font-extrabold text-white mt-4">
        Pricing
      </h1>

      <div className="flex flex-col items-center font-extrabold mt-2 sm:mt-8">
        <div className="text-[10px] sm:text-2xl text-white ">
          Drowning in emails and social media messages
        </div>

        <div className="text-[10px]  sm:text-2xl  text-white ">
          Respondr helps you stay afloat.
        </div>
      </div>

      <div className=" px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 mt-0 mb-9 h-2/3">
        <div className="  space-y-8 lg:grid lg:grid-cols-3  xl:gap-0 lg:space-y-0">
          <PricingOption
            title="FREE"
            price="$0"
            description="Organize across all apps by hand."
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 1 developer",
              "Premium support: 6 months",
              "Free updates: 6 months"
            ]}
            buttonText="Order Now"
          />

          <PricingOption
            title="STANDARD"
            price="$10"
            description="Organize across all apps by hand."
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 10 developers",
              "Premium support: 24 months",
              "Free updates: 24 months"
            ]}
            buttonText="Order Now"
          />

          <PricingOption
            title="BUSINESS"
            price="$99"
            description="Organize across all  apps by hand."
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 100+ developers",
              "Premium support: 36 months",
              "Free updates: 36 months"
            ]}
            buttonText="Order Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
