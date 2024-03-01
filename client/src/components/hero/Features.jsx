import React from "react";

const Features = () => {
  return (
    <div className=" px-12 pt-20 h-screen">
      <div className=" flex flex-col justify-center items-center text-center">
        <h2 className=" text-4xl font-bold text-darkBlue">Features</h2>
        <p className="subtitle  text-lg font-medium">
          Drowning in emails and social media messages? 
          afloat.
        </p>
        <p className="text-lg font-medium">Respondr helps you stay afloat.</p>
      </div>
      <div className=" flex basis-1/3 gap-10 justify-center mt-6">
        {features.map((feature) => {
          return (
            <div className=" flex flex-col items-center w-[300px] gap-2">
              <div className=" h-30">{feature.icon}</div>
              <h3 className=" text-lg font-semibold">{feature.title}</h3>
              <p className=" px-10 text-center">{feature.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

const firstIcon = (
  <svg
    width="47"
    height="47"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6042 0.625C18.3117 0.625 21.8673 2.0978 24.4889 4.7194C27.1105 7.34101 28.5833 10.8967 28.5833 14.6042C28.5833 17.9846 27.3888 21.0854 25.3808 23.5H46.375V46.375H23.5V25.3808C21.0854 27.3888 17.9846 28.5833 14.6042 28.5833C10.8967 28.5833 7.34101 27.1105 4.7194 24.4889C2.0978 21.8673 0.625 18.3117 0.625 14.6042C0.625 10.8967 2.0978 7.34101 4.7194 4.7194C7.34101 2.0978 10.8967 0.625 14.6042 0.625Z"
      fill="#2091F9"
    />
  </svg>
);
const secondIcon = (
  <svg
    width="57"
    height="56"
    viewBox="0 0 57 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.2496 48.6502C27.4029 47.0168 26.4929 42.5135 24.3929 39.6668C22.3163 36.7502 19.4463 34.7435 16.5529 32.8068C14.4885 31.5057 12.6453 29.883 11.0929 28.0002C10.4396 27.2302 9.10961 25.8068 10.4629 25.5268C11.8396 25.2468 14.2196 26.6002 15.4329 27.1135C17.5563 28.0002 19.6563 29.0268 21.6163 30.2402L23.9729 26.2735C20.3329 23.8702 15.6663 21.7468 11.3263 21.1168C8.85294 20.7435 6.23961 21.2568 5.39961 23.9402C4.65294 26.2502 5.84294 28.5835 7.19628 30.4035C10.3929 34.6735 15.3629 36.7268 19.0729 40.4135C19.8663 41.1835 20.8229 42.0935 21.2896 43.1668C21.7796 44.1935 21.6629 44.2635 20.5663 44.2635C17.6729 44.2635 14.0563 42.0002 11.6996 40.5068L9.34294 44.4735C12.9129 46.6668 18.8863 50.0968 23.2496 48.6502ZM49.1263 12.2502C49.6396 11.7368 49.6396 10.8968 49.1263 10.4068L46.0929 7.37349C45.8486 7.13795 45.5224 7.00635 45.1829 7.00635C44.8435 7.00635 44.5173 7.13795 44.2729 7.37349L41.8929 9.75349L46.7463 14.6068L49.1263 12.2502ZM26.1663 25.4802V30.3335H31.0196L45.3696 15.9835L40.5163 11.1302L26.1663 25.4802Z"
      fill="#2091F9"
    />
  </svg>
);
const thirdIcon = (
  <svg
    width="61"
    height="61"
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.6381 11.7679L49.2323 8.36209C48.2918 7.37084 46.6397 7.37084 45.6485 8.36209L22.8752 31.1354L29.8647 38.125L52.6381 15.3517C53.6293 14.3604 53.6293 12.7083 52.6381 11.7679ZM17.7918 35.5833C15.7696 35.5833 13.8301 36.3867 12.4001 37.8167C10.9702 39.2466 10.1668 41.1861 10.1668 43.2083C10.1668 46.5379 7.2185 48.2917 5.0835 48.2917C7.42183 51.3925 11.4377 53.375 15.2502 53.375C17.9465 53.375 20.5325 52.3039 22.4391 50.3973C24.3457 48.4906 25.4168 45.9047 25.4168 43.2083C25.4168 41.1861 24.6135 39.2466 23.1835 37.8167C21.7536 36.3867 19.8141 35.5833 17.7918 35.5833Z"
      fill="#2091F9"
    />
  </svg>
);

const features = [
  {
    title: "Multi-ChannelIntegration",
    body: "Integrate seamlessly with various communication channelsincluding email social media and internal messaging systems allowing organizations to manage all  communications in one centralized platform",
    icon: firstIcon,
  },
  {
    title: "Predictive Routing",
    body: "a predictive routing system that learns from historical data to intelligently route messages to the most relevant department or individual.",
    icon: secondIcon,
  },
  {
    title: "Smart Auto-Responses",
    body: "generated context-aware auto-responses, saving time and providing instant acknowledgment to senders.",
    icon: thirdIcon,
  },
];
